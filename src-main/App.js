import React from "react";
import NavBar from "./components/Blog/navBar";
import Blogs from "./components/Blog/blogs";
import Create from "./components/Blog/create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/Blog/blogDetails";

export default function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
    </BrowserRouter>
  );
}
