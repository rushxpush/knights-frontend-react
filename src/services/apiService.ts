import { store } from "../store"

const getAuthHeaders = () => {
  const state = store.getState();
  const token = state.auth.token;

  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  }
}

export const getData = async (route: string)  => {
  const response: Response = await fetch(import.meta.env.VITE_BASE_URL + route, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error('Falha GET');
  }

  const data = await response.json();
  return data;
}

export const getDataById = async(route: string, id: string) => {
  const response: Response = await fetch(import.meta.env.VITE_BASE_URL + route + `/${id}`, {
    headers: getAuthHeaders()
  });

  if (!response.ok) {
    throw new Error('Falha Get/:id | id: ' + id);
  }

  const data = await response.json();
  return data;
}

export const postData = async(route: string, postData: unknown) => {
  const response: Response = await fetch(import.meta.env.VITE_BASE_URL + route, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error('Falha POST');
  }

  const data = await response.json();
  return data;
}

export const patchData = async(route: string, id: string, patchData: unknown) => {
  const response = await fetch(import.meta.env.VITE_BASE_URL + route + `/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(patchData),
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error('Falha PATCH');
  }
}

export const deleteData = async(route: string, id: string) => {
  const response: Response = await fetch(import.meta.env.VITE_BASE_URL + route + `${id}`, { 
    method: 'DELETE',
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error('Falha DELETE');
  }
}