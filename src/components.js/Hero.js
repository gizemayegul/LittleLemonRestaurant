import React, { Component }  from 'react';


const Hero = () => {
    return (<>
        <div>
            <div className="hero-flex-container">
                <div className="hero-flex-item-1">
                    <h1>Little Lemon </h1>
                    <p>Chicago</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Online Reservation</button>
                </div>
                <div className="hero-flex-item-2">
                    <img src= "restauranfood.jpg" alt="logo"/>
                </div>
                
            </div>
        </div>
            
            
    </>
    );
};

export default Hero;