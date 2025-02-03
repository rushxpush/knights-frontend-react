interface ButtonProps {
  text: string;
  handleClick: (e: Event) => void;
}

export function Button({text, handleClick}: ButtonProps) {
  return <button onClick={(e) => handleClick(e)}>{text}</button>;
}