import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router'

const Protect = (props) => {
    const { Component } = props;
    const [isok ,setOk] = useState(true);
 
    useEffect(() =>{
        let Signin = localStorage.getItem('isSignin');

        if(!Signin) { setOk(false)}} ,[]);

        if (!isok) {
            return <Navigate to="/Signin" />;
          }
        
           
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protect;
