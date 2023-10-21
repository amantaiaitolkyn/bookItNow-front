import React, {useState} from "react";
export default function Footer(){
    const [isAgreed, setIsAgreed] = useState(false);
    const handleAgreeToggle = () => {
        setIsAgreed(!isAgreed);
    };
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    <h2>COZYSTAY</h2>
                    <p>
                        Established in 1998, CozyStay Hotel is a boutique hotel in the heart of the Swiss Alps, offering contemporary accommodation and unrivaled access to ski and hiking trails, immersing you in an idyllic setting against pristine skies in search of a truly serene experience.
                    </p>
                </div>
                <div className="footer-contact">
                    <h3>Reach Out</h3>
                    <p>Email: booking@cozystay.com</p>
                    <p>Tel: +41 22 345 66 77</p>
                    <p>Fax: +41 22 345 77 89</p>
                    <p>Rue de Lausanne, 1202 Genève, Switzerland</p>
                    <a href="#">GET DIRECTIONS</a>
                </div>
                <div className="footer-newsletter">
                    <h3>Sign up for newsletter</h3>
                    <input type="text" placeholder="Your Email Address" />
                    <button>Subscribe</button>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <label>
                            <input type="checkbox"  checked={isAgreed} onChange={handleAgreeToggle} />
                            I agree to the Privacy Policy
                        </label>
                    </div>
                </div>
            </div>
            <div className="footer-social">
                <h3>Stay Connected:</h3>
                <ul>
                    <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                    <li><a href="#"><i className="fab fa-pinterest"></i> Pinterest</a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i> YouTube</a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                </ul>
            </div>
            <div className="footer-legal">
                <p>&copy; {new Date().getFullYear()} CozyStay WordPress Theme for Hotel Booking.</p>
            </div>
        </footer>
    )
}