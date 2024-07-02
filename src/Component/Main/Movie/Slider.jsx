import React, { Component } from 'react';
import './Slider.css'; 

export default class Slider extends Component {
  state = {
    movies: [],
  };
      componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=dca3eb673395664b24c0b77b5e2da6fc&language=en-US&page=1')
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({ movies: jsonResponse.results });
            });
    }

  render() {
    const { movies } = this.state;

    return (
      <div className="movie-slider mt-20 overflow-hidden">
        
        <div className="flex space-x-4 overflow-x-scroll">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-item bg-slate-950 rounded-lg shadow-md p-4">
             
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
              <p className="text-sm text-gray-600">{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


