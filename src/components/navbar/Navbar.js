import React, { useState, Component } from 'react';
import './Navbar.scss';
import {Link} from 'react-scroll'


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
            <div className='navbar-logo'><Link to='landing' offset={-80} smooth>Jeremy Rustandi</Link></div>
            <div className='navbar-text'>
                <Link to='box' spy={true} smooth={true} offset={-200}><a href='#'>About</a></Link>
                <Link to='portfolio' spy={true} smooth={true} offset={-57}><a href='#'>Portfolio</a></Link>
                <Link to='contact' spy={true} smooth={true} offset={-75}><a href='#'>Contact</a></Link>
            </div>
        </div>
    );
}

export default Navbar;