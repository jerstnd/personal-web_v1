import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 37){
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div className='navbar-logo'>Jeremy Rustandi</div>
            <div className='navbar-text'>
                <a href='#'>About</a>
                <a href='#'>Portfolio</a>
                <a href='#'>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;