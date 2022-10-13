import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useBooksContext } from "../../context/bookContext";
import "./AddUpdateBook.css";
import { v4 } from "uuid";
function AddUpdateBook() {
  const nav = useNavigate();
  const location = useLocation();
  const { catalogNumber } = useParams();
  const { books, setBooks } = useBooksContext();
  const [updatingBook, setUpdatingBook] = useState(
    books.find((book) => book.catalogNumber === catalogNumber)
  );

  if (location.pathname.includes("/updateBook") && !updatingBook) {
    return (
      <div className="book-not-found">
        No book with such Catalog Number {catalogNumber}
      </div>
    );
  }

  function submitForm(e) {
    e.preventDefault();
    let newBName = e.target[0].value;
    let newBAuthor = e.target[1].value;
    let newBPublishDate = e.target[2].value;
    let newBCoverPhoto = e.target[3].value;
    if (updatingBook) {
      let newBook = updatingBook;
      newBook.bookName = newBName.length > 0 ? newBName : updatingBook.bookName;
      newBook.authorName =
        newBAuthor.length > 0 ? newBAuthor : updatingBook.authorName;
      newBook.publicationDate =
        newBPublishDate.length > 0
          ? newBPublishDate
          : updatingBook.publicationDate;
      newBook.coverPhoto =
        newBPublishDate.length > 0 ? newBPublishDate : updatingBook.coverPhoto;
      let booksCopy = books;
      let index = booksCopy.findIndex(
        (book) => book.catalogNumber === updatingBook.catalogNumber
      );
      booksCopy.splice(index, 1);
      booksCopy.push(newBook);
      setBooks(booksCopy);
    } else {
      let newBook = {
        authorName: newBAuthor,
        bookName: newBName,
        publicationDate: newBPublishDate,
        coverPhoto: newBCoverPhoto,
        catalogNumber: v4(),
      };
      setBooks([...books, newBook]);
    }
    nav("/");
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <label>Book Name:</label>
        <input
          placeholder={updatingBook?.bookName ?? "Enter book name"}
          required={!updatingBook}
        />

        <label>Book Author:</label>
        <input
          placeholder={updatingBook?.authorName ?? "Enter book author name"}
          required={!updatingBook}
        />

        <label>Book Publish date:</label>
        <input
          required={!updatingBook}
          placeholder={
            updatingBook?.publicationDate ?? "Enter book publish date"
          }
        />

        <label>Book Cover photo:</label>
        <input
          required={!updatingBook}
          placeholder={updatingBook?.coverPhoto ?? "Enter book image url"}
        />

        <button type="submit">
          {!updatingBook ? "Add book" : "Update book"}
        </button>
      </form>
    </div>
  );
}

export default AddUpdateBook;
