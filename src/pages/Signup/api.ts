import { baseUrl } from '../../utils';

export const userSignupRequest = async (
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string
) => {
  const data = await (
    await fetch(`${baseUrl}/auth/local/register`, {
      method: 'POST',
      body: JSON.stringify({ email, firstName, lastName, username, password }),
    })
  ).json();

  return data;
};
