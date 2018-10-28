import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <h1>Cypress!</h1>
        <form class="login" action="/">
          <input type="text" name="email" />
          <input type="password" name="password" />
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default App;
