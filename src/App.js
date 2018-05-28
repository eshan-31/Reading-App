import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Switch, Route } from 'react-router-dom' //for different paths
import './App.css'
import ListBooks from './components/ListBooks'
import BooksSearch from './components/BookSearch'

class BooksApp extends React.Component {
  state = {
		books: []
	}
  //just after the BooksApp gets loaded
  componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({books})
  })
}

booksAvailable = id => {
    return this.state.books.findIndex(book => book.id === id);
  };

//for checking if the book is already present
  checkBook = async id => {
    const availableId = this.booksAvailable(id);
    if (availableId !== -1) {return Promise.resolve(this.state.books[availableId]);
    }
    try {
      const book = await BooksAPI.get(id);
      book.shelf = "none";
      return book; //return the book if available
    } catch (e) {
      console.error(`Error occured: ${e}`); // if some error occurs in finding the book
    }
  };

//function to change the shleves
handleChange = async (book, shelf) => {
    const availableId = this.booksAvailable(book.id);
    if (availableId !== -1) {
      this.setState(state => {
        state.books[availableId].shelf = shelf;
        return state;
      });
    } else {
      this.setState(state => {
        book.shelf = shelf;
        state.books.push(book);
        return state;
      });
    }
  };

  render() {
    return (
      <div>
        <Switch>
				  <Route exact path='/' render={() => (<ListBooks books={this.state.books} handleChange={this.handleChange}
 />)}/>
        	 <Route path='/search' render={() => (<BooksSearch books={this.state.books} handleChange={this.handleChange}
/>)}/>
        </Switch>
				</div>    )

}
}
export default BooksApp
