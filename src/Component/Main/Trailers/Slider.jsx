import React, { Component } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default class Slider extends Component {
  state = {
    movies: [],
    currentIndex: 0,
    loading: true,
    error: null,
  };

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=dca3eb673395664b24c0b77b5e2da6fc&language=en-US&page=1')
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({ movies: jsonResponse.results, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });

      this.auto();
  }


   auto= ()=>  { this.interval = setInterval(this.nextSlide,5000); }

  componentWillUnmount()  {clearInterval(this.interval) }

  nextSlide = () => {
    const { movies, currentIndex } = this.state;
    const nextIndex = (currentIndex + 1) % movies.length;
    this.setState({ currentIndex: nextIndex });
  };

  prevSlide = () => {
    const { movies, currentIndex } = this.state;
    const nextIndex = (currentIndex - 1 + movies.length) % movies.length;
    this.setState({ currentIndex: nextIndex });
  };

  render() {
    const { movies, currentIndex, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="relative w-full h-[35rem] overflow-hidden">
        <div className="flex">
          {movies.map((movie, index) => (<>
            <div
              key={movie.id}
              className={`w-full h-full bg-cover bg-center absolute brightness-[25%] top-0 left-0 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-500`}
              style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
              }}
            />
            <h1
             className={`absolute top-[12rem] left-[20rem] text-5xl font-bold text-white ${index === currentIndex ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
 
            >{movie.title}</h1>

            <h1
             className={`absolute top-72  w-[50rem] left-[20rem] text-2xl font-bold text-white ${index === currentIndex ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} > Overview <br />
             
              <p
              className='text-lg mt-2 h-16 overflow-ellipsis'> {movie.overview} </p> </h1>

           <img
            className={`absolute top-44 left-28 w-[10rem] h-[18rem] ${index === currentIndex ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
           />



            </>))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent shadow-2xl  text-sky-100 px-4 py-2 rounded-md   hover:bg-sky-500"
          onClick={this.prevSlide}
        >
        <ArrowBackIosIcon/>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2  text-sky-100 px-4 py-2 rounded-md shadow-md hover:bg-sky-700"
          
          onClick={this.nextSlide}
          >
          <ArrowForwardIosIcon/>
        </button>
      </div>
    );
  }
}
