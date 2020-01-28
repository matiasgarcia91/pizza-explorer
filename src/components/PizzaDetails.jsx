import React from "react";
import { connect } from "react-redux";

class PizzaDetails extends React.Component {
  render() {
    console.log(this.props);
    const pizza = this.props.pizza;
    if (!pizza) {
      return <p>Select a pizza to view details</p>;
    }
    return (
      <div>
        <h2>
          {pizza.name}
          <button>close</button>
        </h2>
        <p>
          <em>{pizza.description}</em>
        </p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    pizza: reduxState.pizzaState.selectedPizza
  };
}
export default connect(mapStateToProps)(PizzaDetails);
