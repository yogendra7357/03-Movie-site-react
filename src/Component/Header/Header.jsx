import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isSignIn: false,
      clickedLink: '',
    };
  }
  
  componentDidMount() {
    const loginStatus = localStorage.getItem('isSignin');
    if (loginStatus) {
      this.setState({ isSignIn: true });
    }
  }

  handleLogout = () => {
    localStorage.removeItem('isSignin');
    this.setState({ isSignIn: false }, () => {
      window.location.href = '/Signin';
    });
  }

  setClickedLink = (link) => {
    this.setState({ clickedLink: link });
  };


  handleClick = (link) => {
    this.setClickedLink(link);
  };

  render() {
    return (
      <header className="flex justify-between items-center fixed top-0 left-0 right-0 p-4 md:p-6 z-10 bg-transparent">
        <div className="flex items-center">
          <span className="text-sky-500 font-extrabold text-xl md:text-3xl font-serif">FILMY</span>
          <span className="text-white font-extrabold text-xl md:text-3xl font-serif ml-1">ZILLA</span>
        </div>

        <nav>
          <ul className="flex space-x-4 md:space-x-14 text-white text-sm md:text-xl">
            <li>
              <Link
                to="/"
                className={`font-bold ${this.state.clickedLink === '/' ? 'text-sky-600' : 'text-white'} hover:text-sky-600`}
                onClick={() => this.handleClick('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Movies"
                className={`font-bold ${this.state.clickedLink === '/Movies' ? 'text-sky-600' : 'text-white'} hover:text-sky-600`}
                onClick={() => this.handleClick('/Movies')}
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/Trailers"
                className={`font-bold ${this.state.clickedLink === '/Trailers' ? 'text-sky-600' : 'text-white'} hover:text-sky-600`}
                onClick={() => this.handleClick('/Trailers')}
              >
                Trailers
              </Link>
            </li>
            <li>
              <Link
                to="/Clips"
                className={`font-bold ${this.state.clickedLink === '/Clips' ? 'text-sky-600' : 'text-white'} hover:text-sky-600`}
                onClick={() => this.handleClick('/Clips')}
              >
                Clips
              </Link>
            </li>
            <li>
              <Link
                to="/Review"
                className={`font-bold ${this.state.clickedLink === '/Review' ? 'text-sky-600' : 'text-white'} hover:text-sky-600`}
                onClick={() => this.handleClick('/Review')}
              >
                Review
              </Link>
            </li>
            <li>
              <Link
                to="/Abouts"
                className={`font-bold ${this.state.clickedLink === '/Abouts' ? 'text-sky-600' : 'text-white'} hover:text-sky-600`}
                onClick={() => this.handleClick('/Abouts')}
              >
                Abouts
              </Link>
            </li>
          </ul>
        </nav>

        {this.state.isSignIn ? (
          <button
            onClick={this.handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded ml-3 md:ml-5"
          >
            Logout
          </button>
        ) : (
          <Link to="/Signin" className="bg-sky-500 p-2 md:py-2 md:px-4 text-white font-bold rounded-lg hover:bg-sky-700">
            Sign In
          </Link>
        )}
      </header>
    );
  }
}

export default Header;
