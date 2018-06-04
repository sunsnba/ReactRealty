import React from 'react';

class PanelB extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) { 
    let shouldRender = this.props.isPositive
    
    let panel2 = shouldRender ? (
      <div className="bClass">
       <h3> {this.props.contB} </h3>
        </div>
    ) : (
      <div className="aClass">  </div>
    );
   
    return (
      <div> {panel2} </div>
    );
  }
}
export default PanelB;