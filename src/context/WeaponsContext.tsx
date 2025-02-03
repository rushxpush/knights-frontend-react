import React, { createContext, useContext, useEffect, useState } from "react";
import { Weapon } from "../components/CreateKnight/CreateKnight.types";
import { fetchWeaponsList } from "../utils/weaponsData";

interface WeaponsContextType {
  weaponsList: Weapon[];
  checkedWeaponsId: Set<string>;
  selectedWeapons: Weapon[];
  toggleWeaponSelection: (id: string) => void;
  confirmSelectedWeapons: (e: Event) => void;
}

const WeaponsContext = createContext<WeaponsContextType|undefined>(undefined);

export function WeaponsProvider({children}: {children: React.ReactNode}) {
  const [weaponsList, setWeaponsList] = useState<Weapon[]>([]);
  const [checkedWeaponsId, setcheckedWeaponsId] = useState<Set<string>>(new Set());
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
    const newSelectedWeapons: Weapon[] = weaponsList.filter((weapon: Weapon) => checkedWeaponsId.has(weapon.id));
    setSelectedWeapons(newSelectedWeapons);
    setcheckedWeaponsId(new Set());
  }

  return (
    <WeaponsContext.Provider value={{weaponsList, checkedWeaponsId, selectedWeapons, toggleWeaponSelection, confirmSelectedWeapons}}>
      {children}
    </WeaponsContext.Provider>
  )
}

export function useWeapons() {
  const context = useContext(WeaponsContext)
  if (!context) throw new Error('useWeapons must be used inside WeaponsProvider');
  return context;
}