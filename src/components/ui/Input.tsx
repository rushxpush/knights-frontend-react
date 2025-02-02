export interface InputProps {
  type: string;
  label: string;
  fieldName: string;
  value: string|number;
  handleInput: (fieldName: string, value: string|number) => void
}

export function Input({type, label, fieldName, value, handleInput}: InputProps) {
  return (
    <div className="input-container">
      <label className="input">{label}</label>
      <input type={type} value={value || ""} onChange={e => handleInput(fieldName, e.target.value)} />
    </div>
  );
}