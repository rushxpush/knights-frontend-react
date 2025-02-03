import { useState } from "react"
import { Knight, ResponseKnight, Weapon } from "./CreateKnight.types";
import { AttributesInput } from "./AttributesList";
import { MainDataInput } from "./MainDataInput";
import { WeaponsList } from "./WeaponsList";
import { SelectedWeaponsList } from "./SelectedWeaponsList";
import { useWeapons } from "../../context/WeaponsContext";
import { Button } from "../ui/Button";
import { useAttributes } from "../../context/AttributesContext";
import { postKnight } from "../../services/knightsService";
import { KeyAttributeSelect } from "./KeyAttributeSelect";

export function CreateKnightForm() {
  const [knightData, setKnightData] = useState<Knight>({
    name: '',
    nickname: '',
    birthday: '',
    weapons: [],
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

  const { selectedWeapons, equippedWeaponId } = useWeapons();
  const { attributes, keyAttribute } = useAttributes();

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

  async function handleSave(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault();

    const payload: Knight = {
      name: knightData.name,
      nickname: knightData.nickname,
      birthday: knightData.birthday,
      attributes: attributes,
      weapons: setEquippedWeapon(selectedWeapons),
      keyAttribute: keyAttribute
    } 

    console.log('%cpayload: ', 'background: green;', payload)

    try {
      const data: Promise<ResponseKnight> = postKnight(payload);
      console.log('%cdata: ', 'background: cyan;', data)
    }
    catch(error) {
      console.log('error: ', error);
    }
  }

  function setEquippedWeapon(selectedWeapons: Weapon[]): Weapon[] {
    let processedWeapon: Weapon[] = structuredClone(selectedWeapons);
    processedWeapon = processedWeapon.map((weapon: Weapon) => ({
      ...weapon,
      equipped: weapon.id === equippedWeaponId ? true : false
    }));

    return processedWeapon;
  }

  return (
    <div className="container">
      <h1>Criador de Knight</h1>
        <Button text="Criar Knight" style={{backgroundColor: 'green'}} handleClick={handleSave} />
        <div className="container container-row">
          <div className="container">
            <MainDataInput 
              name={knightData.name} 
              nickname={knightData.nickname} 
              birthday={knightData.birthday} 
              handleInput={handleSetData} 
            />
            <WeaponsList />
            <SelectedWeaponsList selectedWeapons={selectedWeapons} />
          </div>

          <div className="container">
            <AttributesInput handleChange={handleAttribute} />
            <KeyAttributeSelect />
          </div>

        </div>
    </div>
  )
}