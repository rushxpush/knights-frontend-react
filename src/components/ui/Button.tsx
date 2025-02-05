interface ButtonProps {
  text: string;
  style?: object;
  disabled?: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  dataCy?: string;
}

export function Button({text, style = {}, disabled = false, handleClick, dataCy}: ButtonProps) {
  return <button 
            style={!disabled ? style : {}} 
            className={disabled ? 'buttonDisabled' : ''} 
            disabled={disabled} 
            onClick={(e) => handleClick(e)}
            data-cy={dataCy}>
              {text}
            </button>;
}