import React from 'react';
import './home.css'
import Destination from './Destination';
import Trip from './Trip';


const Home = () => {
    return (
        <>
        <div className="hero">
            <img src="https://images.unsplash.com/photo-1572336951067-ba07939a7c24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="heroImg" />
            <div className="hero-text">
                <h1>My Journey My Story</h1>
                <p>Choose Your Favourite Destination</p>
                <a href="/" className='show'>Travel Plan</a>
            </div>
        </div>
        <Destination />
        <Trip />
        
        </>
    )
}



export default Home;