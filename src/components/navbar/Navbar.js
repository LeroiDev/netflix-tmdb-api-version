import React, { useEffect, useState } from 'react'
import netflixLogo from '../../img/netflix-logo.png';
import profileLogo from '../../img/profile-logo.png';
import './navbar.css'

const Navbar = () => {
    const [show,setShow] = useState(false);

  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(window.scrollY > 100){
            setShow(true);
        }
        else{
          setShow(false);
        }
      })
      return () =>  window.removeEventListener('scroll');
  },[])

  return (
    <nav className={`nav ${show && "nav__scroll"}`}>
      <img className="nav__logo"  src={netflixLogo} alt="NETFLIX"/>
      <img className="nav__avatar"  src={profileLogo} alt="profile logo"/>

    </nav>
  )
}

export default Navbar
