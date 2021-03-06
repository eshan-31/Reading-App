import React from "react";


function Book({ book, handleChange }) {
  const { shelf, imageLinks, authors, title } = book;
  return (
     <div className="book">
           <div className="book-top">
            <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${imageLinks
                  ? imageLinks.thumbnail
                  : "http://dummyimage.com/128x193/292929/e3e3e3&text=No Cover Available"}")`,
                outline:  shelf === "none" ? "2px solid rgba(0,0,0,0.23)" : "none",
                boxShadow: shelf === "none" ? "none" : "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
              }}  />
          <div className="book-shelf-changer"  style={{ backgroundColor: shelf === "none" ? "#ccc" : "#60ac5d"
            }}  >
            <select value={shelf} onChange={e => handleChange(book, e.target.value)}>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        {authors && authors.map(author => <div key={author} className="book-authors"> {author} </div>)}
        </div>
  );
}

export default Book;
