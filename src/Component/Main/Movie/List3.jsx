import React, { Component } from 'react';
import './Slider.css'; 

export default class List1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=dca3eb673395664b24c0b77b5e2da6fc&language=en-US&page=1')
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({ movies: jsonResponse.results });
            });
    }

    render() {
        const { movies } = this.state;

        return (
            <>
                {/* High Rated Movies */}

                <div className=" overflow-hidden px-19 mb-20 ">
                    <h2 className="text-2xl font-bold text-center shadow-md shadow-cyan-300 mx-20 my-10 py-1 bg-gray-800 text-white"> High Rated Movies </h2>
                    <div className=" flex space-x-4 overflow-x-scroll  movie-slider ">
                        {movies.length > 0 ? (
                            movies.map((movie) => (
                                    <a href=''>
                                <div key={movie.id} className=" bg-slate-950 rounded-lg shadow-md h-[20rem] hover:shadow-sky-100 p-4 min-w-[200px]">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-[10rem] h-[12rem] object-cover rounded-md"
                                    />
                                  <h3 className="text-lg font-semibold mt-2 text-sky-400">Name : <p className=' hover:text-sky-400 text-white'>{movie.title} </p> </h3>
                                    <p className="text-sm text-gray-400">Release Date :{movie.release_date}</p>
                                </div>
                                 </a>
                            ))
                        ) : (
                            <p className="text-white">Loading movies...</p>
                        )}
                    </div>
                </div>
            </>
        );
    }
}
