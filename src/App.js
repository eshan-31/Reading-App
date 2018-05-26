import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Head from './components/head'
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
      <Head />
    )

}
}
export default BooksApp
