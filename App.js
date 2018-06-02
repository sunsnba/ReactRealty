import React, { Component } from 'react';
import Header from './src/Components/Header';
import PanelA from './src/Components/PanelA';
import PanelB from './src/Components/PanelB';
import data from './data.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hData: null,
      contA: null,
      contB: null,
      sign: '-'
    };
  }


  render() {
    console.log('this is data', data)
    return (
      <div>
        <Header />
        <div id='boxContainer'>
        {this.state.hData}
        <PanelA />
        <PanelB />
        </div>
      </div>
    );
  };
}

export default App;