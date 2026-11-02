import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

// pages
import RegisterBook from "./pages/RegisterBook.jsx";
import Books from "./pages/Books.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RegisterBook />
  },
  {
    path: '/books',
    element: <Books />
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)