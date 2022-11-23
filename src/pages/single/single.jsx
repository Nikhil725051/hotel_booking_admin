import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/list/list';
import Chart from '../../components/chart/Chart';
import './single.scss'

export default function Single(){
    return(<div className='single'>
    <div className='left'>
        <Sidebar></Sidebar>
    </div>
    <div className='right'>
        <Navbar></Navbar>
        <div className='top'>
           <div className='singleItem'>
            <h3 className='title'>Information</h3>
            <div className='infoWrapper'>
                <img className='userImg' src='https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg'></img>
                <div className='info'>
                    <h2 className='name'>Jane Doe</h2>
                    <p className='email'>Email: Jane@gmail.com</p>
                    <p className='phone'>Phone: 1546485448</p>
                    <p className='address'>Address: New York, USA</p>
                    <p className='country'>Country: USA</p>
                </div>
            </div>
            <span className='edit'>Edit</span>
           </div>

            <Chart></Chart>
        </div>
        <div className='bottom'>
        <List></List>
        </div>
        
    </div>
</div>);
}