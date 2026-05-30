import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Blog } from './pages/Blog';
import Dashboard from './pages/admin/Dashboard';
import AddBlog from './pages/admin/AddBlog';
import ListBlog from './pages/admin/ListBlog';
import Comments from './pages/admin/Comments';
import Layout from './pages/admin/layout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/admin' element={<Layout />}> 
        <Route index element={<Dashboard />} />
        <Route path='addBlog' element={<AddBlog />} />
        <Route path='comments' element={<Comments />} />
        </Route>
    </Routes>
    </div>
  )
}

export default App