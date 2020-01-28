const initialState = {
  list: [
    {
      id: 1,
      name: "Pizza Margarita",
      description: "Minimalism is key!"
    },
    {
      id: 2,
      name: "Pizza Napoletana",
      description: "Like Margarita, but without the basil."
    },
    {
      id: 3,
      name: "Pizza Bianca",
      description: "Did somebody say oil?"
    }
  ],
  selectedPizza: {}
};

export default function pizzaListReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description
          }
        ]
      };
    }
    case "CLEAR_PIZZA_LIST":
      return [];
    case "SELECT_PIZZA": {
      const selectedPizza = state.list.find(
        pizza => pizza.id === action.payload.pizzaId
      );
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        selectedPizza: selectedPizza
      };
    }
    case "UNSELECT_PIZZA": {
      return null;
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
