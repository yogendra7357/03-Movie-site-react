import React, { Component } from 'react';

export default class List3 extends Component {
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

                <div className=" overflow-hidden px-20 mb-20">
                    <h2 className="text-2xl font-bold text-center mx-20 my-10 shadow-md shadow-cyan-300 py-1 bg-gray-800 text-white">High Rated Movies</h2>
                    <div className=" flex space-x-4 overflow-x-scroll movie-slider ">
                        {movies.length > 0 ? (
                            movies.map((movie) => (
                                    <a href=''>
                                <div key={movie.id} className=" bg-slate-950 rounded-lg h-[21rem]  shadow-sm  my-1 hover:shadow-sky-100 p-4 min-w-[200px]">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-[10rem] h-[15rem] object-cover rounded-md"
                                    />
                                  <h3 className="text-sm font-semibold mt-2 text-white">Name : <h className='text-white hover:text-sky-400 '>{movie.title} </h></h3>
                                    <p className="text-xs text-gray-400"> Release Date :{movie.release_date}</p>
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
