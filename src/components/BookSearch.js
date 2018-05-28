import React, {Component} from 'react'
import {Link} from 'react-router-dom' //to link to the main page
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {
  state = {
    query: '', //initial search query
    qBooks: [] //books showing inital books shown
  }

  findBooks = (val) => {
    //set the default shelves
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

//show the search results based on the query
  updateTerm = query => { this.setState({query})
      BooksAPI.search(query).then((result) => {
        if(result===undefined || (result.error)){
          this.setState({qBooks: []})
        } else{
        result = this.findBooks(result)
        this.setState({qBooks: result})
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
            {this.state.qBooks && ( this.state.qBooks.map((book) => (
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
