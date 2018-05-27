# MyReads Project

This project is built using REACT and has the main functionality of keeping a track of books by segregationg them into 3 categories :-
1. Currently Reading
2. To Be Read
3. Read

There is drop down next to each book through which you can change between the shelves.
You can also add more books to any of the shelves from the collection of books availablewhich can be searched using search queries.

## Installation

1. Download or clone the repository
2. Open terminal and move the project directory
3. Install all the dependencies by running
```
npm install
```
4. Finally start the app by running
```
npm start
```

## Additional Information  
- The backend server is provided by the file [`BooksAPI.js`](src/BooksAPI.js) which contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

- The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
