import { baseUrl } from '../../utils';

export const sendLoginRequest = async (
  identifier: string,
  password: string
) => {
  const response = await fetch(`${baseUrl}/auth/local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier, password }),
  });
  const data = await response.json();
  return data;
};

export const getUserInformationRequest = async () => {
  const response = await fetch(`${baseUrl}/users/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const data = await response.json();

  return data;
};
