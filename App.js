import React, { Component } from 'react';
import Header from './src/Components/Header';
import PanelA from './src/Components/PanelA';
import PanelB from './src/Components/PanelB';
import data from './data.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hData: data.headerData,
      contA: null,
      contB: null,
      sign: '-'
    };
  }

  render() {
    console.log(this.state.hData)
    return (
      <div>
        <Header hData={this.state.hData} sign={this.state.sign}/>
        <div id='boxContainer'>
        <PanelA />
        <PanelB />
        </div>
      </div>
    );
  };
}

export default App;