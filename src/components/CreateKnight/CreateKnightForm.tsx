import { useEffect, useState } from "react"
import { Knight, Weapon } from "./CreateKnight.types";
import { AttributesInput } from "./AttributesInput";
import { MainDataInput } from "./MainDataInput";
import { SelectWeapons } from "./SelectWeapons";
import { fetchWeaponsList } from "../../utils/weaponsData";
import { SelectedWeaponsList } from "./SelectedWeaponsList";

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

  const [weaponsList, setWeaponsList] = useState<Weapon[]>([]);
  const [selectedWeapons, setSelectedWeapons] = useState<Weapon[]>([]);

  useEffect(() => {
    fetchWeaponsList().then(value => {
      initializeWeaponsList(value);
    });
  }, []);

  function initializeWeaponsList(value: Weapon[]) {
    const newValue = structuredClone(value);
      for(const item of newValue) {
        item.equipped = false;
      }
      console.log('value: ', value)
      console.log('newValue: ', newValue)
      setWeaponsList(value)
  }

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

  function toggleWeaponSelection(id: string, checked: boolean) {
    const updatedWeaponsList: Weapon[] = weaponsList.map((weapon: Weapon) => {
      if (weapon.id === id) {
        weapon.equipped = true;
        return weapon;
      }
      return weapon;
    });
    console.log('selectedWeaponObj: ', updatedWeaponsList)
    setWeaponsList(updatedWeaponsList)
  }

  function confirmSelectedWeapons(e) {
    e.preventDefault();
    const selectedWeapons = weaponsList.filter((weapon) => weapon.equipped === true);
    setSelectedWeapons(selectedWeapons)
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

        <SelectWeapons weaponsList={weaponsList} selectedWeapons={selectedWeapons} handleInput={toggleWeaponSelection} handleClick={confirmSelectedWeapons} />

        <SelectedWeaponsList selectedWeapons={selectedWeapons} />
      </form>
    </div>
  )
}