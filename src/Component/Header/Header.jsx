import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
    <header className="flex justify-between items-center fixed top-0 left-0 right-0  p-6 z-10 "> 

          <div className="flex ">
            <span className="text-sky-500 font-extrabold text-3xl font-serif">FILMY</span>
            <span className="text-white font-extrabold text-3xl font-serif ml-1">ZILLA</span>
          </div>
          
       
        <ul className='' >
          <li className='space-x-14   text-white text-xl '>
            <Link to='/' className='hover:text-sky-600'>Home</Link>
            <Link to='/Movies'className='hover:text-sky-600' >Movies</Link>
            <Link to='Trailers'className='hover:text-sky-600 hover:text'>Trailers</Link>
            <Link to='Review'className='hover:text-sky-600 '>Review</Link>
            <Link to='Clips' className='hover:text-sky-600 '>Clips</Link>
            <Link to='Abouts' className='hover:text-sky-600'>Abouts</Link>
          </li>
        </ul>

     <Link to="/Signin" className='bg-sky-500 p-2 text-white font-bold rounded-lg hover:bg-sky-700 '>Sign In</Link>

  

      </header>
    );
  }
}
