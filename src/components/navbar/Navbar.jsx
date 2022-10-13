import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { useBooksContext } from "../../context/bookContext";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { books, setBooks, booksCopy } = useBooksContext();

  const searchRef = useRef();

  return (
    <nav>
      <div className="nav-left">
        <div
          className={
            location.pathname === "/addBook" ? "nav-item-selected" : "nav-item"
          }
          onClick={() => navigate("/addBook")}
        >
          Add Book
        </div>
        <div
          className={
            location.pathname === "/" ? "nav-item-selected" : "nav-item"
          }
          onClick={() => navigate("/")}
        >
          List
        </div>
      </div>
      <div className="search-bar">
        <input
          placeholder="Enter something to search.."
          ref={searchRef}
        ></input>
        <button
          onClick={() => {
            let query = searchRef.current.value;
            if (!query || query.length < 1) {
              setBooks(booksCopy);
            } else {
              setBooks(
                booksCopy.filter((book) => book.bookName.includes(query))
              );
            }
          }}
        >
          Search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
