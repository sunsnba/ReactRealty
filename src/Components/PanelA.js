import React from 'react';
import {SimpleButton} from './SimpleButton' 

class PanelA extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) { 
    let shouldRender = this.props.isPositive && this.props.bShow || this.props.bShow 
    
    let panel1 = shouldRender ? (
      <div className="aClass"> {SimpleButton} </div>
        ) : (
      <div className="bClass"> <h3> {this.props.contA} </h3> </div>
    );
    return (
      <div> {panel1} </div>
    );
  }
}
export default PanelA;