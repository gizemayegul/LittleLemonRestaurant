
import restaurant from './asset/restaurant.jpg'
 
const Footer = () => {
    return (<>
        <div className="footer-container">
            <div className="footer-item">
                    <img src={restaurant} alt="restaurant"/>
            </div>
            <div className="footer-item">
                    <div>
                        <h3>Doormat Navigation</h3>
                    </div>
                    <div>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order Onlone</li>
                            <li>Login</li>
                    </div>
            </div>
            <div className="footer-item">
                <div>
                    <h3> Contact</h3>
                </div>
                <div>
                    <li>Adres</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </div>
            </div>
            <div className="footer-item">
                <div>
                    <h3> Social Media as</h3>
                </div>
                <div>
                    <li>Instagram</li>
                    <li>Facebook</li>
                </div>
            </div>

        </div>
    </>
       
    );
};

export default Footer;