import { ICover } from './types';

enum CoverImageSizes {
  thumbnail = 'thumbnail',
  medium = 'medium',
  small = 'small',
}

export const getRequiredSizeCoverImg = (
  cover: ICover,
  key: CoverImageSizes
) => {
  return cover.formats[key].url;
};
