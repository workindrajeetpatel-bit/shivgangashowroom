# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Project layout

```text
src/            frontend — the website (TanStack Start + React + Tailwind)
public/         frontend static assets
backend/        standalone products API (Node + Express + MongoDB)
```

The frontend must stay at the repo root for the hosted build. `backend/` is fully
self-contained and can be copied out and deployed on its own — see `backend/README.md`.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
- Express + Mongoose (backend)

