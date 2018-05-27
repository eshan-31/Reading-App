import React, {Component} from 'react'
import Book from './Book'
import startCase from "lodash.startcase";
import Head from './head'



function ListBooks({ books, handleChange }) {
  var shelves = ["currentlyReading", "wantToRead", "read"];
  return ( <div className="list-books">
    <Head />
      <div className="open-search">
          Add Books
      </div>
      {shelves.map(shelf => {return (<div className="list-books-content">
           <div>
              <div className="bookshelf">
                 <h2 className="bookshelf-title">{startCase(shelf)}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.filter(book => book.shelf === shelf).map(book => <Book key={book.id}   book={book} handleChange={handleChange}
 />
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
