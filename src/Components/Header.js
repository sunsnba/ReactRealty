import React from 'react';
import '../../style.css';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) { 

    let shouldRenderHeader = this.props.isPositive

    let headerContent = shouldRenderHeader ? (
      <div className="HeadStyle">
       <ul>  </ul>
      <button className="plus-button" onClick={this.props.handleClick}
      >   +</button>
      </div>
         ) : (
          <div className="HeadStyle">
          {this.props.hData.map((el, index) => {
          return <ul key={index}>{el}</ul>
          }, this)}
          <button className="minus-button" onClick={this.props.handleClick}
          > - </button>
           </div>
        );

  return (
          <div> {headerContent} </div>
    );
  };
}


export default Header;