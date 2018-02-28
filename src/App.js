import React, { Component } from 'react';
import Message from 'bitcore-message';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      address: '',
      message: '',
      signature: '',
      valid: false,
      error: ''
    };
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleChangeSignature = this.handleChangeSignature.bind(this);
  }

  validateSignature(message, address, signature) {
    try {
      const m = new Message(message);
      this.setState({
        valid: m.verify(address, signature),
        error: ''
      });
    } catch (err) {
      this.setState({
        valid: false,
        error: err.message
      });
    }
  }

  handleChangeMessage(e) {
    this.setState({ message: e.target.value });
    this.validateSignature(
      e.target.value,
      this.state.address,
      this.state.signature
    );
  }

  handleChangeAddress(e) {
    this.setState({ address: e.target.value });
    this.validateSignature(
      this.state.message,
      e.target.value,
      this.state.signature
    );
  }

  handleChangeSignature(e) {
    this.setState({ signature: e.target.value });
    this.validateSignature(
      this.state.message,
      this.state.address,
      e.target.value
    );
  }

  render() {
    return (
      <div className="App">
        <label>Address</label>
        <input
          value={this.state.address}
          onChange={this.handleChangeAddress}
          type="text"
        />
        <label>Message</label>
        <input
          value={this.state.message}
          onChange={this.handleChangeMessage}
          type="text"
        />
        <label>Signature</label>
        <input
          value={this.state.signature}
          onChange={this.handleChangeSignature}
          type="text"
        />
        <label>Valid</label>
        <div>
          <input type="checkbox" checked={this.state.valid} disabled={true} />
          {this.state.error}
        </div>
      </div>
    );
  }
}

export default App;
