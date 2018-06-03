import React from 'react';
import '../../style.css';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) { 
    if(this.props.isPositive === true) {
      return   <div className="HeadStyle">
      <button className="plus-button" onClick={this.props.handleClick}
      >
       {'+'}
       </button>
  </div>
    } else {
  return (
      <div className="HeadStyle">
          {this.props.hData.map((el, index) => {
          return <ul key={index}>{el}</ul>
          }, this)}
          <button className="minus-button" onClick={this.props.handleClick}
          >
           {'-'}
           </button>
      </div>
    );
  }
  };
}


export default Header;