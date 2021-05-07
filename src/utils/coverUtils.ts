import { v4 as uuidv4 } from 'uuid';
import { ICover } from './types';

export enum CoverImageSizes {
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

export const getRequiredCoverHeight = (cover: ICover, key: CoverImageSizes) => {
  let { height } = cover.formats.small;
  if (cover.formats[key].url) {
    height = cover.formats[key].height;
  }
  // eslint-disable-next-line radix
  if (parseInt(height) > 260) return '260';
  return height;
};

const getPlaceholderDataIfUndefined = (obj: any) => {
  if (!obj) {
    return {
      name: '',
      width: '',
      height: '',
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
          width: thumbnail.width,
          height: thumbnail.height,
          url: thumbnail.url,
        },
        large: {
          name: large.name,
          width: large.width,
          height: large.height,
          url: large.url,
        },
        medium: {
          name: medium.name,
          width: medium.width,
          height: medium.height,
          url: medium.url,
        },
        small: {
          name: small.name,
          width: small.width,
          height: small.height,
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
