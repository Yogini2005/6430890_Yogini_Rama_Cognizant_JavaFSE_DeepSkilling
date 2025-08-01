import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const rupees = parseFloat(this.state.rupees);
    const conversionRate = 0.011; // Example: 1 INR = 0.011 Euro
    const euros = (rupees * conversionRate).toFixed(2);
    this.setState({ euros });
  }

  render() {
    return (
      <div>
        <h3>Currency Converter</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
            placeholder="Enter amount in INR"
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euros && (
          <p>{this.state.rupees} INR = {this.state.euros} EUR</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
