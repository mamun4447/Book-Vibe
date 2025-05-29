import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/HomeComp/Home.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import ReadBooks from "./components/ListedBooks/ReadBooks.jsx";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ReadBooks />,
        loader: () => fetch("/booksData.json"),
      },
      // {
      //   path: "/listed-books/wishlist",
      //   element: <ReadBooks />,
      //   loader: () => fetch("/booksData.json"),
      // },
      {
        path: "books/:bookId",
        element: <BookDetails />,
        loader: () => fetch(`/booksData.json`),
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="bottom-center"
      autoClose={1000}
      limit={2}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={"Zoom"}
    />
  </StrictMode>
);
