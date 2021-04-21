export const getAvatarFallbackName = (username: string) => {
  const blankspaceIndex = username.indexOf(' ');
  if (blankspaceIndex === -1) {
    return username.slice(0, 2).toUpperCase();
  }
  return `${username[0]}${username[blankspaceIndex + 1]}`.toUpperCase();
};
