export interface InputProps {
  id: string;
  label: string;
  value: string|number;
  checked: boolean;
  disabled: boolean;
  handleInput: (id: string) => void
  dataCy?: string;
}

export function InputCheckbox({id, label, value, checked, disabled, handleInput, dataCy}: InputProps) {

  return (
    <div>
      <input className="input-checkbox" type="checkbox" value={value || ""} onChange={() => handleInput(id)} checked={checked} disabled={disabled} data-cy={dataCy} />
      <label className="input">{label}</label>
    </div>
  );
}