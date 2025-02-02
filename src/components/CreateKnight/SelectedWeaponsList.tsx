import { Weapon } from "./CreateKnight.types";

interface SelectedWeaponsListProps {
  selectedWeapons: Weapon[];
}
export function SelectedWeaponsList({selectedWeapons}: SelectedWeaponsListProps) {
  return (
    <div className="container border-container">
      <h2>Armas Selecionadas</h2>
      <ul>
        {selectedWeapons.map((weapon) => (
          <li key={weapon.id}>
            <div className="border-container">
              <p>Nome: {weapon.name}</p>
              <p>Modificador: {weapon.mod}</p>
              <p>Atributo: {weapon.attr}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}