# Draftail getting started

A runnable version of the Draftail 2.0.0 getting-started example, using React 16.14.0 and Draft.js 0.10.5 to match its peer dependencies. These dependencies are independent of the documentation website.

From this directory, using Node 26:

```sh
npm ci
npm start
```

Open the local URL printed by Vite. Type in the editor, move focus outside it to save, and reload to check that your content persists for this browser session.

To check the production bundle:

```sh
npm run build
npm run serve
```

This starter reproduces the supported dependency versions for Draftail 2.0.0. Its legacy transitive dependencies have known npm audit findings; it is a learning example, not a recommendation to adopt this stack for a new production application.
