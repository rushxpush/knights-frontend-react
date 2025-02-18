const loginPath = '/auth/login';

const getRequestOptions = (method: string, data: unknown) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
}


export const signIn = async (username: string, password: string) => {
  const response: Response = await fetch(import.meta.env.VITE_BASE_URL + loginPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });

  if (!response.ok) {
    throw new Error('Não foi possível realizar o login.');
  }

  const data = await response.json();
  console.log('data: ', data);
}