import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const storedData = JSON.parse(window.localStorage.getItem('isSignup'));

    if (storedData && storedData.email === email && storedData.password === password) {
      window.localStorage.setItem('isSignin', true);
      window.location.href = '/Movies';
    } else {
      alert('Invalid Credentials');
    }
  };

  render() {
    const { email, password } = this.state;
    const { error, success } = this.props;

    return (
      <div>
        {/* Header */}
        <header className="flex justify-between items-center fixed top-0 left-0 right-0 p-6 z-10">
          <div className="flex">
            <span className="text-sky-500 font-extrabold text-3xl font-serif">FILMY</span>
            <span className="text-white font-extrabold text-3xl font-serif ml-1">ZILLA</span>
          </div>
          <Link to="/" className="bg-sky-500 p-2 text-white font-bold rounded-lg hover:bg-sky-600">
            Home
          </Link>
        </header>

        {/* Sign-in Form */}
        <div className="flex absolute inset-1 mt-24 z-10 flex-col items-center pb-20 pt-6">
          <div className="w-[28rem] h-[35rem] pb-4 rounded-[1rem] bg-black bg-opacity-70">
            <h1 className="text-4xl mt-14 ml-20 text-white font-bold mb-10">Sign in</h1>

            {error && <div className="bg-red-500 text-white p-2 mb-2 rounded-lg">{error}</div>}
            {success && <div className="bg-green-500 text-white p-2 mb-2 rounded-lg">{success}</div>}

            {/* Input 1 */}
            <div className="flex flex-col mx-20">
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email or mobile number"
                className="p-2 mb-4 bg-black bg-opacity-30 border border-gray-500 text-lg text-white rounded-lg focus:outline-none"
              />

              {/* Input 2 */}
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Password"
                className="p-2 mb-4 bg-black bg-opacity-30 border border-gray-500 text-lg text-white rounded-lg focus:outline-none"
              />

              <button
                onClick={this.handleSignin}
                className="mt-4 bg-sky-700 text-white w-[18rem] p-2 text-xl font-sans hover:bg-sky-800 rounded-lg"
              >
                Sign in
              </button>

              <Link to="/Forgot" className="text-white text-lg m-4 ml-[5rem] hover:text-sky-600">
                Forgot password?
              </Link>

              <p className="ml-2 text-gray-400">
                New to Filmyzilla? <Link to="/Signup" className="text-white hover:text-sky-600">Sign up now.</Link>
              </p>

              <p className="text-gray-400 text-sm mt-4 ml-2">
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
              </p>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div>
          <img
            src="img/ms-marvel-season-1_3840x2160.jpg"
            alt="background-img"
            className="w-[100rem] item-center justify-center h-[40rem] brightness-75"
          />
        </div>
      </div>
    );
  }
}
