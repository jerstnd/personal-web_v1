import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>LOGO</div>
            <div className='navbar-text'>
                <a href='#'>About</a>
                <a href='#'>Portfolio</a>
                <a href='#'>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;