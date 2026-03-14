import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CategoryPosts from './pages/CategoryPosts';
import PostDetail from './pages/PostDetail';
import AllPosts from './pages/AllPosts';
import About from './pages/About';
import Contact from './pages/Contact';
import AddPost from './pages/AddPost';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/category/:id" element={<CategoryPosts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;