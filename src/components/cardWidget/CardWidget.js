import './cardWidget.scss';
import {
    AccountBalanceWalletOutlined,
    KeyboardArrowUp,
    PersonOutlineOutlined,
    ShoppingCartOutlined,
    MonetizationOnOutlined,
} from '@mui/icons-material';

export default function CardWidget({type}){

    var data;

    switch (type) {
        case "users":
            data = {
                title: "Users",
                counter: "100",
                cardAction: "See all users",
                progress: 20,
                icon: <PersonOutlineOutlined
                 className='icon'
                 style={
                    {
                        color: "red",
                        backgroundColor: "rgb(255 0 0 / 26%)" 
                    }
                 }>
                 </PersonOutlineOutlined>
            }
            break;
        case "orders":
            data = {
                title: "Orders",
                counter: "100",
                cardAction: "View all orders",
                progress: 20,
                icon: <ShoppingCartOutlined
                 className='icon'
                 style={
                    {
                        color: "gold",
                        backgroundColor: "#ffd7004f" 
                    }
                 }>
                 </ShoppingCartOutlined>
            }
            break;
        case "earnings":
            data = {
                title: "Earnings",
                counter: "$100",
                cardAction: "View net earnings",
                progress: 20,
                icon: <MonetizationOnOutlined
                 className='icon'
                 style={
                    {
                        color: "green",
                        backgroundColor: "rgba(0, 128, 0, 0.315)" 
                    }
                 }>
                 </MonetizationOnOutlined>
            }
            break;
        case "balance":
            data = {
                title: "Balance",
                counter: "$100",
                cardAction: "See details",
                progress: 20,
                icon: <AccountBalanceWalletOutlined
                 className='icon'
                 style={
                    {
                        color: "purple",
                        backgroundColor: "rgba(128, 0, 128, 0.375)" 
                    }
                 }
                 >
                 </AccountBalanceWalletOutlined>
            }
            break;
    }
    return(<div className='card'>
        <div className='cardLeft'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.counter}</span>
            <span className='cardAction'>{data.cardAction}</span>
        </div>
       
        <div className='cardRight'>
           <div className='progress'>
                <KeyboardArrowUp></KeyboardArrowUp>
                <span>{data.progress}%</span>
            </div>
            {data.icon}
        </div>
    </div>);
}