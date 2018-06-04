import React from 'react';

class PanelA extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) { 
    let shouldRender = this.props.isPositive
    
    let panel1 = shouldRender ? (
      <div className="aClass">
        </div>
    ) : (
      <div className="bClass">
      <h3> {this.props.contA} </h3>
        </div>
    );
   
    return (
      <div> {panel1} </div>
    );
  }
}
export default PanelA;