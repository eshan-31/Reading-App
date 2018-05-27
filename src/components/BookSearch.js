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

  updateTerm = query => { this.setState({query})
    const maxBooks =25 ;
      BooksAPI.search(query, maxBooks).then((result) => {
        if(result===undefined || (result.error)){
          this.setState({queryBooks: []})
        } else{
        result = this.searchBooks(result)
        /*set the state of the queryBooks*/
        this.setState({queryBooks: result})
      }
      })
  }



  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query}  onChange={event => this.updateTerm(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
        <ol className="books-grid">
            {this.state.queryBooks && ( this.state.queryBooks.map((book) => (
                <li key={book.id}>
                  <Book handleChange={this.props.handleChange} book={book} />
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
