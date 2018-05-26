import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {
  state = {
    query: '',
    queryBooks: []
  }

  searchBooks = (val) => {
    for(let book of Array.from(val))
    {
       book.shelf='none'
    }
    for(let value of Array.from(val)){
      for(let book of this.props.books) {
        if(value.id === book.id){
          value.shelf=book.shelf
        }
      }
    }
    return val
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query}   />
          </div>
        </div>
        <div className="search-books-results">
        <ol className="books-grid">
            
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
