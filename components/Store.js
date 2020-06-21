import React from 'react';
import PropTypes from 'prop-types';

import './Store.css';
import Book from './Book';

class Store extends React.PureComponent {

  static propTypes = {
    nameStore: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  };

  render() {
     let booksCode=this.props.books.map (i=>     
      <Book 
      key={i.code}
      title={i.title}
      writer={i.writer}
      publ={i.publ}
      price={i.price}
      avail={i.avail}
      />
      
      )

    return (
      <div className="Store">
        <div className="Top"><div>{this.props.nameStore}</div></div>
       <div>
          
            {booksCode}
            
        </div>
        
      </div>
    )
    ;

  }

}

export default Store;
/*       <table>
          <tbody>
            {booksCode}
          </tbody>        
        </table>*/