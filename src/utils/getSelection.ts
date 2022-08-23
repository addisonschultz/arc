export const getSelection = async () => {
  const currentSelection: any[] = await miro.board.getSelection();

  if (currentSelection.length > 1) {
    return false;
  }

  if (currentSelection[0].type !== "text") {
    return false;
  }

  console.log(currentSelection[0]);

  return currentSelection[0];
};
