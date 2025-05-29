import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../Database/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {
    bookId: Id,
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (Id) => {
    addToStoredReadList(Id);
  };
  const handleWishList = (Id) => {
    addToStoredWishList(Id);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="mt-2">{author}</p>
          <p className="border-t my-2"></p>
          <p>{category}</p>
          <p className="border-t my-2"></p>

          <p className="py-6">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <p className="py-6 flex gap-2">
            <span className="font-bold">Tag </span>
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-blue-950 rounded-full">
                {tag}
              </span>
            ))}
          </p>
          <p className="border-t my-2"></p>
          <div className="grid gap-2">
            <p>Number of Pages: {totalPages}</p>
            <p>Publisher: {publisher}</p>
            <p>Year of Publishing: {yearOfPublishing}</p>
            <p>Rating: {rating}</p>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => handleMarkAsRead(Id)}
              className="btn btn-outline btn-accent"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishList(Id)}
              className="btn btn-accent"
            >
              Add to the Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
