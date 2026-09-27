// ENGINE framework content.
// Everything a reader sees lives here, so the framework can evolve without touching app logic.

window.ENGINE = {
  stages: [
    {
      id: 1,
      name: { en: "Experimenter", de: "Experimentierer" },
      stall: {
        en: "\"We have great use cases. We just need to connect them.\"",
        de: "„Wir haben großartige Anwendungsfälle. Wir müssen sie nur verbinden.“"
      }
    },
    {
      id: 2,
      name: { en: "Enabler", de: "Befähiger" },
      stall: {
        en: "\"People are using the tools, but I do not see it changing how we actually make decisions.\"",
        de: "„Die Leute nutzen die Werkzeuge, aber ich sehe nicht, dass sich dadurch ändert, wie wir tatsächlich entscheiden.“"
      }
    },
    {
      id: 3,
      name: { en: "Orchestrator", de: "Orchestrator" },
      stall: {
        en: "\"We are good internally. It is the external ecosystem that is holding us back.\"",
        de: "„Intern sind wir gut. Es ist das externe Ökosystem, das uns bremst.“"
      }
    },
    {
      id: 4,
      name: { en: "Ecosystem Leader", de: "Ökosystem-Führer" },
      stall: null
    }
  ],

  disciplines: [
    {
      key: "E",
      name: { en: "Evaluate", de: "Evaluieren" },
      principle: {
        en: "Honest diagnosis before any prescription.",
        de: "Ehrliche Diagnose vor jeder Verordnung."
      },
      question: {
        en: "Can you say, with evidence, how many of your AI initiatives reached production at scale, not just pilot?",
        de: "Können Sie belegen, wie viele Ihrer KI-Initiativen im großen Maßstab produktiv laufen, nicht nur als Pilot?"
      },
      levels: [
        { en: "Success is measured by pilots and demos. Nobody can say which initiatives reached production.", de: "Erfolg wird an Piloten und Demos gemessen. Niemand kann sagen, welche Initiativen produktiv laufen." },
        { en: "Adoption is tracked, such as licenses and active users, but not whether AI changed outcomes.", de: "Die Nutzung wird erfasst, etwa Lizenzen und aktive Nutzer, aber nicht, ob KI die Ergebnisse verändert hat." },
        { en: "We measure which decisions now run on AI-assisted inputs, and whether they got faster and better.", de: "Wir messen, welche Entscheidungen auf KI-gestützten Grundlagen beruhen und ob sie schneller und besser wurden." },
        { en: "Measurement is continuous, and we benchmark against the industry, not just against our own past.", de: "Wir messen fortlaufend und vergleichen uns mit der Branche, nicht nur mit unserer eigenen Vergangenheit." }
      ],
      nextStep: {
        en: "Count your AI initiatives running in production at scale. Put that number next to your pilot count and share both with the leadership team.",
        de: "Zählen Sie Ihre KI-Initiativen, die im großen Maßstab produktiv laufen. Stellen Sie diese Zahl neben die Zahl Ihrer Piloten und teilen Sie beide mit der Führungsebene."
      }
    },
    {
      key: "N",
      name: { en: "Navigate", de: "Navigieren" },
      principle: {
        en: "Governance designed to guide, not to block: responsible speed.",
        de: "Governance, die leitet statt blockiert: verantwortungsvolles Tempo."
      },
      question: {
        en: "Does your governance make the right AI work faster, or does it slow everything down equally?",
        de: "Beschleunigt Ihre Governance die richtige KI-Arbeit, oder bremst sie alles gleichermaßen?"
      },
      levels: [
        { en: "Governance is missing, or a compliance checklist applied after the fact.", de: "Governance fehlt oder ist eine Compliance-Checkliste, die nachträglich angewendet wird." },
        { en: "There is a review process, but it is a gate that slows everything down equally.", de: "Es gibt einen Prüfprozess, aber er ist eine Hürde, die alles gleichermaßen verlangsamt." },
        { en: "Governance is designed in: clear decision rights, defined boundaries for every system and agent, and fast lanes for low-risk work.", de: "Governance ist mitgestaltet: klare Entscheidungsrechte, festgelegte Grenzen für jedes System und jeden Agenten und schnelle Wege für Arbeit mit geringem Risiko." },
        { en: "Partners and regulators trust our governance, and our standards help shape how the industry works.", de: "Partner und Aufsicht vertrauen unserer Governance, und unsere Standards prägen, wie die Branche arbeitet." }
      ],
      nextStep: {
        en: "For one live AI system or agent, write down what it may do alone, what needs a human, what it must never do, and who is accountable.",
        de: "Halten Sie für ein laufendes KI-System oder einen Agenten fest, was es allein tun darf, was ein Mensch prüft, was es nie tun darf und wer verantwortlich ist."
      }
    },
    {
      key: "G",
      name: { en: "Generate", de: "Generieren" },
      principle: {
        en: "A new ROI language: Decision Velocity and the Trust Dividend.",
        de: "Eine neue Sprache für den ROI: Decision Velocity und die Trust Dividend."
      },
      question: {
        en: "When you report the return on AI, do you talk about hours saved or decisions improved?",
        de: "Wenn Sie über den Ertrag von KI berichten: Sprechen Sie über eingesparte Stunden oder über bessere Entscheidungen?"
      },
      levels: [
        { en: "The return on AI is a demo that impressed the board, or it is not measured at all.", de: "Der Ertrag von KI ist eine Demo, die den Vorstand beeindruckt hat, oder er wird gar nicht gemessen." },
        { en: "The return is efficiency: hours saved and costs reduced.", de: "Der Ertrag ist Effizienz: eingesparte Stunden und gesenkte Kosten." },
        { en: "The return is Decision Velocity: the speed and quality of the decisions that run the business.", de: "Der Ertrag ist Decision Velocity: Tempo und Qualität der Entscheidungen, die das Geschäft steuern." },
        { en: "The return includes the Trust Dividend: business that becomes possible because partners and customers trust how we use data.", de: "Der Ertrag umfasst die Trust Dividend: Geschäft, das möglich wird, weil Partner und Kunden unserem Umgang mit Daten vertrauen." }
      ],
      nextStep: {
        en: "Name the two or three decisions whose speed and quality matter most to your results, and measure how long each takes today.",
        de: "Benennen Sie die zwei oder drei Entscheidungen, deren Tempo und Qualität für Ihre Ergebnisse am wichtigsten sind, und messen Sie, wie lange jede heute dauert."
      }
    },
    {
      key: "I",
      name: { en: "Integrate", de: "Integrieren" },
      principle: {
        en: "AI inside workflows, not alongside them.",
        de: "KI in den Abläufen, nicht daneben."
      },
      question: {
        en: "If your people stopped opening the AI tools tomorrow, would the process still run the same way?",
        de: "Wenn Ihre Mitarbeitenden morgen die KI-Werkzeuge nicht mehr öffnen: Liefe der Prozess genauso weiter?"
      },
      levels: [
        { en: "Individual teams run their own tools. Nothing connects.", de: "Einzelne Teams nutzen eigene Werkzeuge. Nichts ist verbunden." },
        { en: "Tools are shared and widely used, but AI sits alongside the workflow. Adoption stalls at power users.", de: "Werkzeuge sind geteilt und verbreitet, aber KI steht neben dem Ablauf. Die Nutzung bleibt bei den Power-Usern stecken." },
        { en: "Key workflows are redesigned around AI: agents are triggered by events, hand work to each other, and pass decisions to people.", de: "Zentrale Abläufe sind um KI herum neu gestaltet: Agenten starten durch Ereignisse, übergeben einander Arbeit und reichen Entscheidungen an Menschen weiter." },
        { en: "Our workflows connect with partners' systems. Orchestration extends beyond our own walls.", de: "Unsere Abläufe sind mit den Systemen von Partnern verbunden. Die Orchestrierung reicht über unsere eigenen Grenzen hinaus." }
      ],
      nextStep: {
        en: "Draw one important workflow end to end and mark where AI should do the work, not just assist.",
        de: "Zeichnen Sie einen wichtigen Ablauf vollständig auf und markieren Sie, wo KI die Arbeit übernehmen soll, nicht nur unterstützen."
      }
    },
    {
      key: "N",
      id: "N2",
      name: { en: "Normalize", de: "Normalisieren" },
      principle: {
        en: "AI-native operations as the default, not a project.",
        de: "KI-native Arbeit als Normalfall, nicht als Projekt."
      },
      question: {
        en: "Would a new hire learn to work with AI from how the work is designed, or only if they take the initiative themselves?",
        de: "Würde eine neue Mitarbeiterin den Umgang mit KI aus der Gestaltung der Arbeit lernen, oder nur aus eigener Initiative?"
      },
      levels: [
        { en: "AI depends on enthusiasts. When they leave, the practice leaves with them.", de: "KI hängt an Enthusiasten. Wenn sie gehen, geht die Praxis mit." },
        { en: "There is an AI program and training, but using AI is still optional.", de: "Es gibt ein KI-Programm und Schulungen, aber die Nutzung von KI ist weiterhin freiwillig." },
        { en: "In core work, AI is simply how things are done. Every agent has an owner and is reviewed like a team member.", de: "In der Kernarbeit ist KI einfach der Normalfall. Jeder Agent hat einen Verantwortlichen und wird wie ein Teammitglied überprüft." },
        { en: "AI-native work is institutional memory. New people cannot imagine working any other way.", de: "KI-native Arbeit ist institutionelles Gedächtnis. Neue Mitarbeitende können sich keine andere Arbeitsweise vorstellen." }
      ],
      nextStep: {
        en: "Pick one team and make AI part of how its core work is designed, not an optional tool. Give every agent it uses a named owner.",
        de: "Wählen Sie ein Team und machen Sie KI zum Teil der Gestaltung seiner Kernarbeit, nicht zu einem optionalen Werkzeug. Geben Sie jedem Agenten einen namentlich Verantwortlichen."
      }
    },
    {
      key: "E",
      id: "E2",
      name: { en: "Expand", de: "Expandieren" },
      principle: {
        en: "From enterprise engine to ecosystem standard.",
        de: "Vom Motor des Unternehmens zum Standard des Ökosystems."
      },
      question: {
        en: "Do partners and customers trust your data and AI practices enough to build on them?",
        de: "Vertrauen Partner und Kunden Ihrem Umgang mit Daten und KI genug, um darauf aufzubauen?"
      },
      levels: [
        { en: "AI is purely internal, and mostly experiments.", de: "KI ist rein intern und überwiegend experimentell." },
        { en: "We work with vendors, but on their terms and their standards.", de: "Wir arbeiten mit Anbietern, aber zu deren Bedingungen und Standards." },
        { en: "Partners rely on our data and AI practices. Trust is a deliberate part of what we offer.", de: "Partner verlassen sich auf unseren Umgang mit Daten und KI. Vertrauen ist bewusst Teil unseres Angebots." },
        { en: "Our standards and ways of orchestrating AI are becoming the industry default.", de: "Unsere Standards und unsere Art, KI zu orchestrieren, werden zum Branchenstandard." }
      ],
      nextStep: {
        en: "List the business you cannot do today because partners or customers do not trust how data would be used. Estimate what it is worth.",
        de: "Listen Sie das Geschäft auf, das Sie heute nicht machen können, weil Partner oder Kunden dem Umgang mit Daten nicht vertrauen. Schätzen Sie, was es wert ist."
      }
    }
  ],

  // The plan is built from the reader's two weakest disciplines (see app.js).
  // This last step is the same for everyone: a diagnostic is most useful as a team conversation.
  closingStep: {
    en: "Ask each member of your leadership team to complete this diagnostic separately, then compare where your answers differ.",
    de: "Lassen Sie jedes Mitglied Ihrer Führungsebene diese Diagnose einzeln ausfüllen und vergleichen Sie, wo Ihre Einschätzungen auseinandergehen."
  },

  // Shown when every discipline is at the top stage.
  topStage: {
    en: "You are at the top stage in all six disciplines. The risk now is complacency: run this every quarter, and test your answers against partners, not only your own team.",
    de: "Sie stehen in allen sechs Disziplinen auf der höchsten Stufe. Das Risiko ist jetzt Selbstzufriedenheit: Wiederholen Sie dies jedes Quartal und gleichen Sie Ihre Einschätzung mit Partnern ab, nicht nur mit Ihrem eigenen Team."
  }
};
