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
 //to change the shelves and keep the changes even when the page is refreshed
handleChange = async (book, shelf) => {
  book.shelf = shelf;
  BooksAPI.update(book, shelf).then( ()=> {
    let newSet = this.state.books.filter( (boo) => boo.id !== book.id)
    newSet.push(book)
    this.setState({books: newSet});
  });
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
