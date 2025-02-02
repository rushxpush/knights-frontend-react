export interface InputProps {
  id: string;
  label: string;
  fieldName: string;
  value: string|number;
  handleInput: (id: string, checked: boolean) => void
}

export function InputCheckbox({id, label, fieldName, value, handleInput}: InputProps) {


  return (
    <div>
      <input className="input-checkbox" type="checkbox" value={value || ""} onChange={e => handleInput(id, e.target.checked)} />
      <label className="input">{label}</label>
    </div>
  );
}