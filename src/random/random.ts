import seedrandom, { PRNG } from "seedrandom";

export type Random = {
  int: (min: number, max: number) => number;
  pick: <T>(arr: T[]) => T;
  shuffle: <T>(arr: T[]) => T[];
};

export function createRandom(seed?: string | null): Random {
  const rng: PRNG = seedrandom(seed ?? undefined);

  const int = (min: number, max: number) =>
    Math.floor(rng() * (max - min + 1)) + min;

  const pick = <T>(arr: T[]) => arr[int(0, arr.length - 1)];

  const shuffle = <T>(arr: T[]) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = int(0, i);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  return { int, pick, shuffle };
}
