import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Signin extends Component {
    
  constructor()
   {
    super();
    this.state= {
    myNAme :"Nitesh"
    }
   }
  

 handleLOcal(){
  localStorage.setItem("NAme",this.state.myNAme)
  }

  render() {


    return (<div >

        {/* header  */}
        
<header className="flex justify-between items-center fixed top-0 left-0 right-0  p-6 z-10 "> 

<div className="flex ">
  <span className="text-sky-500 font-extrabold text-3xl font-serif">FILMY</span>
  <span className="text-white font-extrabold text-3xl font-serif ml-1">ZILLA</span>
</div>
<Link to="/" className='bg-sky-500 p-2 text-white font-bold rounded-lg hover:bg-sky-600 '>Home</Link>
</header>

        <div className="flex absolute inset-1 mt-24 z-10 flex-col items-center pb-20 pt-6  ">
        <div className='w-[28rem] h-[35rem] pb-4 bg-black bg-opacity-70'>
        <h1 className="text-4xl mt-14 ml-20 text-white font-bold mb-10"
        onClick={()=> this.handleLOcal()} 
        >Sign in</h1>

        {/* input  */}
        
        <div className='flex flex-col mx-20'>

         {/* input-1  */}
        <input type="text" placeholder='Email or mobile number' className='p-2 mb-4 bg-black bg-opacity-30 border border-gray-500 text-lg text-white rounded-lg'/>

         {/* input-2 */}
        <input type="text" placeholder='Password' className='p-2 mb-4 bg-black bg-opacity-30 border border-gray-500 text-lg text-white rounded-lg'/>


        <button className=' mt-4 bg-sky-700 text-white w-[18rem] p-2 text-xl font-sans hover:bg-sky-800 rounded-lg ' >Sign in</button>

        <a href="" className='text-white text-lg m-4 ml-[5rem] hover:text-sky-600 '>Forgot password?</a>
        <p className='ml-2 text-gray-400 '>New to Filmyzilla ? 
            <Link to="/Signup" className='text-white hover:text-sky-600'> Sign up now.</Link></p>
        
        <p className='text-gray-400 text-sm mt-4 ml-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. </p>
        </div>

         </div>
         </div>
          <div>
          <img 
            src="img\ms-marvel-season-1_3840x2160.jpg" 
            alt='background-img' 
            className='w-[100rem] item-center justify-center h-[40rem] brightness-75'/>
        </div>
        </div>
    )
  }
}
