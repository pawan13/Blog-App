import { Button } from "@material-tailwind/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Nopage from "./pages/noPage/Nopage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/allblogs" element={<AllBlogs />} />
        <Route path="/bloginfo/:id" element={<BlogInfo />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
