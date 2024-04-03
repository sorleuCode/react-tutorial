import { Route, Routes } from "react-router-dom"
import About from "./About"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Missing from "./Missing"
import Nav from "./Nav"
import NewPost from "./NewPost"
import PostPage from "./PostPage"


function App() {

  return (
    <div className="App">
    <Header/>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/post-page" element={<PostPage/>}/>
    </Routes>
    <Footer/>
      
    </div>
  )
}

export default App
