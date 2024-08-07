import React, { Component } from 'react';
import List1 from './List1';
import List2 from './List2';
import List3 from './List3';
import Slider from '../Movie/Slider';
import "../../../ComponentsCSS/Trailers.css"


export default class Trailers extends Component {


    
    render() {
        
        return (
            <>
           <Slider />
           <div className="mr-[10 rem] ml-[10 rem] ">
           <List1/>
           <List2/>
           <List3/>
           </div>
            </>
        );
    }
}
