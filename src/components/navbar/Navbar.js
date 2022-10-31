import { Link } from 'react-router-dom';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import './navbar.scss';

export default function Navbar(){
    return (<div className='navbar'>
        <Link className='brand' to='/'>Dashboard</Link>
        <div className='navItems'>
            <div className='navItem'>
                <DarkModeOutlinedIcon className='icon'></DarkModeOutlinedIcon>
            </div>
            <div className='navItem'>
                <NotificationsOutlinedIcon className='icon'></NotificationsOutlinedIcon>
                <span className='counter'>1</span>
            </div>
            <div className='navItem'>
                <ChatBubbleOutlineOutlinedIcon className='icon'></ChatBubbleOutlineOutlinedIcon>
                <span className='counter'>1</span>
            </div>
            <div className='navItem'>
              <img src='https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_960_720.jpg' className='userProfile'></img>
           </div>
            <div className='navItem'>
                <SettingsIcon className='icon'></SettingsIcon>
            </div>
            
        </div>
    </div>);
}