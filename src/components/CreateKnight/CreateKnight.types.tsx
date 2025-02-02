export interface Knight {
  name: string;
  nickname: string;
  birthdate: string;
  weapon: Weapon[];
  attributes: Attribute;
  keyAttribute: string;
}

export interface Weapon {
  id: string;
  name: string;
  mod: number;
  attr: string;
  equipped?: boolean;
}

export interface Attribute {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}