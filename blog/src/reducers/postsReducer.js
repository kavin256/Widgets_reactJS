const temp = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "ADD_POSTS":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default temp;
