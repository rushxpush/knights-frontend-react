import { useWeapons } from "../../context/WeaponsContext";
import { Button } from "../ui/Button";
import { Weapon } from "./CreateKnight.types";

interface SelectedWeaponsListProps {
  selectedWeapons: Weapon[];
}
export function SelectedWeaponsList({selectedWeapons}: SelectedWeaponsListProps) {
  const { equippedWeaponId, equipSelectedWeapon, removeSelectedWeapon } = useWeapons();
  return (
    <div className="container border-container">
      <h2>Armas Selecionadas</h2>

      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Modificador</th>
            <th>Atributo</th>
            <th>Remover</th>
            <th>Equipar</th>
          </tr>
        </thead>
        <tbody>

        {selectedWeapons.map((weapon) => (
          <tr key={weapon.id}>
            <td>{weapon.name}</td>
            <td>{weapon.mod}</td>
            <td>{weapon.attr}</td>
            <td><Button text="X" style={{backgroundColor: 'red'}} handleClick={() => removeSelectedWeapon(weapon.id)} /></td>
            <td><Button text="O" style={{backgroundColor: 'green'}} handleClick={() => equipSelectedWeapon(weapon.id)} disabled={weapon.id === equippedWeaponId} /></td>
          </tr>
        ))}
        </tbody>
      </table>
        </div>
    </div>
  );
}