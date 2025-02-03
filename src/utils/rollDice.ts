import { Attribute } from "../components/CreateKnight/CreateKnight.types";

export const generateRandomAttributes = (): Attribute => {
  const sides = 6;
  const diceCount = 3;

  const newAttributes = {
    strength: throwDice(sides, diceCount),
    dexterity: throwDice(sides, diceCount),
    constitution: throwDice(sides, diceCount),
    intelligence: throwDice(sides, diceCount),
    wisdom: throwDice(sides, diceCount),
    charisma: throwDice(sides, diceCount),
  }

  return newAttributes;
}

const throwDice = (sides: number, numberOfDice: number) => {
  let diceSum = 0;
  for (let i = 0; i < numberOfDice; i++) {
    diceSum += getRandomArbitraryNumber(1, sides+1);
  }
  return diceSum;
}

const getRandomArbitraryNumber = (min: number, max: number)  => {
  return Math.floor(Math.random() * (max - min) + min);
}