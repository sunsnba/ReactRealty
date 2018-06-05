import React from 'react';

class PanelB extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) { 
    let shouldRender = this.props.isPositive && this.props.bShow || this.props.bShow 
    
    let panel2 = shouldRender ? (
      <div className="bClass" onClick={this.props.handleBClick}>
       <h3> {this.props.contB} </h3>
        </div>
    ) : (
      <div className="aClass" onClick={this.props.handleBClick}>  </div>
    );
    return (
      <div> {panel2} </div>
    );
  }
}
export default PanelB;