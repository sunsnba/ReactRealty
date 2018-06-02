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
      isPositive: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick () {
    this.setState(previousState => ({
        isPositive: !previousState.isPositive
      }));
    }

  render() {
    return (
      <div>
        <Header hData={this.state.hData} isPositive={this.state.isPositive} handleClick={this.state.handleClick}
        />
        <div id='boxContainer'>
        <PanelA />
        <PanelB />
        </div>
      </div>
    );
  };
}

export default App;