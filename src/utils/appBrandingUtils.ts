const appIconColor = '#0079bf';

export const getAppIcon = (color?: string) => {
  let desiredColor = appIconColor;
  if (color) {
    desiredColor = color;
  }
  return `data:image/svg+xml,%3Csvg%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m21%200h-18c-1.657%200-3%201.343-3%203v18c0%201.656%201.343%203%203%203h18c1.656%200%203-1.344%203-3v-18c0-1.657-1.344-3-3-3zm-10.56%2018.18c0%20.795-.645%201.44-1.44%201.44h-4.44c-.795%200-1.44-.646-1.44-1.44v-13.62c0-.795.645-1.44%201.44-1.44h4.44c.795%200%201.44.645%201.44%201.44zm10.44-6c0%20.794-.645%201.44-1.44%201.44h-4.44c-.795%200-1.44-.646-1.44-1.44v-7.62c0-.795.646-1.44%201.44-1.44h4.44c.795%200%201.44.645%201.44%201.44z%22%20fill%3D%22%23${desiredColor.slice(
    1
  )}%22%2F%3E%3C%2Fsvg%3E`;
};
