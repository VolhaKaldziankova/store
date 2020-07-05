import React from 'react';
import PropTypes from 'prop-types';

import './Store.css';
import Book from './Book';

class Store extends React.PureComponent {

  static propTypes = {
    nameStore: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  };

  state ={
    viewPage: 1 //вид страницы: 1 - в виде списка, 2 - в виде таблицы
  }

  ChangeList = () => {
    this.setState ({viewPage:1})
  }

  ChangeTable = () => {
    this.setState ({viewPage:2})
  }

  render() {
     let booksCode=this.props.books.map (i=>     
      <Book 
      viewPage={this.state.viewPage}
      key={i.code}
      title={i.title}
      writer={i.writer}
      publ={i.publ}
      price={i.price}
      avail={i.avail}
      />
      
      )


      if (this.state.viewPage==2){
      return (
      <div className="Store">
        <div className="Top"><div>{this.props.nameStore}</div></div>
        <input type="button" value="Список" onClick={this.ChangeList}></input>
        <input type="button" value="Таблица" onClick={this.ChangeTable}></input>
        <div>          
            {booksCode}            
        </div>
        
       </div> )
        }

      if (this.state.viewPage==1){
      return (
      <div className="Store">
        <div className="Top"><div>{this.props.nameStore}</div></div>
        <input type="button" value="Список" onClick={this.ChangeList}></input>
        <input type="button" value="Таблица" onClick={this.ChangeTable}></input>
        <table>     
             <tbody>
             <tr className="BookTitle">
        <td>Название</td>
        <td>Автор</td>
        <td>Издательство/Серия</td>
        <td>Стоимость</td>
        <td>Наличие</td>
        </tr>
               {booksCode} 
              </tbody>                        
        </table>
        </div>
        )
        }

}
}



export default Store;
      
        
