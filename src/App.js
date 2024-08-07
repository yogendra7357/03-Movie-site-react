import './App.css';
import { Routes, Route, useLocation, BrowserRouter, Link, Router } from 'react-router-dom'; 
import Home from './Component/Main/Home';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Movies from './Component/Main/Movie/Movies';
import Trailers from './Component/Main/Trailers/Trailers';
import Clips from './Component/Main/Clips';
import Review from './Component/Main/Review';
import Abouts from './Component/Main/Abouts';
import Signin from './Component/Header/Signin/Signin';
import Signup from './Component/Header/Signin/Signup';
import Protect from './Component/Header/Signin/Protect';
import Forgot from './Component/Header/Signin/Forgot';

function App() {
  const location = useLocation();
  const Path = location.pathname.includes('/Signin') ||
               location.pathname.includes('/Signup') ||
               location.pathname.includes('/Forgot');

  return (
    <div className="App">
      {!Path && <Header />}
           <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Protect Component = {Movies} />} />
          <Route path="/Trailers" element={<Protect Component = {Trailers} />} />
          <Route path="/Clips"element={<Protect Component = {Clips} />} />
          <Route path="/Review"element={<Review/>} />
          <Route path="/Abouts"element={<Abouts/>} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path='/Forgot' element={<Forgot />} />
         
          </Routes>
      {!Path && <Footer />}

    </div>
  );
}

export default App;
