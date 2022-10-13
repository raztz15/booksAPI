import { useNavigate } from "react-router";
import { useBooksContext } from "../../context/bookContext";
import "./BookItem.css";
export default function BookItem({ item, deleteBook }) {
  const nav = useNavigate();
  return (
    <li className="book-row">
      <div className="images">
        <img src={item.coverPhoto} />
      </div>
      <div className="books-info">
        <p>Author name: {item.authorName}</p>
        <p>Book name: {item.bookName}</p>
        <p>Publication date: {item.publicationDate}</p>
        <p>Catalog number: {item.catalogNumber}</p>
      </div>
      <div className="book-actions">
        <button
          className="update-book"
          onClick={() => nav(`/updateBook/${item.catalogNumber}`)}
        >
          Update
        </button>
        <button
          className="delete-book"
          onClick={() => deleteBook(item.catalogNumber)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
