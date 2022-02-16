import './style.css'
import { Navbar } from './navbar/Navbar'
import { Rightbar } from './rightbar/Rightbar';
import { Leftbar } from './leftbar/Leftbar';
import { Center } from './center/Center';

export function Weebgram(){
    return (
        <div className="container-weebgram">
            <Navbar />
            <div className='weebgram-content'>
                <Leftbar />
                <Center />
                <Rightbar />
            </div>
        </div>
    );
}