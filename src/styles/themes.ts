import { blue, neutral, userLogoColor } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
  //primaryFont and userLogoColor will not change when changing themes
  primaryFont,
  userLogoColor,
  backgroundColor: neutral[100],
  boardBackgroundColor: blue[100],
  navbarBackgroundColor: blue[200],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  inputFieldBackground: neutral[100],
};
