import React from 'react'
import { Routes , Route } from "react-router-dom"
import Form from './pages/Form'
import Hero from './pages/hero'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <div className="max-w-[1750px] w-[85%] m-auto mt-0">
        <Navbar />
        {/* <Hero /> */}
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/form" element={<Form />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
