import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Square extends React.Component {
  /* we want the square component to "remember" that it got clicked 
  so for it to remember things, we use "state". We can store the current
  value of the Square in this.state and change it when the Square is clicked. */
  constructor(props) {
    super(props); /* always call super when defining the constructor of a subclass */
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button 
        className="square" 
        onClick={() => {this.setState({value: 'X'})}}>
        {this.state.value /* display the current state value when clicked */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    /* we are passing a prop called value to the Square */
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
