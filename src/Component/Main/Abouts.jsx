import React, { Component } from 'react';

export default class Abouts extends Component {
  render() {
    return (
      <div>
        <div className='mt-12 p-8'>
          <h1 className='text-white text-3xl font-bold text-center mt-12'>About | Filmyzilla</h1>
          <h1 className='text-white text-2xl font-bold mt-12'>About Us</h1>
          <p className='text-white mt-4'>Filmyzilla is a Movie Site. We offer over 1 lakh+ hours of exciting content: movies, Movie Clips, trailers for your viewers.<br/> Explore the best studios in the world and enjoy your favorites with a highly optimized, world-class video streaming experience. <br/> Simply log in with your Filmyzilla ID and Password to get started. <br/>
            <br/>
            Watch back-to-back episodes of your favorite serials, movies, international Movie Clips, <br/>
            interesting clips, and more on your web browser!  Enjoy and browse through Hindi and English content.</p>
        </div>

        <div className='pl-8 pr-8'>
          <h1 className='text-white text-2xl font-bold mt-4'>For the love of Movies</h1>
          <p className='text-white mt-8'>There's something for everyone. Filmyzilla offers a vast library of movies across genres (romance, animation, action, comedy, thriller, drama, documentaries, biographies, history, mystery, etc.) to choose from. You can find releases as recent as 2021 and classic films from the 60s and 70s.</p>
        </div>

        <div className='pl-8 pr-8 mt-2'>
          <h1 className='text-white text-2xl font-bold mt-6'>Clips & trailers</h1>
          <p className='text-white mt-8'>Interesting and Unseen-Undekha Video clips from your favorite reality shows like Bigg Boss, Khatron Ke Khiladi, Splitsvilla to fill your day with humor, drama, and more fun. Catch glimpses of upcoming movies and the latest trailers for 'Bhuj', 'Suryavanshi', 'Laxmi', 'Padmavat', '12 Years a Slave', and more.</p>
        </div>

        <div className='p-8'>
          <h1 className='text-white text-2xl font-bold mt-8'>With Filmyzilla, you'll never get bored!</h1>
          <ul className='text-white mt-8 list-disc pl-8'>
            <li>Chromecast support to watch your favorite movies & shows on TV.</li>
            <li>Picture-in-Picture mode for multitasking.</li>
            <li>Customized Viewing Experience with adjustable Playback Speed & brightness.</li>
            <li>Explore behind-the-scenes trivia of your favorite movies with Xtras feature.</li>
            <li>Resume watching from where you left off across any compatible device.</li>
            <li>Choose the video quality according to your preference.</li>
            <li>Watch movies and browse the app simultaneously with a draggable player.</li>
            <li>Auto-Play feature to keep up with the trend.</li>
            <li>Also available on the web: <a href='https://www.Filmyzilla.com' className='text-blue-300'>www.Filmyzilla.com</a></li>
            <li>Multiple audio support also available on Filmyzilla web.</li>
          </ul>
        </div>
      </div>
    );
  }
}
