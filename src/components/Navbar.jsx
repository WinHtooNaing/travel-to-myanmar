import './navbar.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [clicked , setClicked] = useState(false);

    const handleClick = () => {
        setClicked((current) => !current)
    }
    
    

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Traveling to Myanmar </h1>

            <div className="menu-icons" >
                <i onClick={handleClick} className={
                    clicked ? "fas fa-times" : "fas fa-bars"
                } ></i>
            </div>

            <ul className={
                clicked ? "nav-menu active" : "nav-menu"
            }>
                <li>
                    <Link to="/" className='nav-links'><i className="fa-solid fa-house-user"></i>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='nav-links'><i className="fa-solid fa-circle-info"></i>About</Link>
                </li>
                <li>
                    <Link to="/service" className='nav-links'><i className="fa-solid fa-briefcase"></i>Blog</Link>
                </li>
                <li>
                    <Link to="/contact" className='nav-links'><i className="fa-solid fa-address-book"></i>Contact</Link>
                </li>
                <li>
                    <Link to="/photo" className="nav-links-mobile">Photo</Link>
                </li>
                <Link to='/photo'  style={{textDecoration:"none", color: "#2a2a2a"}}><button>Photos</button></Link>

            </ul>
        </nav>
    )
}


export default Navbar;