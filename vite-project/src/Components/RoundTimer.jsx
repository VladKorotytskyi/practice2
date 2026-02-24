import React from "react";

export class RoundTimer extends React.Component {
  state = { timer: 15 };
  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.timer <= 1) {
          clearInterval(this.interval);
          return { timer: 0 };
        }
        return { timer: prevState.timer - 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <p>
        {this.state.timer > 0
          ? `Round time left: ${this.state.timer}s`
          : "Round finished!"}
      </p>
    );
  }
}