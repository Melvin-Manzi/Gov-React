import "../style/services.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Footer from "./footer";
export default function Service (){
    return(
        <>
        <div className="service">
            <h1 className="exploration">Explore our Online Governmet Services & Resources</h1>
            <p className="exp-cons">Our services are all available to our dear citizens and even immigrants visiting our country, all for free to enhance your experience in Rwanda.</p>
            <div className="new-box">
                <ul className="lists">
                    <li className="lists-item">Apply for Driving License</li>
                    <li className="lists-item one"><Link to="/permission" className='muruhande'>Get Building Permission</Link></li>
                    <li className="lists-item two">Order Birth Certificate</li>
                    <li className="lists-item three">Report Polution</li>
                </ul>
                <button className="discover-more">Discover More</button>
            </div>
        </div>
        <div className="event">
            <h1 className="upcoming">Upcoming Events</h1>
            <div className="inline">
            <div className="first-event">
                <h1 className="first-event-name">Kwita Izina</h1>
                <p className="first-event-date">This September</p>
            </div>
            <div className="second-event">
                <h1 className="second-event-name">Independence Day</h1>
                <p className="second-event-date">1 July</p>
            </div>
            <div className="third-event">
                <h1 className="third-event-name">Liberation Day</h1>
                <p className="third-event-date">4 July</p>
            </div>
            <div className="fourth-event">
                <h1 className="fourth-event-name">Elections Day</h1>
                <p className="fourth-event-date">This July</p>
            </div>
        </div>
        </div>
        <div className="newsletter">
        <div style={{ color: '#ffffff' }} >
      <FontAwesomeIcon icon={['far', 'envelope-open']} className="open-mail"/>
    </div>
            <p className="connected">Stay Connected</p>
            <h1 className="joining">Join Our Newsletter</h1>
            <input type="email" className="join-email" placeholder="Email address"/>
            <button className="subscribe">Subscribe</button>
        </div>
        <footer>
         <Footer />
        </footer>
        </>
    );
}