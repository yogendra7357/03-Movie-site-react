import React, { Component } from 'react';

export default class Error extends Component {
  render() {
    return (
      <div className='w-[100px] mt-40 h-[100px]'>
        <img src="/img/error-img.jpg" alt="sorry bro this is error" className='text-white' />
      </div>
    );
  }
}
