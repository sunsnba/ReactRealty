import React from 'react';
import '../../style.css';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) {  
  return (
      <div className="HeadStyle">
          {this.props.hData.map(function(el) {
          return <ul>{el}</ul>
          })}
          <button class="minus-button" type="button">{this.props.sign}</button>
      </div>
    );
  };
}


export default Header;