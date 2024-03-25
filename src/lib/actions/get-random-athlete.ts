"use server";

import { athletes } from "../constants/athletes";

export async function getRandomAthlete() {
  const randomBool = Math.random();
  const randomNumber = getRandomInt(0, 34);

  if (randomBool >= 0.5) {
    return athletes[23].male[randomNumber];
  } else {
    return athletes[23].female[randomNumber];
  }
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min); // Ensures the minimum is an integer
  max = Math.floor(max); // Ensures the maximum is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}
