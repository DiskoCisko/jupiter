export const selectCharacter = (state) => {
  return state.characterReducer.characterImages;
};

export const selectError = (state) => state.characterReducer.errMessage;
