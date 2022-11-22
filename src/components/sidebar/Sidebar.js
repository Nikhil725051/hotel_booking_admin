import './sidebar.scss';
import {DashboardOutlined,
        PersonOutlineOutlined,
        StoreOutlined,
        CreditCardOutlined,
        LocalShipping,
        Poll,
        NotificationsOutlined,
        SettingsApplications,
        AccountBox,
        Logout

        } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar(){
    return (<div className='sidebar'>
        <div className='top'>
            <Link className='logo' to='/'>LOGO</Link>
        </div>
        <div className='center'>
         <ul>
             <p className='title'>Main</p>
             <li>
             <DashboardOutlined className='icon'></DashboardOutlined>
             <span>Dashboard</span>
             </li>
             <p className='title'>Lists</p>
             <Link style={{textDecoration: "none"}} to='/users'>
             <li>
             <PersonOutlineOutlined className='icon'></PersonOutlineOutlined>
              <span>Users</span>
             </li>
             </Link>
             <Link style={{textDecoration: "none"}} to='/'>
             <li>
             <StoreOutlined className='icon'></StoreOutlined>
              <span>Products</span>
             </li>
             </Link>
             <Link style={{textDecoration: "none"}} to='/'>
             <li>
             <CreditCardOutlined className='icon'></CreditCardOutlined>
              <span>Orders</span>
             </li>
             </Link>
             <Link style={{textDecoration: "none"}} to='/'>
             <li>
             <LocalShipping className='icon'></LocalShipping>
              <span>Delivery</span>
             </li>
             </Link>
             <p className='title'>Useful</p>
             <Link style={{textDecoration: "none"}} to='/'>
             <li>
             <Poll className='icon'></Poll>
              <span>Stats</span>
             </li>
             </Link>
             <Link style={{textDecoration: "none"}} to='/'>
             <li>
             <NotificationsOutlined className='icon'></NotificationsOutlined>
              <span>Notifications</span>
             </li>
             </Link>
             <p className='title'>Service</p>
             <Link style={{textDecoration: "none"}} to='/'>
             <li>
             <SettingsApplications className='icon'></SettingsApplications>
              <span>Logs</span>
             </li>
             </Link> 
             <Link style={{textDecoration: "none"}} to='/'>
             <li>
             <SettingsApplications className='icon'></SettingsApplications>
              <span>Settings</span>
             </li>
             </Link>
             <p className='title'>User</p>
             <Link style={{textDecoration: "none"}} to='/'>
             <li>
             <AccountBox className='icon'></AccountBox>
              <span>Profile</span>
             </li>
             </Link>
             <Link style={{textDecoration: "none"}} to='/'>
             <li>
             <Logout className='icon'></Logout>
              <span>Logout</span>
             </li>
             </Link>
         </ul>
       </div>
        <div className='bottom'>
          <button className='themeBtn dark'></button>
          <button className='themeBtn light'></button>
        </div>
    </div>);
}