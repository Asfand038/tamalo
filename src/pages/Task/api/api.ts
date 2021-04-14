export const getTaskById = async (id: string) => {
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).json();

  return data;
};
