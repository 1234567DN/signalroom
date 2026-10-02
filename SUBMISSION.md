# SignalRoom

**Live URL:** Pending DeepSpace deployment

**Repository:** Pending repository publication

## What I built

SignalRoom is a focused coordination room for launch and incident teams. It turns the work that usually gets buried in chat into a visible, shared decision queue. The main room shows open and decided items, ownership, priority, synced status, and who is currently present.

The core flow is:

1. Open the room dashboard.
2. Sign in to edit or create a room.
3. Load the demo room or create a new room.
4. Toggle a decision when it is resolved.
5. Invite teammates with a shareable room link.
6. Ask the AI copilot for a brief, risk scan, or next best action.
7. Use the dedicated chat route for deeper team discussion.

## DeepSpace integrations used

- **Authentication:** sign-in gates editing and private AI conversations while keeping the public room readable.
- **Real-time records:** `rooms` and `decisions` are stored in DeepSpace RecordRoom collections with RBAC permissions.
- **Presence:** the room shows connected teammates and sync status using a scoped presence room.
- **Messaging:** the generated DeepSpace messaging feature provides a public channel with threads, reactions, and read receipts.
- **AI chat:** the generated AI Chat feature provides a DO-backed, user-scoped copilot with persisted conversation history.

## Main tradeoff

I deliberately focused on one high-value path instead of building a broad project-management suite. Private multi-room membership and a full notification system are not included because they would require more server-enforced tenant and participant rules than this five-day exercise needs. The app demonstrates the primitives through a coherent product flow rather than adding integrations that do not improve the experience.

## Where the agent helped

The agent scaffolded the DeepSpace app, added the messaging and AI Chat integrations, created the room and decision schemas, implemented the dashboard UI, and configured the theme and route manifest.

## What I verified

- Updated the project to the DeepSpace-required Node 22.15 and npm 11.6 toolchain.
- Ran `npm run type-check` successfully.
- Ran the DeepSpace scaffold and installed dependencies successfully.
- Added the messaging and AI Chat features through `npx deepspace add`.
- Confirmed the app is blocked only at DeepSpace account authentication; app registration and deployment require a logged-in DeepSpace production account.

## Next step

After authenticating with `npx deepspace auth login`, run `npx deepspace app init`, `npm run build`, and `npx deepspace deploy`. Then verify the live room, sign-in flow, synced decision updates, presence indicator, messaging route, and AI brief before submitting the live URL and repository.
