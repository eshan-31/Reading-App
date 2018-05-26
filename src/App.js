import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'

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
      <ListBooks books={this.state.books} />
    )

}
}
export default BooksApp
