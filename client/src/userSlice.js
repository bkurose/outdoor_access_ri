export function fetchUser() {
    return function (dispatch) {
      dispatch({ type: "user/userLoading" });
      fetch("/login")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "user/userLoaded", payload: data });
        });
    };
  }
  
  const initialState = {
    entities: [], // array with user
    status: "idle", // loading state
  };
  
  export default function catsReducer(state = initialState, action) {
    switch (action.type) {
      case "user/userLoading":
        return {
          ...state,
          status: "loading",
        };
      case "user/userLoaded":
        return {
          ...state,
          entities: action.payload,
          status: "idle",
        };
      default:
        return state;
    }
  }