
import { Link } from "react-router-dom";
 
const Footer = () => {
    return (<>
        <div className="footer-container">
            <div className="footer-item">
                <figure >
                    <img src="restaurant.jpg" alt="restaurant"/>
                </figure>
            </div>
            <div className="footer-item">
                <nav>

                
                    <div>
                        <h3>Doormat Navigation</h3>
                    </div>
                    <div>
                            <li><Link>Home</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link >Menu</Link></li>
                            <li><Link >Reservations</Link></li>
                            <li><Link>Order Onlone</Link></li>
                            <li><Link>Login</Link></li>
                    </div>
                </nav>
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
                    <h3> Social Media Links</h3>
                </div>
                <div>
                    <li><Link>Instagram</Link></li>
                    <li><Link>Facebook</Link></li>
                </div>
            </div>

        </div>
    </>
       
    );
};

export default Footer;