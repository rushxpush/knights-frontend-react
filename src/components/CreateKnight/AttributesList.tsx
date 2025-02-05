import { useAttributes } from "../../context/AttributesContext";
import { Button } from "../ui/Button";
import { Attribute } from "./CreateKnight.types";

export function AttributesInput() {
  const { attributes, setAttributes, rollAttributes } = useAttributes();

  return (
    <div className="container border-container">
      <h2>Atributos</h2>
      {Object.entries(attributes).map(([key, value]) => (
        <div key={key} className="input-container">
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input value={value} onChange={(e) => setAttributes((prev: Attribute) => ({
            ...prev,
            [key]: e.target.value
          }))} />
        </div>
      ))}
      <Button text="Gerar Atributos" handleClick={rollAttributes} dataCy="generateAttributesButton" />
    </div>
  );
}