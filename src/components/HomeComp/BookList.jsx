import { useEffect, useState } from "react";
import SingleBook from "./SingleBook";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-center">Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <SingleBook book={book} key={book.bookId} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
