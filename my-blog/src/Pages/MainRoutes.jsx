import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from './HomePage';
import Blogs from './Blogs';
import SingleBlog from './SingleBlog';
import EditBlog from './EditBlog';
import Login from './Login';
import SignUp from './SignUp';

const MianRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/:id" element={<SingleBlog />} />
    <Route path="/edit/:id" element={<EditBlog />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<SignUp />} />
  </Routes>
  )
}

export default MianRoutes
