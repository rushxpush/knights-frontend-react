import { AttributesList } from "../components/CreateKnight/CreateKnight.types";

const attributesData: AttributesList[] = [
    {
      id: '1',
      name: 'Strength',
      value: 'strength'
    },
    {
      id: '2',
      name: 'Dexterity',
      value: 'dexterity'
    },
    {
      id: '3',
      name: 'Constitution',
      value: 'constitution'
    },
    {
      id: '4',
      name: 'Intelligence',
      value: 'intelligence'
    },
    {
      id: '5',
      name: 'Wisdom',
      value: 'wisdom'
    },
    {
      id: '6',
      name: 'Charisma',
      value: 'charisma'
    },
  ]

export const fetchAttributesData = async(): Promise<AttributesList[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(attributesData);
    }, 1000);
  });
}