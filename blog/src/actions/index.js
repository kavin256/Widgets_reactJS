import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// bad approach
//   const response = await jsonPlaceholder.get("/posts");
//   return {
//     type: "FETCH_POSTS",
//     payload: response,
//   };

// this is not plain js when compiled into browser readable format because of the asynch await syntax
// so we need to use an external service like redux-thunk
