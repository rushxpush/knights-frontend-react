import React, { createContext, useContext, useEffect, useState } from "react";
import { Weapon } from "../components/CreateKnight/CreateKnight.types";
import { fetchWeaponsList } from "../utils/weaponsData";

interface WeaponsContextType {
  weaponsList: Weapon[];
  checkedWeaponsId: Set<string>;
  selectedWeapons: Weapon[];
  selectedWeaponsId: Set<string>;
  equippedWeaponId: string|undefined;
  toggleWeaponSelection: (id: string) => void;
  confirmSelectedWeapons: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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

  function confirmSelectedWeapons(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const mergedIds = new Set([...checkedWeaponsId, ...selectedWeaponsId]);
    const newSelectedWeapons: Weapon[] = weaponsList
      .filter((weapon: Weapon) => mergedIds.has(weapon.id))

    if (!equippedWeaponId) {
      setEquippedWeaponId(newSelectedWeapons[0].id);
    }
    
    setSelectedWeapons(newSelectedWeapons);
    setSelectedWeaponsId(mergedIds);
    setcheckedWeaponsId(new Set());
  }

  function removeSelectedWeapon(id: string) {
    const newSelectedWeapons = selectedWeapons.filter((weapon: Weapon) => weapon.id !== id);

    if (newSelectedWeapons.length > 0) {
      if (equippedWeaponId === id) {
        setEquippedWeaponId(newSelectedWeapons[0].id);
      }
    }
    else {
      setEquippedWeaponId(undefined);
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
    setEquippedWeaponId(id);
  }

  return (
    <WeaponsContext.Provider value={{weaponsList, checkedWeaponsId, selectedWeaponsId, equippedWeaponId, selectedWeapons, toggleWeaponSelection, confirmSelectedWeapons, equipSelectedWeapon, removeSelectedWeapon}}>
      {children}
    </WeaponsContext.Provider>
  )
}

export function useWeapons() {
  const context = useContext(WeaponsContext)
  if (!context) throw new Error('useWeapons must be used inside WeaponsProvider');
  return context;
}