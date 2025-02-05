import { Input } from "../ui/Input";

interface MainDataInputProps {
  name: string;
  nickname: string;
  birthday: string;
  handleInput: (fieldName: string, value: string|number) => void
}

export function MainDataInput({name, nickname, birthday, handleInput}: MainDataInputProps) {
  return (

    <div className="container border-container">
      <h2>Dados</h2>

      <Input type="text" label="Nome" fieldName="name" value={name} handleInput={handleInput} dataCy="knightNameInput" />
      <Input type="text" label="Apelido" fieldName="nickname" value={nickname} handleInput={handleInput} dataCy="knightNicknameInput" />
      <Input type="date" label="Nascimento" fieldName="birthday" value={birthday} handleInput={handleInput} dataCy="knightBirthdayInput" />

    </div>


  );
}