# AoC Boilerplate

This is a TypeScript boilerplate for solving [Advent of Code](https://adventofcode.com/) without needing to do much of a setup.

## How to Use

### Terminal Based

If you like to just execute code from the terminal, create a new file for the challenge (e.g. `day1.ts`) in the `scripts` directory. Run it by executing

```bash
npx ts-node scripts/day1.ts
```

or

```bash
ts-node scripts/day1.ts
```

if you have `ts-node` installed globally on your machine.

### DOM Based

If you are an average ✨ **_React enjoyer_** ✨ like myself, it might be nicer for you to just do things in the browser instead of the terminal. In that case do the following:

1. Create a new component in `src/components` like `Day1.tsx`
2. Use it in `App.tsx`
3. run the following command:

```bash
npm run dev
```

Eventually open [http://localhost:3000](http://localhost:3000) in your browser.

**-> Happy coding!**
