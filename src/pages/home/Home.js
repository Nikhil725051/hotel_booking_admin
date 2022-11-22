import CardWidget from '../../components/cardWidget/CardWidget';
import Chart from '../../components/chart/Chart';
import FeaturedChart from '../../components/featuredChart/FeaturedChart';
import List from '../../components/list/list';
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
            <div className='top'>
                <CardWidget type={"users"}></CardWidget>
                <CardWidget type={"orders"}></CardWidget>
                <CardWidget type={"earnings"}></CardWidget>
                <CardWidget type={"balance"}></CardWidget>
            </div>
            <div className='charts'>
                <FeaturedChart></FeaturedChart>
                <Chart></Chart>
            </div>
            <div className='list'>
            <List></List>
            </div>
            
        </div>
    </div>);
}