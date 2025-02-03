import { InputCheckbox } from "../ui/InputCheckbox";
import { Weapon } from "./CreateKnight.types";
import { Button } from "../ui/Button";
import { useWeapons } from "../../context/WeaponsContext";

export function WeaponsList() {
  const { weaponsList, checkedWeaponsId, selectedWeaponsId, toggleWeaponSelection, confirmSelectedWeapons } = useWeapons();
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
              value={weapon.name.toLowerCase()} 
              disabled={selectedWeaponsId.has(weapon.id)}
              checked={checkedWeaponsId.has(weapon.id)}
              handleInput={toggleWeaponSelection} 
            />
          ))
        }
        <Button text="Adicionar Armas" handleClick={(e) => confirmSelectedWeapons(e)} />
      </div>
    </div>
  );
}