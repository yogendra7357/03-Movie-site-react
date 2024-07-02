import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import withRouter from './Home';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errorMessage: "",
    };
  }


  handleSubmit = (e) => {
    e.preventDefault();
   
    const { email } = this.state;

    if (!email) {
      this.setState({ errorMessage: "Please fill email" });
    } 

    else if (!email.endsWith('gmail.com')) {

      this.setState({ errorMessage: "Please enter'gmail.com'" });
    }
     else if (!email.split("").length>=10)
      {
      this.setState({errorMessage: "Please enter limited world"})
  
    }
    
  
    else {

      window.location.href = '/Signup';
    }
    
  }
    
  

  render() {

    return (
      <div className="bg-black text-white">

        {/* box-1 */}
        <div className="flex absolute inset-1 mt-[6.5rem] z-10 flex-col items-center justify-center h-full text-center">
          <h2 className="text-6xl ml-2 font-bold animate-glow mb-6">Your Favorite movies, and more.</h2>
          <p className="text-2xl font-bold text-gray-300 mb-6">Watch anywhere. Cancel anytime.</p>
          <p className='text-lg font-bold mb-4 text-gray-300'>Ready to watch? Enter your email to create an account.</p>
          <form className="flex mb-8" onSubmit={(e)=>this.handleSubmit(e)}>
            <input
              type="email"
              maxLength={28}
              placeholder="Email address"
              className="p-1 text-2xl w-[20rem] text-white bg-black bg-opacity-50 rounded-lg border border-gray-500 placeholder-gray-400"
              value={this.state.email}
              onChange={(e)=>this.setState({email: e.target.value})}
            
            />
          
            <button type="submit" className="h-[3.5rem] pt-[.9rem] p-2 ml-3 text-xl text-center rounded-xl bg-sky-600 font-serif hover:bg-sky-700">
              Get Started
            </button>
          </form>
          {this.state.errorMessage && <p className="text-white bg-sky-500 mr-32 mb-8 p-1">{this.state.errorMessage}</p>}
        </div>

        <div className='border-b-[0.5rem] border-zinc-900'>
          <img
            src="img/background.png"
            alt='background-img'
            className='w-[100rem] h-[45rem] brightness-50' />
        </div>

        {/* box-2 */}
        <div className='flex py-[9rem] px-[9rem] pl-[8rem] border-b-[0.5rem] border-zinc-900 items-center space-y-8'>
          <img
            src="img/marvels.jpeg"
            alt="Ms. Marvel-img"
            className="w-[24rem] h-[16rem] ml-20 brightness-75 rounded-md shadow-lg hover:cursor-pointer"
          />
          <div className='text-center ml-24 pr-20 md:text-left'>
            <h1 className='text-white font-bold text-4xl mb-4'>Enjoy Latest Movie</h1>
            <p className='text-sky-500 text-xl font-bold'>
              Watch your favorite movies: Action/Adventure, Romance, Comedy, Horror, Drama, <br />
              Science Fiction, Fantasy, and more.
            </p>
          </div>
        </div>

        {/* box-3 */}
        <div className='flex items-center py-[9rem] px-[8rem] border-b-[0.5rem] border-zinc-900'>
          <div className='ml-[5rem] text-center'>
            <h1 className='text-white font-bold text-4xl'>Watch Upcoming Trailer</h1>
            <p className='text-sky-500 text-xl font-bold'>
              Our website is the best in showing <br />trailers of all upcoming movies.
            </p>
          </div>
          <img
            src="img/upcomingmarveltvmovies.jpg"
            alt='background-img'
            className='w-[25rem] h-[15rem] ml-[8rem] brightness-75'
          />
        </div>

        {/* box-4 */}
        <div className='flex px-[9rem] py-[8rem] border-b-[0.5rem] border-zinc-900 items-center space-y-8'>
          <img
            src="img/Marvel-Movies.avif"
            alt='background-img'
            className='w-[20rem] h-[15rem] brightness-75 rounded-md shadow-lg'
          />
          <div className='text-center ml-28 md:text-left'>
            <h1 className='text-white font-bold text-4xl mb-4'>
              Latest Movie Reviews
            </h1>
            <p className='text-sky-500 text-xl font-bold'>
              Check out movie reviews of Bollywood, Hollywood and Regional movies by Filmyzilla<br />
              You can find both critic reviews and audience reviews and more.
            </p>
          </div>
        </div>

        {/* box-5 */}
        <div className='flex py-[10rem] items-center px-[9rem]'>
          <div className='text-center'>
            <h1 className='text-white font-bold text-4xl mb-4'>Largest Collection of movie clips</h1>
            <p className='text-sky-500 text-xl font-bold'>
              We've curated the best moments on your favorite Movies <br />
              Scenes, and more.
            </p>
          </div>
          <img
            src="img/mcu-rewatch.avif"
            alt='background-img'
            className='w-[20rem] h-[15rem] ml-28 brightness-75'
          />
        </div>

        {/* membership plans */}
        <div className=''>
          <h1 className='ml-[9.5rem] text-2xl w-[18rem] p-2 bg-sky-900'>Prime membership plans</h1>
          <p className='ml-[9.5rem] mb-10 text-xl mt-4'>Customers can join Prime with a flexible plan, <br />
            enabling customers to choose between a monthly plan at $12.99 per<br />
            month or an annual plan at $119 per year. Eligible customers can
            try Prime with a 30-day free trial.</p>

          <div className='ml-[9.5rem] flex mt-14 mb-16 mr-[4rem]'>
            <div className='bg-sky-900 p-4'>
              <h1 className='text-yellow-600 font-bold text-xl'>Prime monthly - ₹150.99/month</h1>
              <p className='text-xl'>Prime Video</p>
              <p className='text-lg'>• Ad-free music streaming<br />
                • Unlimited photo storage<br />
                • Unlimited reading </p>
            </div>

            <div className='bg-sky-900 ml-32 p-4'>
              <h1 className='text-yellow-600 font-bold text-xl'>Prime monthly - ₹1,500/year</h1>
              <p className='text-xl'>Prime Video</p>
              <p className='text-lg'>• Ad-free music streaming<br />
                • Unlimited photo storage<br />
                • Unlimited reading </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;