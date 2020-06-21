"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Store from './components/Store';

let booksArr=require('./books.json');
let nameStore='Магазин книг'

ReactDOM.render( 
  <Store books={booksArr} nameStore={nameStore}/>
, document.getElementById('container') );
