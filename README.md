# SignalRoom

SignalRoom is a focused coordination room for launch and incident teams. It keeps the next decisions visible with real-time records, presence, public team chat, and a private AI brief.

## DeepSpace primitives

- Authentication for editing and private AI conversations
- RecordRoom collections for rooms and decisions
- Scoped presence for live collaborators
- Messaging with threads, reactions, and read receipts
- DO-backed AI Chat with persisted user-scoped history

## Run locally

```bash
nvm use 22.15.0
npm install
npm run type-check
npm run dev
```

The first registration or deployment requires a logged-in DeepSpace account:

```bash
npx deepspace auth login
npx deepspace app init
npm run build
npx deepspace deploy
```

See [`SUBMISSION.md`](./SUBMISSION.md) for the exercise write-up, tradeoffs, agent involvement, and verification notes.
