import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border  mt-9 shadow-2xl">
        <figure className="bg-blue-300 py-8 rounded-2xl mx-6 mt-6">
          <img src={image} className="h-[166px] " alt="Book" />
        </figure>
        <div className="card-body">
          <div className="">
            {tags.map((tag, index) => (
              <p key={index} className="badge bg-blue-950 rounded-full">
                {tag}
              </p>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed my-2"></div>
          <div className="card-actions justify-between">
            <div className="">{category}</div>
            <div className="flex">
              {rating} <CiStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
