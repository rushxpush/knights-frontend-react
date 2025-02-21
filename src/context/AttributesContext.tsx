import React, { createContext, useContext, useState } from "react";
import { Attribute } from "../components/CreateKnight/CreateKnight.types";
import { generateRandomAttributes } from "../utils/rollDice";

interface AttributesContextType {
  attributes: Attribute;
  setAttributes: React.Dispatch<React.SetStateAction<Attribute>>;
  keyAttribute: string;
  setKeyAttribute: React.Dispatch<React.SetStateAction<string>>;
  rollAttributes: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AttributesContext = createContext<AttributesContextType|undefined>(undefined);

export function AttributesProvider({children}: {children: React.ReactNode}) {
  const [ attributes, setAttributes ] = useState<Attribute>({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  })
  const [ keyAttribute, setKeyAttribute ] = useState<string>('strength');

  function rollAttributes(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const newAttributes = generateRandomAttributes();
    setAttributes(newAttributes);
  }

  return (
    <AttributesContext.Provider value={{attributes, setAttributes, keyAttribute, setKeyAttribute, rollAttributes}}>
      {children}
    </AttributesContext.Provider>
  )
}

export function useAttributes() {
  const context = useContext(AttributesContext);
  if (!context) throw new Error('useAttributes must be inside AttributesProvider');
  return context;
}