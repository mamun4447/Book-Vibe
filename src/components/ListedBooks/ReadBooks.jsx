import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../Database/addToDb";
import SingleBook from "../HomeComp/SingleBook";
import { IoMdArrowDropdown } from "react-icons/io";

const ReadBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedListedBooks = getStoredReadList();
    const storedListedBooksInt = storedListedBooks.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedListedBooksInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, [allBooks]);

  // Wishlist//
  useEffect(() => {
    const storedListedBooks = getStoredWishList();
    const storedListedBooksInt = storedListedBooks.map((id) => parseInt(id));

    const wishBookList = allBooks.filter((book) =>
      storedListedBooksInt.includes(book.bookId)
    );
    setWishList(wishBookList);
  }, [allBooks]);

  // Handle Sort by//
  const handleSortBy = (sortType) => {
    setSortBy(sortType);

    if (sortType === "Ratings") {
      const sortReadList = [...readList].sort((a, b) => a.rating - b.rating);
      // const sortWishList = [...wishList].sort((a, b) => a.rating - b.rating);
      // setWishList(sortWishList);
      setReadList(sortReadList);
    }
    if (sortType === "No of Pages") {
      {
        const sortReadList = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages
        );
        // const sortWishList = [...wishList].sort(
        //   (a, b) => a.totalPages - b.totalPages
        // );
        setReadList(sortReadList);

        // setWishList(sortWishList);
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl my-8 text-center">Books</h1>
      <section className="text-center m-5">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn m-1">
            {sortBy ? `Sort By: ${sortBy}` : "Sort By"} <IoMdArrowDropdown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handleSortBy("Ratings")}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handleSortBy("No of Pages")}>
              <a>Number of Pages</a>
            </li>
          </ul>
        </div>
      </section>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          {readList.map((book) => (
            <SingleBook key={book.bookId} book={book} />
          ))}
        </TabPanel>
        <TabPanel>
          {wishList.map((book) => (
            <SingleBook key={book.bookId} book={book} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadBooks;
