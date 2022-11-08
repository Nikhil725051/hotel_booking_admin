import { MoreVertOutlined } from '@mui/icons-material';
import {CircularProgressbar} from 'react-circular-progressbar';
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
          <h2>$420</h2>
        </div>
    </div>);
}