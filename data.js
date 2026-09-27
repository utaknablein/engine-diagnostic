// GOVERN framework content.
// Everything a reader sees lives here, so the framework can evolve without touching app logic.
// Stage descriptions are working drafts: refine them against the Diagnose instrument.

window.GOVERN = {
  stages: [
    { id: 1, name: { en: "Experimenting", de: "Experimentieren" } },
    { id: 2, name: { en: "Coordinating", de: "Koordinieren" } },
    { id: 3, name: { en: "Native", de: "Nativ" } }
  ],

  blocks: [
    {
      key: "G",
      name: { en: "Ground", de: "Verankern" },
      principle: {
        en: "An honest inventory before any transformation.",
        de: "Ehrliche Bestandsaufnahme vor jeder Transformation."
      },
      question: {
        en: "How many of your AI initiatives could you describe today, with an owner and a purpose for each?",
        de: "Wie viele Ihrer KI-Initiativen könnten Sie heute benennen, jeweils mit Verantwortlichem und Zweck?"
      },
      levels: [
        { en: "AI use is scattered. Nobody has a full list of what is running or who owns it.", de: "KI-Nutzung ist verstreut. Niemand hat einen vollständigen Überblick, was läuft und wem es gehört." },
        { en: "There is an inventory, but it is maintained by hand and goes stale between reviews.", de: "Es gibt ein Inventar, aber es wird manuell gepflegt und veraltet zwischen den Reviews." },
        { en: "The inventory is live, owned, and used in leadership decisions.", de: "Das Inventar ist aktuell, hat klare Verantwortung und fließt in Vorstandsentscheidungen ein." }
      ],
      nextStep: {
        en: "List every AI initiative in one place, with an owner and a one-line purpose for each.",
        de: "Listen Sie alle KI-Initiativen an einem Ort auf, jeweils mit Verantwortlichem und Zweck in einem Satz."
      }
    },
    {
      key: "O",
      name: { en: "Orchestrate", de: "Koordinieren" },
      principle: {
        en: "Coordination, not technology, is the new competitive advantage.",
        de: "Koordination, nicht Technologie, ist der neue Wettbewerbsvorteil."
      },
      question: {
        en: "In three years, when everyone uses the same models, what will set your institution apart?",
        de: "In drei Jahren, wenn alle dieselben Modelle nutzen: Was unterscheidet dann Ihr Institut?"
      },
      levels: [
        { en: "Teams pick tools and use cases independently. Efforts overlap and compete.", de: "Teams wählen Werkzeuge und Anwendungsfälle unabhängig. Initiativen überschneiden sich." },
        { en: "A central function coordinates, but mostly by approving requests.", de: "Eine zentrale Stelle koordiniert, überwiegend durch Freigaben." },
        { en: "AI priorities follow the strategy, and the portfolio is managed as a whole.", de: "KI-Prioritäten folgen der Strategie, das Portfolio wird als Ganzes gesteuert." }
      ],
      nextStep: {
        en: "Pick the three initiatives that matter most to the strategy and stop or merge one that does not.",
        de: "Wählen Sie die drei strategisch wichtigsten Initiativen und stoppen oder bündeln Sie eine, die nicht dazu passt."
      }
    },
    {
      key: "V",
      name: { en: "Verify", de: "Verifizieren" },
      principle: {
        en: "Zero-trust governance before deployment: ex ante, not reactive.",
        de: "Zero-Trust-Governance vor dem Deployment: ex ante, nicht reaktiv."
      },
      question: {
        en: "Do you decide what an AI system may and may not do before it goes live, or after something goes wrong?",
        de: "Legen Sie fest, was ein KI-System darf, bevor es live geht, oder erst, wenn etwas schiefgeht?"
      },
      levels: [
        { en: "Checks happen after launch, usually in response to a problem.", de: "Prüfungen finden nach dem Start statt, meist als Reaktion auf ein Problem." },
        { en: "There is a pre-launch review, but it is a gate rather than part of the design.", de: "Es gibt eine Prüfung vor dem Start, aber als Hürde, nicht als Teil des Designs." },
        { en: "Boundaries, controls and escalation paths are designed in from the start.", de: "Grenzen, Kontrollen und Eskalationswege sind von Anfang an mitgestaltet." }
      ],
      nextStep: {
        en: "For one live system, write down what it may decide alone, what needs a human, and who is accountable.",
        de: "Halten Sie für ein laufendes System fest, was es allein entscheiden darf, was ein Mensch prüft und wer verantwortlich ist."
      }
    },
    {
      key: "E",
      name: { en: "Embed", de: "Einbetten" },
      principle: {
        en: "AI built into the workflow: native, not an optional tool.",
        de: "KI strukturell im Workflow: nativ, nicht als optionales Werkzeug."
      },
      question: {
        en: "If an analyst never opens the AI tool, does the quality of the decision change?",
        de: "Wenn Ihr Analyst das KI-Werkzeug nicht öffnet: Ändert das die Qualität der Entscheidung?"
      },
      levels: [
        { en: "AI is an optional tool that individuals use when they choose to.", de: "KI ist ein optionales Werkzeug, das Einzelne nach Belieben nutzen." },
        { en: "AI is part of some workflows, but the process would run the same without it.", de: "KI ist Teil einiger Abläufe, aber der Prozess liefe ohne sie genauso." },
        { en: "Key workflows are designed around AI, with clear hand-offs between people and systems.", de: "Zentrale Abläufe sind um KI herum gestaltet, mit klaren Übergaben zwischen Mensch und System." }
      ],
      nextStep: {
        en: "Draw one important workflow end to end and mark where AI should do the work, not just assist.",
        de: "Zeichnen Sie einen wichtigen Ablauf vollständig auf und markieren Sie, wo KI die Arbeit übernehmen soll, nicht nur unterstützen."
      }
    },
    {
      key: "R",
      name: { en: "Redesign", de: "Neu gestalten" },
      principle: {
        en: "From decision maker to decision architect.",
        de: "Vom Entscheider zum Entscheidungsarchitekten."
      },
      question: {
        en: "Does your leadership team spend more time making individual decisions or designing how decisions get made?",
        de: "Verbringt Ihr Vorstand mehr Zeit mit Einzelentscheidungen oder mit der Gestaltung, wie entschieden wird?"
      },
      levels: [
        { en: "Leaders make decisions case by case. AI informs some of them.", de: "Führungskräfte entscheiden Fall für Fall. KI liefert gelegentlich Input." },
        { en: "Some decision rules are written down, but mostly for compliance.", de: "Einige Entscheidungsregeln sind dokumentiert, überwiegend aus Compliance-Gründen." },
        { en: "Leaders design decision systems and spend their own time on the exceptions.", de: "Führungskräfte gestalten Entscheidungssysteme und kümmern sich selbst um die Ausnahmen." }
      ],
      nextStep: {
        en: "Name one recurring decision and write the rule that would let it be made well without you.",
        de: "Benennen Sie eine wiederkehrende Entscheidung und formulieren Sie die Regel, nach der sie ohne Sie gut getroffen würde."
      }
    },
    {
      key: "N",
      name: { en: "Normalize", de: "Normalisieren" },
      principle: {
        en: "AI governance as an institutional standard, not a project.",
        de: "KI-Governance als institutioneller Standard, nicht als Projekt."
      },
      question: {
        en: "If the project team disbanded tomorrow, would your AI governance keep running?",
        de: "Wenn sich das Projektteam morgen auflöst: Läuft Ihre KI-Governance weiter?"
      },
      levels: [
        { en: "Governance depends on a project or a few committed people.", de: "Governance hängt an einem Projekt oder an wenigen engagierten Personen." },
        { en: "Governance has a home, but it runs alongside the business rather than inside it.", de: "Governance hat einen festen Ort, läuft aber neben dem Geschäft statt darin." },
        { en: "Governance is part of how the institution normally runs, reviewed like any core process.", de: "Governance gehört zum normalen Betrieb und wird wie jeder Kernprozess überprüft." }
      ],
      nextStep: {
        en: "Put AI governance on the standing leadership agenda with a fixed cadence and an owner.",
        de: "Setzen Sie KI-Governance mit festem Rhythmus und klarer Verantwortung auf die ständige Vorstandsagenda."
      }
    }
  ],

  // The 30-day plan is built from the reader's two weakest blocks (see app.js).
  // This last step is the same for everyone: a diagnostic is most useful as a team conversation.
  closingStep: {
    en: "Ask each member of your leadership team to complete this diagnostic separately, then compare where your answers differ.",
    de: "Lassen Sie jedes Vorstandsmitglied diese Diagnose einzeln ausfüllen und vergleichen Sie, wo Ihre Einschätzungen auseinandergehen."
  },

  // Shown when every block is at stage 3.
  allNative: {
    en: "You are at stage 3 across all six blocks. The risk now is drift: review this every quarter, and test your answers against someone outside the leadership team.",
    de: "Sie stehen in allen sechs Bausteinen auf Stufe 3. Das Risiko ist jetzt schleichender Rückschritt: Prüfen Sie dies jedes Quartal und gleichen Sie Ihre Einschätzung mit jemandem außerhalb des Vorstands ab."
  }
};
