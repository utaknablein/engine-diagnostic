// GOVERN Diagnostic
// Renders the six building blocks, collects a stage (1 to 3) for each,
// and returns a readout: overall stage, the weakest block, and a 30-day plan.

const UI = {
  en: {
    title: "AI Operating Model Diagnostic",
    intro: "Six building blocks, three stages each. Choose the description that matches where your organization is today, not where you plan to be.",
    score: "See my readout",
    missing: "Please choose a stage for every building block.",
    overall: "Overall stage",
    focus: "Start here",
    plan: "Your next 30 days",
    copy: "Copy summary",
    copied: "Copied",
    lang: "Deutsch",
    footer: "GOVERN is a framework by Uta Knablein. Nothing you enter leaves your browser."
  },
  de: {
    title: "Diagnose des KI-Betriebsmodells",
    intro: "Sechs Bausteine, jeweils drei Stufen. Wählen Sie die Beschreibung, die Ihr Institut heute trifft, nicht den Zielzustand.",
    score: "Auswertung anzeigen",
    missing: "Bitte wählen Sie für jeden Baustein eine Stufe.",
    overall: "Gesamtstufe",
    focus: "Hier beginnen",
    plan: "Ihre nächsten 30 Tage",
    copy: "Zusammenfassung kopieren",
    copied: "Kopiert",
    lang: "English",
    footer: "GOVERN ist ein Framework von Uta Knäblein. Ihre Eingaben verlassen Ihren Browser nicht."
  }
};

const state = { lang: "en", answers: {} };
const { stages, blocks, plan } = window.GOVERN;

const t = (key) => UI[state.lang][key];
const loc = (obj) => obj[state.lang];

function renderText() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.getElementById("lang").textContent = t("lang");
}

function renderForm() {
  const form = document.getElementById("form");
  form.innerHTML = blocks.map((b) => `
    <fieldset>
      <legend><span class="letter">${b.key}</span> ${loc(b.name)}</legend>
      <p class="principle">${loc(b.principle)}</p>
      <p class="question">${loc(b.question)}</p>
      ${b.levels.map((lvl, i) => `
        <label class="option">
          <input type="radio" name="${b.key}" value="${i + 1}"
            ${state.answers[b.key] === i + 1 ? "checked" : ""}>
          <span><strong>${loc(stages[i].name)}</strong> ${loc(lvl)}</span>
        </label>`).join("")}
    </fieldset>`).join("");

  form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      state.answers[input.name] = Number(input.value);
    });
  });
}

// Pure scoring logic, kept separate so it can be tested on its own.
function score(answers) {
  const values = blocks.map((b) => answers[b.key]);
  if (values.some((v) => !v)) return null;

  const average = values.reduce((a, b) => a + b, 0) / values.length;
  const lowest = Math.min(...values);
  // The weakest block sets the pace. Ties go to the earlier block,
  // because GOVERN is sequenced: Ground before Orchestrate, and so on.
  const focus = blocks.find((b) => answers[b.key] === lowest);

  return { average, stage: Math.round(average), focus, lowest };
}

function renderResult() {
  const result = document.getElementById("result");
  const r = score(state.answers);

  if (!r) {
    result.hidden = false;
    result.innerHTML = `<p class="warning">${t("missing")}</p>`;
    return;
  }

  const bars = blocks.map((b) => `
    <div class="bar-row">
      <span class="bar-label">${b.key}</span>
      <div class="bar"><div class="fill" style="width:${(state.answers[b.key] / 3) * 100}%"></div></div>
      <span class="bar-value">${state.answers[b.key]}</span>
    </div>`).join("");

  result.hidden = false;
  result.innerHTML = `
    <h2>${t("overall")}: ${loc(stages[r.stage - 1].name)} <span class="muted">(${r.average.toFixed(1)} / 3)</span></h2>
    <div class="bars">${bars}</div>
    <div class="card">
      <p class="eyebrow">${t("focus")}</p>
      <h3>${r.focus.key} · ${loc(r.focus.name)}</h3>
      <p>${loc(r.focus.nextStep)}</p>
    </div>
    <h3>${t("plan")}</h3>
    <ol class="plan">${plan[state.lang].map(([when, what]) => `<li><strong>${when}</strong> ${what}</li>`).join("")}</ol>
    <button id="copy" class="ghost" type="button">${t("copy")}</button>`;

  document.getElementById("copy").addEventListener("click", (e) => copySummary(r, e.target));
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function copySummary(r, button) {
  const lines = [
    `GOVERN: ${t("overall")} ${loc(stages[r.stage - 1].name)} (${r.average.toFixed(1)} / 3)`,
    ...blocks.map((b) => `${b.key} ${loc(b.name)}: ${state.answers[b.key]}`),
    `${t("focus")}: ${loc(r.focus.name)}. ${loc(r.focus.nextStep)}`
  ];
  navigator.clipboard.writeText(lines.join("\n")).then(() => {
    button.textContent = t("copied");
  });
}

document.getElementById("lang").addEventListener("click", () => {
  state.lang = state.lang === "en" ? "de" : "en";
  renderText();
  renderForm();
  if (!document.getElementById("result").hidden) renderResult();
});

document.getElementById("score").addEventListener("click", renderResult);

renderText();
renderForm();
