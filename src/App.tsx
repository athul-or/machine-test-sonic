// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route,} from "react-router-dom";
import SinglePost from './pages/SinglePost';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/post/:postId" element={<SinglePost/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
