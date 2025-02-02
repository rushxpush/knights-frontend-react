import { useEffect, useState } from "react";
import { fetchWeaponsList } from "../../utils/weaponsData";
import { InputCheckbox } from "../ui/InputCheckbox";
import { Weapon } from "./CreateKnight.types";
import { Button } from "../ui/Button";

interface SelectWeaponsProps {
  weaponsList: Weapon[];
  selectedWeapons: Weapon[];
  handleInput: (id: string, checked: boolean) => void;
  handleClick: (e: object) => void;
}

export function SelectWeapons({weaponsList, selectedWeapons, handleInput, handleClick}: SelectWeaponsProps) {
  return (
    <div>
    <div className="container border-container input-checkbox-container">
    <h2>Lista de Armas</h2>
      {
        weaponsList.map((weapon: Weapon) => (
          <InputCheckbox 
            key={weapon.id} 
            id={weapon.id}
            label={weapon.name} 
            fieldName="name" 
            value={weapon.name.toLowerCase()} 
            handleInput={handleInput} 
          />
        ))
      }
      <Button text="Adicionar Armas" handleClick={(e) => handleClick(e)} />
    </div>

    </div>
  );
}