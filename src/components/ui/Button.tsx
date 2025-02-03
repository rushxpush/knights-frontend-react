interface ButtonProps {
  text: string;
  style?: object;
  disabled?: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({text, style = {}, disabled = false, handleClick}: ButtonProps) {
  return <button style={!disabled ? style : {}} className={disabled ? 'buttonDisabled' : ''} disabled={disabled} onClick={(e) => handleClick(e)}>{text}</button>;
}