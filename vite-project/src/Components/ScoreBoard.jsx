import React from "react";

export class ScoreBoard extends React.Component {
  state = {
    playerA: 0,
    playerB: 0,
  };
  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      const isPlayerA = Math.random() > 0.5;
      
      this.setState((prevState) => {
        const nextState = isPlayerA 
          ? { playerA: prevState.playerA + 1 } 
          : { playerB: prevState.playerB + 1 };

        if (prevState.playerA >= 4 || prevState.playerB >= 4) {
          clearInterval(this.interval);
        }
        return nextState;
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { playerA, playerB } = this.state;
    const hasWinner = playerA >= 5 || playerB >= 5;

    return (
      <div>
        <p>Player A: {playerA}</p>
        <p>Player B: {playerB}</p>
        {hasWinner && <p>We have a winner!</p>}
      </div>
    );
  }
}