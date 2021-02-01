// HEADER REDUCER

// INITIAL STATE
const initialState = {
  initial: true,
  clicked: null,
  menuName: "Home"
};

// ACTION TYPES
const SET_STATE = "SET_STATE";

// REDUCER
const reducer = (state = initialState, action={}) => {
  switch(action.type) {
    case SET_STATE:
      return {
        ...state,
        initial: action.initial,
        clicked: action.clicked,
        menuName: action.menuName
      }
    default:
      return state;
  }
};

// ACTION CREATOR
export const setState = ({ initial, clicked, menuName }) => ({
  type: SET_STATE,
  initial,
  clicked,
  menuName
});

export default reducer;