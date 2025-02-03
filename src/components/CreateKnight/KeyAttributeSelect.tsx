import { useAttributes } from "../../context/AttributesContext";

export function KeyAttributeSelect() {
  const { keyAttribute } = useAttributes();

  return (
    <div className="container border-container">
      <h2>Selecione o atributo principal</h2>
      <select>
        <option value="strength">Strength</option>
        <option value="dexterity">Dexterity</option>
      </select>
    </div>
  );

}