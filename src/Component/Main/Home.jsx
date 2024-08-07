import React, { Component } from 'react';

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
    } else if (!email.endsWith('gmail.com')) {
      this.setState({ errorMessage: "Please enter 'gmail.com'" });
    } else if (email.length < 10) {
      this.setState({ errorMessage: "Please enter a valid email" });
    } else {
      window.location.href = '/Signup';
    }
  }

  render() {
    return (
      <div className="bg-black text-white">

        {/* box-1 */}
        <div className="flex absolute inset-x-0 mt-[6.5rem] z-10 flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-glow mb-6">Your Favorite movies, and more.</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-300 mb-6">Watch anywhere. Cancel anytime.</p>
          <p className="text-base sm:text-lg md:text-xl font-bold mb-4 text-gray-300">Ready to watch? Enter your email to create an account.</p>
          <form className="flex flex-col md:flex-row items-center mb-8" onSubmit={(e)=>this.handleSubmit(e)}>
            <input
              type="email"
              maxLength={28}
              placeholder="Email address"
              className="p-2 text-lg sm:text-xl md:text-2xl w-full md:w-[20rem] text-white bg-black bg-opacity-50 rounded-lg border border-gray-500 placeholder-gray-400"
              value={this.state.email}
              onChange={(e)=>this.setState({email: e.target.value})}
            />
            <button type="submit" className="mt-4 md:mt-0 md:ml-3 h-[3.5rem] pt-[.9rem] p-2 text-lg sm:text-xl md:text-2xl text-center rounded-xl bg-sky-600 font-serif hover:bg-sky-700">
              Get Started
            </button>
          </form>
          {this.state.errorMessage && <p className="text-white bg-sky-500 px-4 py-2 rounded">{this.state.errorMessage}</p>}
        </div>

        <div className="border-b-[0.5rem] border-zinc-900">
          <img
            src="img/background.png"
            alt="background-img"
            className="w-full h-[45rem] object-cover brightness-50"
          />
        </div>

        {/* box-2 */}
        <div className="flex flex-col md:flex-row py-[6rem] px-4 md:px-[9rem] border-b-[0.5rem] border-zinc-900 items-center space-y-8 md:space-y-0">
          <img
            src="img/marvels.jpeg"
            alt="Ms. Marvel-img"
            className="w-full md:w-[24rem] h-auto md:h-[16rem] brightness-75 rounded-md shadow-lg hover:cursor-pointer"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">Enjoy Latest Movie</h1>
            <p className="text-lg sm:text-xl md:text-xl text-sky-500 font-bold">
              Watch your favorite movies: Action/Adventure, Romance, Comedy, Horror, Drama, <br />
              Science Fiction, Fantasy, and more.
            </p>
          </div>
        </div>

        {/* box-3 */}
        <div className="flex flex-col md:flex-row items-center py-[6rem] px-4 md:px-[8rem] border-b-[0.5rem] border-zinc-900">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">Watch Upcoming Trailer</h1>
            <p className="text-lg sm:text-xl md:text-xl text-sky-500 font-bold">
              Our website is the best in showing <br />trailers of all upcoming movies.
            </p>
          </div>
          <img
            src="img/upcomingmarveltvmovies.jpg"
            alt="background-img"
            className="w-full md:w-[25rem] h-auto md:h-[15rem] brightness-75 mt-4 md:mt-0"
          />
        </div>

        {/* box-4 */}
        <div className="flex flex-col md:flex-row px-4 md:px-[9rem] py-[6rem] border-b-[0.5rem] border-zinc-900 items-center space-y-8 md:space-y-0">
          <img
            src="img/Marvel-Movies.avif"
            alt="background-img"
            className="w-full md:w-[20rem] h-auto md:h-[15rem] brightness-75 rounded-md shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">Latest Movie Reviews</h1>
            <p className="text-lg sm:text-xl md:text-xl text-sky-500 font-bold">
              Check out movie reviews of Bollywood, Hollywood and Regional movies by Filmyzilla<br />
              You can find both critic reviews and audience reviews and more.
            </p>
          </div>
        </div>

        {/* box-5 */}
        <div className="flex flex-col md:flex-row py-[8rem] px-4 md:px-[9rem] items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">Largest Collection of movie clips</h1>
            <p className="text-lg sm:text-xl md:text-xl text-sky-500 font-bold">
              We've curated the best moments on your favorite Movies <br />
              Scenes, and more.
            </p>
          </div>
          <img
            src="img/mcu-rewatch.avif"
            alt="background-img"
            className="w-full md:w-[20rem] h-auto md:h-[15rem] brightness-75 mt-4 md:mt-0"
          />
        </div>

        {/* membership plans */}
        <div className="px-4 md:px-[9.5rem]">
          <h1 className="text-xl md:text-2xl p-2 bg-sky-900 text-center">Prime membership plans</h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 mb-10 text-center md:text-left">
            Customers can join Prime with a flexible plan, <br />
            enabling customers to choose between a monthly plan at $12.99 per<br />
            month or an annual plan at $119 per year. Eligible customers can
            try Prime with a 30-day free trial.
          </p>

          <div className="flex flex-col md:flex-row mt-14 mb-16 space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-sky-900 p-4 flex-1">
              <h1 className="text-yellow-600 font-bold text-lg md:text-xl">Prime monthly - ₹150.99/month</h1>
              <p className="text-lg md:text-xl">Prime Video</p>
              <p className="text-base md:text-lg">• Ad-free music streaming<br />
                • Unlimited photo storage<br />
                • Unlimited reading </p>
            </div>

            <div className="bg-sky-900 p-4 flex-1">
              <h1 className="text-yellow-600 font-bold text-lg md:text-xl">Prime yearly - ₹1,500/year</h1>
              <p className="text-lg md:text-xl">Prime Video</p>
              <p className="text-base md:text-lg">• Ad-free music streaming<br />
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
