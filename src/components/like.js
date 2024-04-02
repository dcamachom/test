import React, { Component } from "react";

class Like extends Component {
  state = {
    likes: 0,
  };

  handleIncrement = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  handleDecrement = () => {
    this.setState({ likes: this.state.likes - 1 });
  };

  render() {
    return (
      <div>
        <p data-testid="lik">Likes: {this.state.likes}</p>
        <button  data-testid="bl"id="increment" onClick={this.handleIncrement}>
          Like
        </button>
        <button  data-testid="dsl" id="decrement" onClick={this.handleDecrement}>
          {" "}
          Dislike
        </button>
      </div>
    );
  }
}

export default Like;