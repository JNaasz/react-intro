import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return ( // use parens here so javascript doesn't automatically insert a semicolon
      <Square
        key={'s' + i}
        className={'square' + (i === this.props.lastSelection ? ' current' : '')}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderRow(squareStart) { 
    let rows = [];
    for(let i = squareStart; i < squareStart + 3; i++) { 
      rows.push(this.renderSquare(i));
    }

    return rows;
  }

  render() {
    return (
      <div>
        {
          [0, 3, 6].map((squareStart, i) => {
           return <div className="board-row" data-row={i + 1} key={'r' + i +1}>
             {this.renderRow(squareStart)}
            </div>
          })
        }
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        lastSelection: null
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    console.info('hello?', i);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calcWinner(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares, lastSelection: i }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
    console.log('you gonna work?', this.state)
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calcWinner(current.squares);
    const status = winner
      ? 'Winner: ' + winner
      : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    const moves = history.map((step, move) => {
      const isCurrent = move && step.lastSelection === current.lastSelection;
      console.log('eh', isCurrent, move.lastSelection, current.lastSelection);
      
      let text;
      if (!move) {
        text = 'Go to game start';
      } else { 
        const selection = squareMap[step.lastSelection];
        const moveText = `move #${move} (${selection.col}, ${selection.row})`;  
        text = isCurrent
          ? 'Currently on ' + moveText
          : 'Go to ' + moveText;
      }

      return (
        <li key={move}>
          <button
            className={isCurrent ? 'current' : ''}
            onClick={() => this.jumpTo(move)}
          >
            {text}
          </button>
        </li>
      )
    });
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            lastSelection={current.lastSelection}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calcWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const squareMap = {
  0: { row: 1, col: 1 },
  1: { row: 1, col: 2 },
  2: { row: 1, col: 3 },
  3: { row: 2, col: 1 },
  4: { row: 2, col: 2 },
  5: { row: 2, col: 3 },
  6: { row: 3, col: 1 },
  7: { row: 3, col: 2 },
  8: { row: 3, col: 3 },
}