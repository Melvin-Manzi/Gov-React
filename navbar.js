import "../style/navbar.css";
import { Link } from 'react-router-dom';
import Login from './login';
export default function Navbar(){
    return(
        <div className="navbar">
        <h1 className="name">govManager</h1>
        <ul className="list">
            <li className="list-item">Home</li>
            <li className="list-item">Services</li>
            <li className="list-item">Events</li>
        </ul>
        <button className="log-in"><Link to="/login" className="log">Log in</Link></button>
        <button className="register"><Link to="/apps" className="registers">Register</Link></button>
   
        </div>
    );
}