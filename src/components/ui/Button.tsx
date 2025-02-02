interface ButtonProps {
  text: string;
  handleClick: (e: object) => void;
}

export function Button({text, handleClick}: ButtonProps) {
  return <button onClick={(e) => handleClick(e)}>{text}</button>;
}