import React from 'react';
import PropTypes from 'prop-types';

import './Book.css';


class Book extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    publ: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    avail: PropTypes.string.isRequired,
    viewPage: PropTypes.number.isRequired,
  };

  render() {      
   
    if (this.props.viewPage==1){

    return (

  
        <tr className="Book">
        <td>{this.props.title}</td>
        <td>{this.props.writer}</td>
        <td>{this.props.publ}</td>
        <td>{this.props.price}</td>
        <td>{this.props.avail}</td>
        </tr>

    );
    }

    if (this.props.viewPage==2){

      return (
        <div className="BookDiv">
        <div className="BookName">{this.props.title} </div><br/>
        {this.props.writer}<br/>
        {this.props.publ}<br/>
        {this.props.price}<br/>
        {this.props.avail}    
        </div>
              
        
 

    );

    
  }
}
}

export default Book;
