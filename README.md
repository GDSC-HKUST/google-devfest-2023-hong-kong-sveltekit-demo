# Google DevFest 2023 Hong Kong SvelteKit Demo

[Presentation Slides](https://www.figma.com/proto/YKowB5mbkFcCMuTFbMRiVJ/2023-11-18-DevFest-2023-Hong-Kong-Web-SvelteKit?page-id=3%3A3&type=design&node-id=106-73&viewport=242%2C176%2C0.32&t=lGD8mCRJ2JCyQNYf-1&scaling=scale-down&hide-ui=1)

## Environment Setup

If you are on Windows, make sure you have a proper ExecutionPolicy set:

```powershell
Set-ExecutionPolicy Bypass # Run this in PowerShell
```

Install Node.js LTS, then:

```bash
npm i -g pnpm # You might need sudo
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
