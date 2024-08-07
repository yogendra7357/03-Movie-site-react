
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
     
        const data = JSON.parse(window.localStorage.getItem("isSignup"))

    
        if (data && data.email === email) 
        {setTimeout(() => {
            console.log('Form data', email);
            setMessage('Password reset link sent to your email');
            }, 500);
            setTimeout(()=>{
          window.location.href = "/Signin"},2000)
        }
        else  {
            setError('Invalid email address');
           
        }
        
    };

    return (<>
    <header className="flex justify-between items-center fixed top-0 left-0 right-0 p-6 z-10">
          <div className="flex">
            <span className="text-sky-500 font-extrabold text-3xl font-serif">FILMY</span>
            <span className="text-white font-extrabold text-3xl font-serif ml-1">ZILLA</span>
          </div>
          <Link to="/Signin" className='bg-sky-500 p-2 text-white font-bold rounded-lg hover:bg-sky-700'>
            Sign In
          </Link>
        </header>


        <div className="flex justify-center items-center h-screen bg-gray-100">
            
            <div className="w-full absolute z-20 max-w-md p-8 space-y-3 rounded-xl bg-black bg-opacity-70 shadow-lg">
                <h1 className="text-2xl text-white font-bold text-center">Forgot Password</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-[2px] focus:ring-sky-600 bg-transparent text-white"
                            required
                        />
                        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
                        {message && <div className="text-green-300  rounded-xl text-sm mt-1">{message}</div>}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium text-white bg-sky-600 rounded-md hover:bg-sky-700 focus:outline-none "
                        >
                            Send Reset Link
                        </button>
                    </div>
                </form>
            </div>

        <div>
          <img
            src="img/ms-marvel-season-1_3840x2160.jpg"
            alt="background-img"
            className="w-[100rem] item-center justify-center h-[40.1rem] brightness-75"/></div>

        </div>
        </>);
};

export default Forgot;
