import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/bookList/BookList";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AddUpdateBook from "./components/addUpdateBook/AddUpdateBook";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/addBook" element={<AddUpdateBook />} />
          <Route
            path="/updateBook/:catalogNumber"
            element={<AddUpdateBook />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
