import React, { Component } from 'react';
import Header from './src/Components/Header';
import PanelA from './src/Components/PanelA';
import PanelB from './src/Components/PanelB';
import data from './data.json';
import style from './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hData: data.headerData,
      contA: data.contentA,
      contB: data.contentB,
      isPositive: false,
      bShow: false,
      
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBClick = this.handleBClick.bind(this);
  }

  handleClick () {
    this.setState(prevState => ({
        isPositive: !prevState.isPositive,
      }));
      }

  handleBClick () {
    this.setState(prevState => ({
      isPositive: !prevState.isPositive,
    }));
    }    

  render() {
    return (
      <div>
        <Header hData={this.state.hData}
         isPositive={this.state.isPositive} 
         handleClick={this.handleClick}
        />
        <div id='boxContainer'>
        <PanelA isPositive={this.state.isPositive} 
        contA={this.state.contA}
        bShow={this.state.bShow}
        />
        <PanelB isPositive={this.state.isPositive}
         contB={this.state.contB}
         handleBClick={this.handleBClick}
         bShow={this.state.bShow}
         />
        </div>
      </div>
    );
  };
}

export default App;