import { useContext, useEffect, useState } from "react"
import { Knight, Weapon } from "./CreateKnight.types";
import { AttributesInput } from "./AttributesInput";
import { MainDataInput } from "./MainDataInput";
import { SelectWeapons } from "./SelectWeapons";
import { fetchWeaponsList } from "../../utils/weaponsData";
import { SelectedWeaponsList } from "./SelectedWeaponsList";
import { useWeapons } from "../../context/WeaponsContext";

export function CreateKnightForm() {
  const [knightData, setKnightData] = useState<Knight>({
    name: '',
    nickname: '',
    birthdate: '',
    weapon: [],
    attributes: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    keyAttribute: ''
  });

  const { selectedWeapons } = useWeapons();

  function handleSetData(fieldName: string, value: string|number): void {
    setKnightData(prev => ({
      ...prev,
      [fieldName]: value
    }))
  }

  function handleAttribute(key: string, value: string): void {
    setKnightData((prev) => ({
      ...prev,
      attributes: {
        ...prev.attributes,
        [key]: value
      }
    }))
  }

  return (
    <div className="container">
      <h1>Criador de Knight</h1>
      <form>
        <MainDataInput 
          name={knightData.name} 
          nickname={knightData.nickname} 
          birthdate={knightData.birthdate} 
          handleInput={handleSetData} 
        />

        <AttributesInput list={knightData.attributes} handleChange={handleAttribute} />

        <SelectWeapons />

        <SelectedWeaponsList selectedWeapons={selectedWeapons} />
      </form>
    </div>
  )
}