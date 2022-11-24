import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar'
import './new.scss';
import { DriveFolderUpload } from '@mui/icons-material';


export default function New({inputs, title}) {
    return (<div className='new'>
        <div className='left'>
            <Sidebar></Sidebar>
        </div>
        <div className='right'>
            <Navbar></Navbar>
            <div className='top'>
                <h3>{title}</h3>
            </div>
            <div className='bottom'>
                <div className='itemImgWrapper'>
                    <img className='itemImg' src='https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg'></img>
                </div>
                <form>
                    <div className='formInput'>
                        <label htmlFor='file'>Image: <DriveFolderUpload /></label>
                        <input style={{display: 'none'}} type='file' id='file'></input>
                    </div>
                   {
                    inputs.map((input) => {
                        return(
                            <div key={input.id} className='formInput'>
                            <label>{input.label}</label>
                            <input placeholder={input.placeHolder} name='name'></input>
                        </div>
                        );
                    })
                   }
                   
                    <button>Submit</button>
                </form>
            </div>


        </div>
    </div>);
}