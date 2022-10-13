import React, { useContext } from "react";
import { useBooksContext } from "../../context/bookContext";
import BookItem from "../bookItem/BookItem";
import "./BookList.css";

function BookList() {
  const { books, setBooks } = useBooksContext();

  function deleteBook(catalogNumber) {
    setBooks(books.filter((book) => book.catalogNumber !== catalogNumber));
  }

  return (
    <ul className="books-wrapper">
      {books.length > 0 ? (
        books.map((item, index) => (
          <BookItem
            item={item}
            key={item.bookName + index}
            deleteBook={deleteBook}
          />
        ))
      ) : (
        <div className="book-not-found">No Books to display</div>
      )}
    </ul>
  );
}

export default BookList;
