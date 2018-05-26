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

  render() {
    return (
      <div>
        <Switch>
				  <Route exact path='/' render={() => (<ListBooks books={this.state.books} />)}/>
        </Switch>
        <Switch>
        	 <Route path='/search' render={() => (<BooksSearch books={this.state.books} />)}/>
        </Switch>
				</div>    )

}
}
export default BooksApp
