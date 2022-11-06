export function fetchUser() {
    return function (dispatch) {
      dispatch({ type: "login/userLoading" });
      fetch("/login")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "login/userLoaded", payload: data });
        });
    };
  }
  
  const initialState = {
    entities: [], // array with user
    status: "idle", // loading state
  };
  
  export default function catsReducer(state = initialState, action) {
    switch (action.type) {
      case "login/userLoading":
        return {
          ...state,
          status: "loading",
        };
      case "login/userLoaded":
        return {
          ...state,
          entities: action.payload,
          status: "idle",
        };
      default:
        return state;
    }
  }