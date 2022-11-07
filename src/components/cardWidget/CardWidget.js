import './cardWidget.scss';
import {AccountBalanceWalletOutlined, KeyboardArrowUp} from '@mui/icons-material';

export default function CardWidget({type}){

    var data;

    switch(type){
        case "users":
            data = {
                
            }
    }
    return(<div className='card'>
        <div className='cardItem'>
            <span className='title'>Users</span>
            <div className='progress'>
                <KeyboardArrowUp></KeyboardArrowUp>
                <span>20%</span>
            </div>
        </div>
        <span className='cardItem quantity'>100</span>
        <div className='cardItem'>
            <span>See all users</span>
            <AccountBalanceWalletOutlined className='icon'></AccountBalanceWalletOutlined>
        </div>
    </div>);
}