import { v4 as uuidv4 } from 'uuid';
import { ICover } from './types';

enum CoverImageSizes {
  thumbnail = 'thumbnail',
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export const getRequiredSizeCoverImg = (
  cover: ICover,
  key: CoverImageSizes
) => {
  if (cover.formats[key].url) {
    return cover.formats[key].url;
  }
  return cover.formats.small.url;
};

const getPlaceholderDataIfUndefined = (obj: any) => {
  if (!obj) {
    return {
      name: '',
      url: '',
    };
  }
  return obj;
};

export const getRequiredCoverData = (data: any) => {
  let coverData = null;
  if (data.cover) {
    const { id, name, url, formats } = data.cover;
    let { thumbnail, large, medium, small } = formats;

    thumbnail = getPlaceholderDataIfUndefined(thumbnail);
    large = getPlaceholderDataIfUndefined(large);
    medium = getPlaceholderDataIfUndefined(medium);
    small = getPlaceholderDataIfUndefined(small);

    coverData = {
      id,
      name,
      url,
      coverBg: data.metaData.coverBg,
      formats: {
        thumbnail: {
          name: thumbnail.name,
          url: thumbnail.url,
        },
        large: {
          name: large.name,
          url: large.url,
        },
        medium: {
          name: medium.name,
          url: medium.url,
        },
        small: {
          name: small.name,
          url: small.url,
        },
      },
    };
  }
  return coverData;
};

export const getOptimisticCoverData = () => ({
  id: `optimistic${uuidv4()}`,
  name: '',
  url: '',
  formats: {
    thumbnail: {
      name: '',
      url: '',
    },
    large: {
      name: '',
      url: '',
    },
    medium: {
      name: '',
      url: '',
    },
    small: {
      name: '',
      url: '',
    },
  },
});
