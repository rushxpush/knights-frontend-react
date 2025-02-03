import React, { createContext, useContext, useEffect, useState } from "react";
import { Weapon } from "../components/CreateKnight/CreateKnight.types";
import { fetchWeaponsList } from "../utils/weaponsData";

interface WeaponsContextType {
  weaponsList: Weapon[];
  checkedWeaponsId: Set<string>;
  selectedWeapons: Weapon[];
  selectedWeaponsId: Set<string>;
  toggleWeaponSelection: (id: string) => void;
  confirmSelectedWeapons: (e: Event) => void;
  equipSelectedWeapon: (id: string) => void;
  removeSelectedWeapon: (id: string) => void;
}

const WeaponsContext = createContext<WeaponsContextType|undefined>(undefined);

export function WeaponsProvider({children}: {children: React.ReactNode}) {
  const [weaponsList, setWeaponsList] = useState<Weapon[]>([]);
  const [checkedWeaponsId, setcheckedWeaponsId] = useState<Set<string>>(new Set());
  const [selectedWeaponsId, setSelectedWeaponsId] = useState<Set<string>>(new Set());
  const [equippedWeaponId, setEquippedWeaponId] = useState<string|undefined>(undefined);
  const [selectedWeapons, setSelectedWeapons] = useState<Weapon[]>([]);

  useEffect(() => {
    fetchWeaponsList().then(value => {
      setWeaponsList(value);
    })
  }, []);

  function toggleWeaponSelection(id: string) {
    setcheckedWeaponsId((prev: Set<string>) => {
      const newcheckedWeapons: Set<string> = new Set(prev);
      if (newcheckedWeapons.has(id)) {
        newcheckedWeapons.delete(id);
      }
      else {
        newcheckedWeapons.add(id);
      }
      return newcheckedWeapons;
    })
  }

  function confirmSelectedWeapons(e: Event) {
    e.preventDefault();

    const mergedIds = new Set([...checkedWeaponsId, ...selectedWeaponsId])
    const newSelectedWeapons: Weapon[] = weaponsList
      .filter((weapon: Weapon) => mergedIds.has(weapon.id))
      // .map((weapon: Weapon, index: number) => ({
      //   ...weapon,
      //   equipped: selectedWeapons.some((w) => w.id === weapon.id && w.equipped) || index === 0 
      // }));

    const isAnyWeaponEquipped = newSelectedWeapons.some((weapon: Weapon) => weapon.equipped);
    if (!isAnyWeaponEquipped) {
      newSelectedWeapons[0]['equipped'] = true;
    }
    console.log(isAnyWeaponEquipped)

    
    setSelectedWeapons(newSelectedWeapons);
    setSelectedWeaponsId(mergedIds);
    setcheckedWeaponsId(new Set());
  }

  function removeSelectedWeapon(id: string) {
    const newSelectedWeapons = selectedWeapons.filter((weapon: Weapon) => weapon.id !== id);
    const isAnyWeaponEquipped = newSelectedWeapons.some((weapon: Weapon) => weapon.equipped);

    if (!isAnyWeaponEquipped) {
      newSelectedWeapons[0]['equipped'] = true;
    }

    setSelectedWeaponsId((prev) => {
      const newSelectedWeaponsId: Set<string> = new Set(prev);
      newSelectedWeaponsId.delete(id);

      return newSelectedWeaponsId
    });

    setcheckedWeaponsId((prev) => {
      const newCheckedWeaponsId: Set<string> = new Set(prev);
      newCheckedWeaponsId.delete(id);

      return newCheckedWeaponsId;
    });

    setSelectedWeapons(newSelectedWeapons);
  }

  function equipSelectedWeapon(id: string): void {
    const newSelectedWeapons: Weapon[] = selectedWeapons.map((weapon) => ({
      ...weapon,
      equipped: (weapon.id === id) ? true : false
    }));

    setSelectedWeapons(newSelectedWeapons);
  }

  return (
    <WeaponsContext.Provider value={{weaponsList, checkedWeaponsId, selectedWeaponsId, selectedWeapons, toggleWeaponSelection, confirmSelectedWeapons, equipSelectedWeapon, removeSelectedWeapon}}>
      {children}
    </WeaponsContext.Provider>
  )
}

export function useWeapons() {
  const context = useContext(WeaponsContext)
  if (!context) throw new Error('useWeapons must be used inside WeaponsProvider');
  return context;
}