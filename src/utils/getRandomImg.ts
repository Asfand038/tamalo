import { Img01, Img02, Img03, Img04, Img05, Img06 } from '../assets';

export const getRandomImg = () => {
  const pictureCollection = [Img01, Img02, Img03, Img04, Img05, Img06];
  const randomIndex = Math.floor(Math.random() * pictureCollection.length);
  return pictureCollection[randomIndex];
};
