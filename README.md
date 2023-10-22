# Google DevFest 2023 Hong Kong SvelteKit Demo

## Environment Setup

If you are on Windows, make sure you have a proper ExecutionPolicy set:

```powershell
Set-ExecutionPolicy Bypass
```

Install Node.js LTS, then:

```bash
npm i -g pnpm
pnpm setup
```

## Creating project

```bash
pnpm create svelte google-devfest-2023-hong-kong-svelte-demo
cd google-devfest-2023-hong-kong-svelte-demo
```

## Installing dependencies

```bash
pnpm i
```

For this project, you will also need Prisma (Database ORM) and Auth.js (Authentication):

```bash
pnpm i @prisma/client
pnpm i prisma
pnpm prisma init
pnpm prisma db push

pnpm i @auth/core @auth/sveltekit
```

## Developing

```bash
pnpm dev

# --open: open the app in a new browser tab
# --host: host the app on all network interfaces
```

## Building

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
