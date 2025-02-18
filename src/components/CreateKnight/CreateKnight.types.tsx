export interface Knight {
  name: string;
  nickname: string;
  birthday: string;
  weapons: Weapon[];
  attributes: Attribute;
  keyAttribute: string;
}

export interface KnightMainData {
  name: string;
  nickname: string;
  birthday: string;
}

export interface ResponseKnight extends Knight {
  _id: string;
  __v: number;
}

export interface KnightWithStats {
  _id: string;
  __v: number;
  name: string;
  nickname: string;
  birthday: string;
  weapons: WeaponWithoutId[];
  attributes: Attribute;
  keyAttribute: string;
  age: number;
  attack: number;
  experience: number;
}

export interface Weapon {
  id: string;
  name: string;
  mod: number;
  attr: string;
  equipped?: boolean;
}

export interface WeaponWithoutId {
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