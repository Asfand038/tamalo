import { baseUrl } from '../../utils';

export const createOneBoard = async (
  title: string,
  bgColor: string,
  ownerId: string,
  bgImage?: string
) => {
  const body = {
    title,
    meta: { bgColor },
    owners: [ownerId],
  };
  let reqBody;
  if (bgImage) {
    reqBody = { ...body, backgroundImage: bgImage };
  } else {
    reqBody = { ...body };
  }
  const data = await (
    await fetch(`${baseUrl}/boards`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
  ).json();

  return data;
};
