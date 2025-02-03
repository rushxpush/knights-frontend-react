export interface Knight {
  name: string;
  nickname: string;
  birthday: string;
  weapons: Weapon[];
  attributes: Attribute;
  keyAttribute: string;
}

export interface ResponseKnight extends Knight {
  _id: string;
  __v: number;
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

export interface AttributesList {
  id: string;
  name: string;
  value: string;
}