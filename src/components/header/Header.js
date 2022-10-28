import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faBell, faMessage} from '@fortawesome/free-solid-svg-icons';
import './header.css';

export default function Header(){
    return (<div className='header'>
        <Link className='brand' to='/'>LuxuryBookingAdmin</Link>
        <div className='headerIcons'>
            <FontAwesomeIcon className='headerIcon' icon={faMoon}></FontAwesomeIcon>
            <FontAwesomeIcon className='headerIcon' icon={faBell}></FontAwesomeIcon>
            <FontAwesomeIcon className='headerIcon' icon={faMessage}></FontAwesomeIcon>
        </div>
    </div>);
}