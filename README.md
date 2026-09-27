# GOVERN Diagnostic

A short self-assessment that tells a leadership team where it stands on running AI as part of its operating model, and what to do first.

**[Try it live](https://utany00.github.io/govern-assessment/)** · English and German

## The problem

Most leadership teams I work with don't lack AI initiatives. They lack a shared picture of them. Each team runs its own pilots, governance shows up after launch, and the board spends its time approving individual use cases instead of designing how the institution decides.

A maturity model is only useful if it leads to a decision. So this tool does two things: it shows where you are across six building blocks, and it tells you which one to fix first.

## The framework

GOVERN treats AI as a leadership and operating-model challenge, not a technology rollout.

| | Building block | Principle |
|---|---|---|
| **G** | Ground | An honest inventory before any transformation |
| **O** | Orchestrate | Coordination, not technology, is the competitive advantage |
| **V** | Verify | Governance designed in before deployment, not after |
| **E** | Embed | AI built into the workflow, not an optional tool |
| **R** | Redesign | From decision maker to decision architect |
| **N** | Normalize | Governance as an institutional standard, not a project |

Each block has three stages: **Experimenting**, **Coordinating**, **Native**.

## Design decisions

- **The weakest block sets the pace.** The readout doesn't just average your scores. It points to your lowest block, because an organization at stage 3 in Embed and stage 1 in Verify has a problem an average would hide.
- **Ties go to the earlier letter.** GOVERN is sequenced. If Ground and Redesign are equally weak, fix Ground first.
- **One next step, not ten.** Every block ends in a single action a leader can take alone within a week. No "set up a working group."
- **Content is separate from logic.** All framework text lives in `data.js`, so the model can evolve without touching the app.
- **Nothing leaves the browser.** No backend, no tracking, no sign-up. Leadership teams are rightly careful about where they type candid answers.
- **Bilingual from day one.** I work with executives in the US and the DACH region, and a diagnostic should be answered in the language people think in.

## Run it

Open `index.html` in a browser. There is no build step and no dependencies.

To publish: in the repo settings, turn on GitHub Pages from the `main` branch.

## What's next

- [ ] Team mode: several leaders answer separately, then see where they disagree
- [ ] Printable one-page readout
- [ ] Short explanations of each stage, with an example from practice
- [ ] Tests for the scoring logic

## About

GOVERN is a framework I developed for leadership teams working through AI adoption. I'm a product leader and former CPO at iHeartMedia. More on my [profile](https://github.com/utany00).
