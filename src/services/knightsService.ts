import { Knight, ResponseKnight } from "../components/CreateKnight/CreateKnight.types";

const BASE_URL = 'http://localhost:3000/knights';

export async function postKnight(knightData: Knight): Promise<ResponseKnight> {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(knightData)
  };

  const response: Response = await fetch(BASE_URL, requestOptions);
  console.log('response: ', response);

  if (!response.ok) {
    throw new Error('Falha ou tentar salvar knight');
  }
  console.log('response: ', response);
  const data: ResponseKnight = await response.json();
  console.log('data: ', data);
  return data;
}