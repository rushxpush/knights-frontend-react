import { useEffect, useState } from "react";
import { KnightWithStats } from "../components/CreateKnight/CreateKnight.types";
import { getData } from "../services/apiService";

export function ShowKnightsPage() {
  const [knightsList, setKnightsList] = useState<KnightWithStats[]>([]);

  useEffect(() => {
    async function fetchKnights() {
      try {
        const knightsData = await getData('/knights');
        setKnightsList(knightsData)
      } catch(error) {
        console.log('error: ', error)
      }
    }

    fetchKnights();
  }, []);

  return(
    <div className="container border-container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Apelido</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          {knightsList.map((knight: KnightWithStats) => (
            <tr key={knight._id}>
              <td>{knight.name}</td>
            </tr>
          ) 
          )}
          <tr>
          </tr>
        </tbody>
      </table>

    </div>
  );
}