import React, { Component } from 'react';

export default class Clips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=dca3eb673395664b24c0b77b5e2da6fc')
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

                <div className='mt-24 ml-[7.8rem] w-[20rem] font-serif  text-center  text-3xl bg-gray-800 text-sky-600'>
                    <h1>New Latest Movies</h1>
                </div>
                <div className="flex flex-wrap justify-center px-24 py-6 text-white">
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            
                            <div className='bg-slate-950 pl-6 p-2 m-2 h-[21rem] w-[13rem] md:text-left ' key={movie.id}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                                    alt={movie.title} 
                                    className='h-[15rem]' 
                                />
                                <h1 className='mt-4 text-sm'>Name: {movie.title}</h1>
                                <p className='text-sky-400 text-xs'>Release Date: {movie.release_date}</p>
                                {/* <p className='overflow-scroll h-[30px]'>Overview: {movie.overview}</p> */}
                            </div>

                            // populer movies
                            
                        ))
                    ) : (
                        <p>Loading movies...</p>
                    )}
                </div>
            </>
        );
    }
}
