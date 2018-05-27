import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import ListBooks from './components/ListBooks'
import BooksSearch from './components/BookSearch'

class BooksApp extends React.Component {
  state = {
		books: []
	}
  componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({books})
  })
}
booksAvailable = id => {
    return this.state.books.findIndex(book => book.id === id);
  };

  checkBook = async id => {
    const availableId = this.booksAvailable(id);
    if (availableId !== -1) {return Promise.resolve(this.state.books[availableId]);
    }
    try {
      const book = await BooksAPI.get(id);
      book.shelf = "none";
      return book;
    } catch (e) {
      console.error(`There was an API error: ${e}`);
    }
  };

handleChange = async (book, shelf) => {
    // We update the state immediately and fix it later if there is an issue.
    // So we save the state in case the API messes up.
    const oldState = JSON.parse(JSON.stringify(this.state));
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

  async componentDidMount() {
    try {
      const books = await BooksAPI.getAll();
      this.setState({ books });
    } catch (e) {
      console.error(`There was an API error: ${e}`);
    }
  }

  render() {
    return (
      <div>
        <Switch>
				  <Route exact path='/' render={() => (<ListBooks books={this.state.books} handleChange={this.handleChange}
 />)}/>
        </Switch>
        <Switch>
        	 <Route path='/search' render={() => (<BooksSearch books={this.state.books} />)}/>
        </Switch>
				</div>    )

}
}
export default BooksApp
