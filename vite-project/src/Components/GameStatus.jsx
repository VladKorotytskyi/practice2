import React from "react";

export class GameStatus extends React.Component {
  state = { status: "Preparing game..." };
  timer = null;

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ status: "Game is live!" });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <p>
        Status: {this.state.status}
      </p>
    );
  }
}
