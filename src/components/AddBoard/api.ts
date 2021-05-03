export const createOneBoard = async (
  title: string,
  bgImage: string,
  bgColor: string,
  ownerId: string
) => {
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/boards`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        backgroundImage: bgImage,
        meta: { bgColor },
        owners: [ownerId],
      }),
    })
  ).json();

  return data;
};
