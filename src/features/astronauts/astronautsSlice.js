// Action Creators
export function fetchAstronauts() {
  // Returning a function and not an action.
  return function (dispatch) {
    // dispatch an initial action to set up a "loading" state
    dispatch({ type: "astronauts/astronautsLoading" });

    // initiate a network request with fetch
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((astronauts) =>
        // when we have data from the response, dispatch another action to add the data to our Redux store
        dispatch({
          type: "astronauts/astronautsLoaded",
          payload: astronauts.people,
        })
      );
  };
}

// Reducers
const initialState = {
  entities: [], //array of astronauts
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        entities: action.payload,
      };

      // Addition, set state as loading (inbetween the click and when the data is actually loaded. )
    case "astronauts/astronautsLoading":
      return {
        ...state,
        status: 'loading',
      };

    default:
      return state;
  }
}
