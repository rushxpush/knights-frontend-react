import { Attribute } from "./CreateKnight.types";

interface InputProps {
  list: Attribute,
  handleChange: (key: string, value: string) => void 
}

export function AttributesInput({list, handleChange}: InputProps) {

  return (
    <div className="container border-container">
      <h2>Atributos</h2>
      {Object.entries(list).map(([key, value]) => (
        <div key={key} className="input-container">
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input value={value} onChange={(e) => handleChange(key, e.target.value)} />
        </div>
      ))}
    </div>
  );
}