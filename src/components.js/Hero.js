import React from 'react';
import restauranfood from './asset/restauranfood.jpg'


const Hero = () => {
    return (
        <div className='hero-container' id="home">
            <div className='hero-texts'>
                <h1>Little Lemon </h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Online Reservation</button>
            </div>
            <div className='hero-image'>
                <img src={restauranfood} alt="logo" />
            </div>

        </div>

    );
};

export default Hero;