export const getTransformValue = (id: string) => {
  const draggedItem = document.getElementById(id);
  if (draggedItem) {
    const currentTransform = (draggedItem as HTMLElement).style.transform;
    return currentTransform;
  }
  return '';
};
