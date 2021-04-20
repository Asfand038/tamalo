import {
  Img01,
  Img02,
  Img03,
  Img04,
  Img05,
  Img06,
  Img07,
  Img08,
} from '../assets';

export const getRandomImg = () => {
  const pictureCollection = [
    Img01,
    Img02,
    Img03,
    Img04,
    Img05,
    Img06,
    Img07,
    Img08,
  ];
  const randomIndex = Math.floor(Math.random() * pictureCollection.length);
  return pictureCollection[randomIndex];
};
