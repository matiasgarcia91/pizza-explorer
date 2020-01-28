const initialState = {};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN": {
      // => Ask yourself: what is action.payload?
      return {
        userData: "something"
      };
    }
    default: {
      return state;
    }
  }
}

/*
{
  type: "ADD_PIZZA",
  payload: {
    id: 4,
    name: newPizza,
    description: "some description"
  }
}

{
  type: "CLEAR_PIZZA_LIST"
}
*/
