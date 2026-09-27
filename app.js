// ENGINE Diagnostic
// Renders the six disciplines, collects a stage (1 to 4) for each, and returns a readout:
// the stage set by the weakest disciplines, what stalling feels like there,
// and a 90-day plan built from the reader's own answers.

const UI = {
  en: {
    title: "AI Maturity Diagnostic",
    intro: "Six disciplines, four stages. Choose the description that matches where your organization is today, not where you plan to be.",
    score: "See my readout",
    missing: "Please choose a stage for every discipline.",
    overall: "Your stage",
    average: "average",
    heldBack: (names) => `Held back by ${names}. Your weakest disciplines set the pace, not your average.`,
    stall: "What stalling sounds like at this stage",
    plan: "Your next 90 days",
    when: ["Next 30 days", "Within 60 days", "Within 90 days"],
    and: "and",
    cta: "Different answers across your leadership team are the most useful finding. I facilitate ENGINE sessions that turn them into decisions.",
    ctaLink: "Get in touch",
    copy: "Copy summary",
    copied: "Copied",
    lang: "Deutsch",
    footer: "ENGINE is a framework by Uta Knablein. Nothing you enter leaves your browser."
  },
  de: {
    title: "KI-Reifegrad-Diagnose",
    intro: "Sechs Disziplinen, vier Stufen. Wählen Sie die Beschreibung, die Ihre Organisation heute trifft, nicht den Zielzustand.",
    score: "Auswertung anzeigen",
    missing: "Bitte wählen Sie für jede Disziplin eine Stufe.",
    overall: "Ihre Stufe",
    average: "Durchschnitt",
    heldBack: (names) => `Gebremst durch ${names}. Ihre schwächsten Disziplinen bestimmen das Tempo, nicht Ihr Durchschnitt.`,
    stall: "So klingt Stillstand auf dieser Stufe",
    plan: "Ihre nächsten 90 Tage",
    when: ["In 30 Tagen", "In 60 Tagen", "In 90 Tagen"],
    and: "und",
    cta: "Unterschiedliche Antworten in Ihrer Führungsebene sind das wertvollste Ergebnis. Ich moderiere ENGINE-Sessions, die daraus Entscheidungen machen.",
    ctaLink: "Kontakt aufnehmen",
    copy: "Zusammenfassung kopieren",
    copied: "Kopiert",
    lang: "English",
    footer: "ENGINE ist ein Framework von Uta Knäblein. Ihre Eingaben verlassen Ihren Browser nicht."
  }
};

const state = { lang: "en", answers: {} };
const { stages, disciplines, closingStep, topStage } = window.ENGINE;
const TOP = stages.length;
const CONTACT_URL = "https://www.linkedin.com/in/utaknablein/";

const t = (key) => UI[state.lang][key];
const loc = (obj) => obj[state.lang];
const idOf = (d) => d.id || d.key; // ENGINE repeats letters, so each discipline has its own id
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
  form.innerHTML = disciplines.map((d) => `
    <fieldset>
      <legend><span class="letter">${d.key}</span> ${loc(d.name)}</legend>
      <p class="principle">${loc(d.principle)}</p>
      <p class="question">${loc(d.question)}</p>
      ${d.levels.map((lvl, i) => `
        <label class="option">
          <input type="radio" name="${idOf(d)}" value="${i + 1}"
            ${state.answers[idOf(d)] === i + 1 ? "checked" : ""}>
          <span><strong>${i + 1} · ${loc(stages[i].name)}</strong> ${loc(lvl)}</span>
        </label>`).join("")}
    </fieldset>`).join("");

  form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      state.answers[input.name] = Number(input.value);
    });
  });
}

// Pure scoring logic, kept separate so it can be tested on its own.
// ENGINE's rule: organizations stall because they are missing two or three disciplines,
// so the headline stage is the lowest stage, not the rounded average.
function score(answers) {
  const values = disciplines.map((d) => answers[idOf(d)]);
  if (values.some((v) => !v)) return null;

  const average = values.reduce((a, b) => a + b, 0) / values.length;
  const lowest = Math.min(...values);

  // Weakest first. Ties keep ENGINE order. (Array.prototype.sort is stable.)
  const ranked = [...disciplines].sort((a, b) => answers[idOf(a)] - answers[idOf(b)]);
  const holdingBack = disciplines.filter((d) => answers[idOf(d)] === lowest);
  const priorities = ranked.filter((d) => answers[idOf(d)] < TOP).slice(0, 2);

  return { average, stage: lowest, holdingBack, priorities, atTop: lowest === TOP };
}

// The plan: one step for each of the two weakest disciplines, then a team step.
function buildPlan(r) {
  const steps = r.priorities.map((d) => ({ discipline: d, text: loc(d.nextStep) }));
  steps.push({ discipline: null, text: loc(closingStep) });
  const when = t("when");
  return steps.map((step, i) => ({
    ...step,
    when: i === steps.length - 1 ? when[2] : when[i]
  }));
}

function joinNames(list) {
  const names = list.map((d) => loc(d.name));
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

  const stage = stages[r.stage - 1];

  const bars = disciplines.map((d) => {
    const weak = !r.atTop && r.holdingBack.includes(d);
    return `
    <div class="bar-row${weak ? " weak" : ""}">
      <span class="bar-label"><span class="bar-key">${d.key}</span> ${loc(d.name)}</span>
      <div class="bar"><div class="fill" style="width:${(state.answers[idOf(d)] / TOP) * 100}%"></div></div>
      <span class="bar-value">${state.answers[idOf(d)]}</span>
    </div>`;
  }).join("");

  const stall = stage.stall
    ? `<p class="stall"><span class="eyebrow">${t("stall")}</span>${loc(stage.stall)}</p>`
    : "";

  const body = r.atTop
    ? `<div class="card"><p>${loc(topStage)}</p></div>`
    : `
    <h3>${t("plan")}</h3>
    <ol class="plan">${buildPlan(r).map((step, i) => `
      <li${i === 0 ? ' class="first"' : ""}><strong>${step.when}${step.discipline ? ` · ${loc(step.discipline.name)}` : ""}</strong> ${step.text}</li>`).join("")}
    </ol>`;

  result.hidden = false;
  result.innerHTML = `
    <h2>${t("overall")}: ${loc(stage.name)}
      <span class="muted">(${t("average")} ${num(r.average)} / ${TOP})</span></h2>
    ${r.atTop ? "" : `<p class="held-back">${t("heldBack")(joinNames(r.holdingBack))}</p>`}
    <div class="bars">${bars}</div>
    ${stall}
    ${body}
    <div class="cta">
      <p>${t("cta")}</p>
      <a href="${CONTACT_URL}" target="_blank" rel="noopener">${t("ctaLink")} →</a>
    </div>
    <button id="copy" class="ghost" type="button">${t("copy")}</button>`;

  document.getElementById("copy").addEventListener("click", (e) => copySummary(r, e.target));
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function copySummary(r, button) {
  const lines = [
    `ENGINE: ${t("overall")} ${loc(stages[r.stage - 1].name)} (${t("average")} ${num(r.average)} / ${TOP})`,
    ...disciplines.map((d) => `${d.key} ${loc(d.name)}: ${state.answers[idOf(d)]}`),
    ""
  ];
  if (r.atTop) {
    lines.push(loc(topStage));
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
