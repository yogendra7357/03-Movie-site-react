import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Signin from './Signin';

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    conformPassword: "",
    name: "",
    error: "",
    success: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: ""});
  };

  handleSignup = (e) => {
    e.preventDefault();
    const { email, password, conformPassword, name } = this.state;

    this.setState({ success: "", error: "" });

    if (email === '' || password === '' || name === '')
    {this.setState({ error: "Please fill all fields" });} 
    
    else if (password !== conformPassword) {
    this.setState({ error: "Passwords do not match" });} 

    else if (password.length < 8)
    {this.setState({ error: "Minimum 8 characters" });} 
    
    else {this.setState({ success: "Signup successful" });
    window.localStorage.setItem("isSignup", JSON.stringify({ email, password }));

     
    window.location.href = '/Signin'   }
  };

  render() {    
    const { name, email, password, conformPassword, success, error } = this.state;
     {/* Signup Component */}
     <Signin
     email={email}
     password={password}
     handleChange={this.handleChange}
     handleSignup={this.handleSignup}
     name={name}
     conformPassword={conformPassword}
     error={error}
     success={success}
   />
   
    return (
      <div>
        
        <header className="flex justify-between items-center fixed top-0 left-0 right-0 p-6 z-10">
          <div className="flex">
            <span className="text-sky-500 font-extrabold text-3xl font-serif">FILMY</span>
            <span className="text-white font-extrabold text-3xl font-serif ml-1">ZILLA</span>
          </div>
          <Link to="/Signin" className='bg-sky-500 p-2 text-white font-bold rounded-lg hover:text-sky-600'>Sign In</Link>
        </header>

        <div className="flex absolute inset-1 mt-14 z-10 flex-col items-center pb-20 pt-6">
          <div className='w-[28rem] h-[35rem] rounded-[1rem] pb-4 bg-black bg-opacity-70'>
            <h1 className="text-3xl mt-10 ml-[5rem] text-white font-bold mb-10">Create New Account</h1>

            {/* input */}
            <div className='flex flex-col mx-20'>
              {error && <div className="bg-red-500 text-white p-2 mb-2 rounded-lg "> {error} </div>}
              {success && <div className="bg-green-500 text-white p-2 mb-2 rounded-lg "> {success} </div>}

              {/* input-1 */}
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                placeholder='Enter name'
                className='p-2 mb-4 bg-black bg-opacity-30 border border-gray-500 text-lg text-white rounded-lg'
              />

              {/* input-2 */}
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder='Email or mobile number'
                className='p-2 mb-4 bg-black bg-opacity-30 border border-gray-500 text-lg text-white rounded-lg'
              />

              {/* input-3 */}
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder='Password'
                className='p-2 mb-4 bg-black bg-opacity-30 border border-gray-500 text-lg text-white rounded-lg'
              />

              {/* input-4 */}
              <input
                type="password"
                name="conformPassword"
                value={conformPassword}
                onChange={this.handleChange}
                placeholder='Confirm Password'
                className='p-2 mb-4 bg-black bg-opacity-30 border border-gray-500 text-lg text-white rounded-lg'
              />

              <button
                type='submit'
                onClick={this.handleSignup}
                className='mt-4 bg-sky-700 text-white w-[18rem] p-2 text-xl font-sans hover:bg-sky-800 rounded-lg'
              >
                Sign up
              </button>

              <p className='text-gray-400 text-sm mt-4 ml-2'>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="img/ms-marvel-season-1_3840x2160.jpg"
            alt='background-img'
            className='w-[100rem] item-center justify-center h-[40rem] brightness-75'
          />
        </div>
      </div>
    );
  }
}
