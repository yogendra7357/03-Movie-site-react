import './App.css';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom'; 
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

function App() {
  const location = useLocation();
  const Path = location.pathname.includes('/Signin') || location.pathname.includes('/Signup');

  return (
    <div className="App">
      {!Path && <Header />}
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Trailers" element={<Trailers />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Clips" element={<Clips />} />
          <Route path="/Abouts" element={<Abouts />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
      </Routes>
      {!Path && <Footer />}

    </div>
  );
}

export default App;
