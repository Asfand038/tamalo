export const getImgFromMockApi = async () => {
  let image = '';
  try {
    const response = await fetch(`https://randomuser.me/api`);
    const data = await response.json();
    image = data.results[0].picture.thumbnail;
  } catch (err) {
    image = '';
  }
  return image;
};

export const getMultipleImgsFromMockApi = async (numOfImgs: number) => {
  let images = [];
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${numOfImgs}`
    );
    const data = await response.json();
    images = data.results.map(
      (el: { picture: { thumbnail: string } }) => el.picture.thumbnail
    );
  } catch (err) {
    for (let i = 0; i < numOfImgs; i += 1) {
      images.push('');
    }
  }
  return images;
};
