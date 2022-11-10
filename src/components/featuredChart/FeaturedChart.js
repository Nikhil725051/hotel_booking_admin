import { KeyboardArrowDown, MoreVertOutlined } from '@mui/icons-material';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './featuredChart.scss'



export default function FeaturedChart(){

    const percentage = 66;
    return(<div className='featuredChart'>
        <div className='featuredChartTop'>
            <h3 className='title'>Total Revenue</h3>
            <MoreVertOutlined className='icon'></MoreVertOutlined>
        </div>
        <div className='progressBar'>
          <CircularProgressbar value={percentage} text={`${percentage}%`}></CircularProgressbar>
          <h3 className='chartText'>Total sales made today</h3>
          <h1 className='totalSales'>$420</h1>
        </div>
        <p className='transactionPara'>Previous transactions processing. Last payments may not be included</p>
        <div className='statsWrapper'>
            <div className='stats'>
                <h3 className='statsTitle'>Target</h3>
                <span><KeyboardArrowDown></KeyboardArrowDown>$12.4k</span>
            </div>
            <div className='stats'>
                <h3 className='statsTitle'>Last week</h3>
                <span><KeyboardArrowDown></KeyboardArrowDown>$12.4k</span>
            </div>
            <div className='stats'>
                <h3 className='statsTitle'>Last month</h3>
                <span><KeyboardArrowDown></KeyboardArrowDown>$12.4k</span>
            </div>
        </div>
    </div>);
}