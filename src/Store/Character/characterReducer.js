import { CHARACTER, ERROR } from "./action";

const initialState = {
  characterImages: [],
  errMessage: "",
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER:
      return { ...state, characterImages: [...state.characterImages, action.character.image] };
    case ERROR:
      return { ...state, errMessage: action.errMessage };
    default:
      return state;
  }
};
export default characterReducer;
