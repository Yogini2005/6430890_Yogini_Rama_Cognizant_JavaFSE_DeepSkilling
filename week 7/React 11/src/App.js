import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // bind methods
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleSyntheticEvent = this.handleSyntheticEvent.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello() {
    console.log("Hello! This is a static message.");
  }

  handleIncrement() {
    this.increment();
    this.sayHello();
  }

  sayWelcome(message) {
    alert(message);
  }

  handleSyntheticEvent(e) {
    e.preventDefault();
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>React Event Examples</h2>
        <h3>Counter: {this.state.count}</h3>

        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>
        <br /><br />

        <button onClick={this.handleSyntheticEvent}>OnPress</button>
        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
