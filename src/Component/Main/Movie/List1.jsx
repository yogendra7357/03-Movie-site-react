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
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=dca3eb673395664b24c0b77b5e2da6fc&language=en-US&page=2')
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({ movies: jsonResponse.results });
            });
    }

    render() {
        const { movies } = this.state;

        return (
            <>
                {/* New Latest Movies */}
               
                <div className=" overflow-hidden px-20">
                    <h2 className="text-2xl font-bold text-center mx-20 my-10 py-1 shadow-md shadow-cyan-300 bg-gray-800 text-white">New Latest Movies</h2>
                    <div className=" flex space-x-4 overflow-x-scroll movie-slider ">
                        {movies.length > 0 ? (
                            movies.map((movie) => (
                                <a href=''>
                                <div key={movie.id} className=" bg-slate-950 shadow-md h-[20rem] mt-4 mb-4 hover:shadow-sky-100 rounded-lg p-5 overflow-hidden min-w-[200px]">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-[10rem] h-[12rem] object-cover rounded-md"
                                    />
                                  <h3 className="text-base font-semibold hover:text-sky-400 mt-2 text-white">Name : <p className='text-white'> {movie.title} </p> </h3>
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
