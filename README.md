# Remix Issue Template

(Initially adapted from the jokes app)

This template contains a basic setup of all features of Remix, useful for replicating tests.

- [Remix Docs](https://remix.run/docs)

## Preview

Open this issue template on [CodeSandbox](https://codesandbox.com):

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/moishinetzer/remix-run-issue-template/tree/main/)


## Development

From your terminal:

```sh
npm install
npx prisma migrate dev
npm run dev
```

This prepares the local dev database and starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then apply any database changes:

```sh
npx prisma migrate deploy
```

Then run the app in production mode:

```sh
npm start
```
