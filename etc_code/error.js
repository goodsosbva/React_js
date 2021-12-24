import React, { Component } from 'react';

const Promblematic = () => {
  throw (new Error('버그가 나타났다!'));
  return (
    <div>

    </div>
  );
};

class Counter extends Component {
  state = {
    number: 0,
    error: false
  }

  // (...)

  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }

  render() {
    if (this.state.error) return (<h1>에러발생!</h1>);

    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        { this.state.number === 4 && <Promblematic /> }
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
