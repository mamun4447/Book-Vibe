import { Link } from "react-router-dom";
import bannerImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse md:mx-10">
        <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <Link>
            <button className="btn btn-primary mt-3">View The List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
