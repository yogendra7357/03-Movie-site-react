import './App.css';
import { Routes, Route, useLocation, BrowserRouter, Link, Router } from 'react-router-dom'; 
import Home from './Component/Main/Home';
import Header from './Component/Header/Header';
import Trailers from './Component/Main/Trailers';
import Footer from './Component/Footer/Footer';
import Movies from './Component/Main/Movie/Movies';
import Clips from './Component/Main/Clips';
import Review from './Component/Main/Review';
import Abouts from './Component/Main/Abouts';
import Signin from './Component/Header/Signin/Signin';
import Signup from './Component/Header/Signin/Signup';
import Protect from './Component/Header/Signin/Protect';

function App() {
  const location = useLocation();
  const Path = location.pathname.includes('/Signin') || location.pathname.includes('/Signup');

  return (
    <div className="App">
      {!Path && <Header />}
           <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Protect Component = {Movies} />} />
          <Route path="/Trailers" element={<Protect Component = {Trailers} />} />
          <Route path="/Review"element={<Protect Component = {Review} />} />
          <Route path="/Clips"element={<Protect Component = {Clips} />} />
          <Route path="/Abouts"element={<Protect Component = {Abouts} />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
         
          </Routes>
      {!Path && <Footer />}

    </div>
  );
}

export default App;
