 
import React, { Component }  from 'react';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-item">
                <div className="about-description">
                    <h1>Little Lemon</h1>
                </div>
                <div>
                    <h2>Chicago</h2>
                </div>
                <div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
            </div>
            <div className="about-item1">
                    <img className="about-image" src="CHEFS.jpg" alt="chefs"/>
                    <img className="about-image1" src=" CHEF.jpg" alt="chef"/>
                    
            </div>            
        </div>
    );
};

export default About;