import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className='border-t-8 border-gray-800'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-7 py-4'>
          <div className='flex flex-col sm:flex-row justify-between w-full'>
            <div className='text-white mb-4 sm:mb-0 sm:mr-6'>
              <h1 className='text-lg font-bold'>View Website in</h1>
              <p>English</p>
              <p>Hindi</p>
            </div>

            <div className='text-white mb-4 sm:mb-0 sm:mr-6'>
              <h1 className='text-lg font-bold'>Company</h1>
              <p>About Us</p>
              <p>Careers</p>
            </div>

            <div className='text-white mb-4 sm:mb-0 sm:mr-6'>
              <h1 className='text-lg font-bold'>Products</h1>
              <p>Our Products</p>
              <p>Pricing</p>
            </div>

            <div className='text-white mb-4 sm:mb-0 sm:mr-6'>
              <h1 className='text-lg font-bold'>Support</h1>
              <p>Contact Us</p>
              <p>FAQs</p>
            </div>

            <div className='text-white mb-4 sm:mb-0'>
              <h1 className='text-lg font-bold'>Follow Us</h1>
              <p>Facebook</p>
              <p>Twitter</p>
            </div>
          </div>
        </div> 
        
        <div className='text-center border-t border-gray-700 pt-4 pb-4 text-white'>
          <p>© 2016 - 2024 Filmyzilla All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}
