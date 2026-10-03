# Doomscroll Learning

A mobile-first web prototype that turns scrolling into learning. Browse 48 prepared, complete lessons across Parenting (teen communication), Career growth, Workplace skills, Managing your time, Digital confidence, Technology, SQL & data, Nature, Design, Science and Culture without an account or any API keys.

## Run locally

Use Node.js 22 or newer (validated with Node 24) and npm.

```sh
npm ci
npm run dev
```

Vite prints the development address. To build and preview the production bundle:

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host when ready. No backend is required. Deployment is not part of this prototype.

## Checks

`npm run build` checks TypeScript and builds the app. Browser tests cover personalisation, both feed modes, dependent filters, save persistence, empty states, keyboard controls and mobile overflow.

```sh
npx playwright install chromium
npm test
```

If Chromium is already installed, use `CHROMIUM_PATH=/usr/bin/chromium npm test`. Playwright starts Vite automatically on the dedicated test port 5174. In CI, set `CI=1` to require a fresh test server. Stop development servers before reinstalling dependencies and restart them afterwards.

## What works

- Browse immediately, choose multiple interests, and change them at any time.
- For you follows selected interests; no selections gives a mixed feed.
- Wildcard explores all interests. Both modes support interest and topic filters.
- Save and unsave lessons and revisit a saved collection.
- Guest interests and saved lesson IDs persist in local storage in this browser.
- Responsive card layout, labelled controls, visible keyboard focus and announced save actions.

Content lives in separate typed collections in `src/data.ts`. Stable IDs connect the collections. This app makes no live AI or paid API calls. Browser storage may be cleared by the browser or be unavailable; when unavailable, the app keeps state for the current visit and shows a notice. There is no cross-device sync.

## Deferred

Accounts, a database, lesson progress, content management and recommendations beyond interest filtering. Scrolling never counts as completing a lesson. See [the data-model guide](docs/data-model.md) for the planned database and how it differs from this prototype.

## Content scope and source checks

This version includes introductory SQL and data modelling, practical career lessons, everyday technology/science/language, and general teen communication examples. Original lesson IDs remain valid for existing browser saves.

Newborn care, cord care, bathing, weaning, potty training and infant sleep lessons are deferred. The request to the NHS washing-and-bathing page was blocked by the workspace proxy (CONNECT 403); its content was not retrieved. Other proposed NHS pages were not live-checked. No NHS attribution or health guidance is published in this update. Those topics require accessible authoritative sources and review before adding them.
