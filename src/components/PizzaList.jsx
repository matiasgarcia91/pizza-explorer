import React from "react";
import { connect } from "react-redux";

class PizzaList extends React.Component {
  state = {
    newPizzaName: ""
  };

  handleAddClick = () => {
    const pizzaName = this.state.newPizzaName;
    const action = {
      type: "ADD_PIZZA",
      payload: {
        id: Math.trunc(Math.random() * 1000),
        name: pizzaName,
        description: "Any description possible"
      }
    };
    this.props.dispatch(action);
  };

  selectPizza = id => {
    const action = {
      type: "SELECT_PIZZA",
      payload: { pizzaId: id }
    };
    this.props.dispatch(action);
  };

  render() {
    //console.log(this.props);
    return (
      <div>
        <h1>Pizza Explorer</h1>
        <ul>
          {this.props.pizzas.map(pizza => {
            return (
              <li key={pizza.id} onClick={() => this.selectPizza(pizza.id)}>
                {pizza.name}
              </li>
            );
          })}
        </ul>
        <p>
          New pizza:
          <input
            value={this.state.newPizzaName}
            onChange={e => {
              this.setState({ newPizzaName: e.target.value });
            }}
          />
          <button onClick={this.handleAddClick}>Add</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pizzas: state.pizzaState.list
  };
}

export default connect(mapStateToProps)(PizzaList);
