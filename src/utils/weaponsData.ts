import { Weapon } from "../components/CreateKnight/CreateKnight.types";

export const fetchWeaponsList = async (): Promise<Weapon[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {id: '1', name: 'Sword', mod: 3, attr: 'strength'},
        {id: '2', name: 'Mace', mod: 2, attr: 'strength'},
        {id: '3', name: 'Rod', mod: 0, attr: 'wisdom'},
        {id: '4', name: 'Halberd', mod: 2, attr: 'constitution'},
        {id: '5', name: 'Crossbow', mod: 1, attr: 'constitution'},
      ])
    }, 1000);
  });
}