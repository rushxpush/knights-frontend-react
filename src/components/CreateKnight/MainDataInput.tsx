import { Input } from "../ui/Input";

interface MainDataInputProps {
  name: string;
  nickname: string;
  birthdate: string;
  handleInput: (fieldName: string, value: string|number) => void
}

export function MainDataInput({name, nickname, birthdate, handleInput}: MainDataInputProps) {
  return (

    <div className="container border-container">
      <h2>Dados</h2>

      <Input type="text" label="Nome" fieldName="name" value={name} handleInput={handleInput} />
      <Input type="text" label="Apelido" fieldName="nickname" value={nickname} handleInput={handleInput} />
      <Input type="date" label="Nascimento" fieldName="birthdate" value={birthdate} handleInput={handleInput} />

    </div>


  );
}