 import Chef1 from './asset/CHEF.jpg';
 import Chef2 from './asset/CHEFS.jpg'
 
const About = () => {
    return (
        <div className='about-container' id='about'> 
            <div className="about-items">
                <div className="about-description">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
            </div>
            <div className="about-2">
                    <img className="about-image1" src={Chef2} alt="chef"/>
                    <img className="about-image" src={Chef1} alt="chefs"/>
                    
                    
            </div>            
        </div>
    );
};

export default About;