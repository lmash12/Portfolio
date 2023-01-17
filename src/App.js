import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import Blog from './components/Blog';
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import About from './components/About'

function App() {
  return (
    <div className='app'>
       <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
