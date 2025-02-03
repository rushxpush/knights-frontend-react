export interface InputProps {
  id: string;
  label: string;
  value: string|number;
  checked: boolean;
  disabled: boolean;
  handleInput: (id: string) => void
}

export function InputCheckbox({id, label, value, checked, disabled, handleInput}: InputProps) {


  return (
    <div>
      <input className="input-checkbox" type="checkbox" value={value || ""} onChange={() => handleInput(id)} checked={checked} disabled={disabled} />
      <label className="input">{label}</label>
    </div>
  );
}