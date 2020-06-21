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
  };

  render() {      
      

    return (
      /*<tr className="Book">
        <td>{this.props.title}</td>
        <td>{this.props.writer}</td>
        <td>{this.props.publ}</td>
        <td>{this.props.price}</td>
        <td>{this.props.avail}</td>
      </tr>
      */
        <div className="Book">
        {this.props.title}
        {this.props.writer}
        {this.props.publ}
        {this.props.price}
        {this.props.avail}
      </div>
      
    )

    ;

  }

}

export default Book;
