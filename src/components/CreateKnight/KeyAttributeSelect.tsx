import { useAttributes } from "../../context/AttributesContext";

interface KeyAttributeSelectProps {
  dataCy?: string;
}

export function KeyAttributeSelect({ dataCy }: KeyAttributeSelectProps) {
  const { setKeyAttribute } = useAttributes();

  return (
    <div className="container border-container">
      <h2>Selecione o atributo principal</h2>
      <select onChange={(e) => setKeyAttribute(e.target.value)} data-cy={dataCy}>
        <option value="strength">Strength</option>
        <option value="dexterity">Dexterity</option>
        <option value="constitution">Constitution</option>
        <option value="intelligence">Intelligence</option>
        <option value="wisdom">Wisdom</option>
        <option value="charisma">Charisma</option>
      </select>
    </div>
  );

}