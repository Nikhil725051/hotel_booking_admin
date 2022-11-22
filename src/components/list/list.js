import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './list.scss';



export default function List(){
    const rows = [
        {
          id: 1143155,
          product: "Acer Nitro 5",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Redragon S101",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];
    return (<div className='listWrapper'>
        <h3 className='title'>Latest Transactions</h3>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Transaction Id</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Customer&nbsp;(g)</TableCell>
          <TableCell>Date&nbsp;(g)</TableCell>
          <TableCell>Amount&nbsp;(g)</TableCell>
          <TableCell>Payment Method&nbsp;(g)</TableCell>
          <TableCell>Status&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell
             sx={{
                display: 'flex',
                gap: '5px',
            alignItems: 'center'}}
                >
                    <img className='productImg' src={row.img}></img>
                    <span>{row.product}</span>
                
           
            
            </TableCell>
            <TableCell>{row.customer}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.method}</TableCell>
            <TableCell>
                <span className={row.status==='Approved' ? 'approved' : 'pending'}>
                    {row.status}
                </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer></div>);
}