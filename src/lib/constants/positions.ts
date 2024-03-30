import { Positions } from "../types/athletes";

const positions: Positions[] = ["first", "second", "third", "fourth", "fifth"];

export function getPositions(n?: number) {
  return positions.slice(0, n);
}
