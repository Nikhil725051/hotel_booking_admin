import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss';

export default function Home(){
    return (<div className='home'>
        <div className='left'>
            <Sidebar></Sidebar>
        </div>
        <div className='right'>
            <Navbar></Navbar>
        </div>
    </div>);
}