# swc-demo

Demo of using [swc](https://github.com/swc-project/swc) to run a nodejs application written in Typescript.

### Details

- Runtime: node v22
- Format: ESM
- Compiler: `swc`
  - Specifically [@swc-node/register](https://www.npmjs.com/package/@swc-node/register) to compile from TS to JS on the fly
- Watch mode: `nodemon`
- Package manager: `yarn` (modern)
- Node linker: pnpm-style

### Installation

- Load the right version of node (e.g., `nvm use`)
- If this is your first time using `yarn` with this particular download of node, run `corepack enable`
- Run `yarn`

### Getting started

- For developing with auto-restart upon file change, `yarn dev`
- To run once, `yarn start`
- You can manually demo swc's compilation by running `yarn build`, but it's not strictly necessary

### Notes

I tried using yarn's Plug'n'Play node linker, but I couldn't get it to work. Once I changed yarn's node linker strategy to `pnpm` from `pnp`, it worked.
