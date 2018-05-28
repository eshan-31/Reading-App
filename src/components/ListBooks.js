import React from 'react'
import Book from './Book'
import titleCase from "lodash.startcase"; //capitalizes staring letter of each word
import Head from './head'
import { Link } from "react-router-dom"; //to link the search page




function ListBooks({ books, handleChange }) {
  var shelves = ["currentlyReading", "wantToRead", "read"];
  return ( <div className="list-books">
    <Head />
      <div className="open-search">
          <Link to="/search" alt="search books">Add Books</Link>
      </div>
      {shelves.map(shelf => {return (<div key={shelf} className="list-books-content">
           <div>
              <div className="bookshelf">
                 <h2 className="bookshelf-title">{titleCase(shelf)}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.filter(book => book.shelf === shelf).map(book => <Book key={book.id}   book={book} handleChange={handleChange} />
                      )}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ListBooks
