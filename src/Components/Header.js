import React from 'react';
import '../../style.css';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) {
  return (
      <div className="HeadStyle">
          {this.props.hData.map((el) => {
          return <ul>{el}</ul>
          }, this)}
          <button className="minus-button" onClick={this.props.handleClick}
          >
           {this.props.isPositive? '+' : '-'}
           </button>
      </div>
    );
  };
}


export default Header;