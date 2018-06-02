import React, { Component } from 'react';
import Header from './src/Components/Header';
import PanelA from './src/Components/PanelA';
import PanelB from './src/Components/PanelB';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div id='boxContainer'>
        <PanelA />
        <PanelB />
        </div>
      </div>
    );
  };
}

export default App;