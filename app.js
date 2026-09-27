// GOVERN Diagnostic
// Renders the six building blocks, collects a stage (1 to 3) for each,
// and returns a readout: the stage set by the weakest blocks, where to start,
// and a 30-day plan built from the reader's own answers.

const UI = {
  en: {
    title: "AI Operating Model Diagnostic",
    intro: "Six building blocks, three stages each. Choose the description that matches where your organization is today, not where you plan to be.",
    score: "See my readout",
    missing: "Please choose a stage for every building block.",
    overall: "Your stage",
    average: "average",
    heldBack: (names) => `Held back by ${names}. Your weakest blocks set the pace, not your average.`,
    plan: "Your next 30 days",
    when: ["This week", "Within two weeks", "Within 30 days"],
    and: "and",
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
    overall: "Ihre Stufe",
    average: "Durchschnitt",
    heldBack: (names) => `Gebremst durch ${names}. Ihre schwächsten Bausteine bestimmen das Tempo, nicht Ihr Durchschnitt.`,
    plan: "Ihre nächsten 30 Tage",
    when: ["Diese Woche", "In zwei Wochen", "In 30 Tagen"],
    and: "und",
    copy: "Zusammenfassung kopieren",
    copied: "Kopiert",
    lang: "English",
    footer: "GOVERN ist ein Framework von Uta Knäblein. Ihre Eingaben verlassen Ihren Browser nicht."
  }
};

const state = { lang: "en", answers: {} };
const { stages, blocks, closingStep, allNative } = window.GOVERN;

const t = (key) => UI[state.lang][key];
const loc = (obj) => obj[state.lang];
const num = (n) => n.toLocaleString(state.lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

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
// GOVERN's rule: the weakest block sets the pace, so the headline stage is the
// lowest stage, not the rounded average. The average is shown only as context.
function score(answers) {
  const values = blocks.map((b) => answers[b.key]);
  if (values.some((v) => !v)) return null;

  const average = values.reduce((a, b) => a + b, 0) / values.length;
  const lowest = Math.min(...values);

  // Weakest first. Ties keep GOVERN order, because the framework is sequenced:
  // Ground before Orchestrate, and so on. (Array.prototype.sort is stable.)
  const ranked = [...blocks].sort((a, b) => answers[a.key] - answers[b.key]);
  const holdingBack = blocks.filter((b) => answers[b.key] === lowest);
  const priorities = ranked.filter((b) => answers[b.key] < 3).slice(0, 2);

  return { average, stage: lowest, holdingBack, priorities, allNative: lowest === 3 };
}

// The plan: one step for each of the two weakest blocks, then a team step.
function buildPlan(r) {
  const steps = r.priorities.map((b) => ({ block: b, text: loc(b.nextStep) }));
  steps.push({ block: null, text: loc(closingStep) });
  const when = t("when");
  return steps.map((step, i) => ({
    ...step,
    when: i === steps.length - 1 ? when[2] : when[i]
  }));
}

function joinNames(list) {
  const names = list.map((b) => loc(b.name));
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(", ")} ${t("and")} ${names[names.length - 1]}`;
}

function renderResult() {
  const result = document.getElementById("result");
  const r = score(state.answers);

  if (!r) {
    result.hidden = false;
    result.innerHTML = `<p class="warning">${t("missing")}</p>`;
    return;
  }

  const bars = blocks.map((b) => {
    const weak = !r.allNative && r.holdingBack.includes(b);
    return `
    <div class="bar-row${weak ? " weak" : ""}">
      <span class="bar-label"><span class="bar-key">${b.key}</span> ${loc(b.name)}</span>
      <div class="bar"><div class="fill" style="width:${(state.answers[b.key] / 3) * 100}%"></div></div>
      <span class="bar-value">${state.answers[b.key]}</span>
    </div>`;
  }).join("");

  let body;
  if (r.allNative) {
    body = `<div class="card"><p>${loc(allNative)}</p></div>`;
  } else {
    body = `
    <h3>${t("plan")}</h3>
    <ol class="plan">${buildPlan(r).map((step, i) => `
      <li${i === 0 ? ' class="first"' : ""}><strong>${step.when}${step.block ? ` · ${loc(step.block.name)}` : ""}</strong> ${step.text}</li>`).join("")}
    </ol>`;
  }

  result.hidden = false;
  result.innerHTML = `
    <h2>${t("overall")}: ${loc(stages[r.stage - 1].name)}
      <span class="muted">(${t("average")} ${num(r.average)} / 3)</span></h2>
    ${r.allNative ? "" : `<p class="held-back">${t("heldBack")(joinNames(r.holdingBack))}</p>`}
    <div class="bars">${bars}</div>
    ${body}
    <button id="copy" class="ghost" type="button">${t("copy")}</button>`;

  document.getElementById("copy").addEventListener("click", (e) => copySummary(r, e.target));
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function copySummary(r, button) {
  const lines = [
    `GOVERN: ${t("overall")} ${loc(stages[r.stage - 1].name)} (${t("average")} ${num(r.average)} / 3)`,
    ...blocks.map((b) => `${b.key} ${loc(b.name)}: ${state.answers[b.key]}`),
    ""
  ];
  if (r.allNative) {
    lines.push(loc(allNative));
  } else {
    lines.push(`${t("plan")}:`, ...buildPlan(r).map((s) => `- ${s.when}: ${s.text}`));
  }
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
