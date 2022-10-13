import { createContext, useContext, useState } from "react";
import bookList from "../dataSource/booksList.json";

import React from "react";

const BookContext = createContext(null);

export function BookContextProvider({ children }) {
  const [books, setBooks] = useState(bookList);
  const [booksCopy, setBooksCoopy] = useState(bookList);
  return (
    <BookContext.Provider value={{ books, setBooks, booksCopy }}>
      {children}
    </BookContext.Provider>
  );
}

export const useBooksContext = () => {
  const context = useContext(BookContext);
  return context;
};
