import React from 'react';
import { hot } from 'react-hot-loader'
import './App.css'

class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div className='App'>
              Hello, World!
          </div>
      );
  }
}

export default hot(module)(App);