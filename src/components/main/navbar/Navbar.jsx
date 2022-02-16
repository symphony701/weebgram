import './style.css'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faHeart , faBell } from '@fortawesome/free-solid-svg-icons'
import { Search } from './search/Search';
import { Avatar } from './avatar/Avatar';

export function Navbar(){
    return(
        <nav>
            <h1>Weebgram</h1>
            <Search />
            <div className='profile'>
                <Fa icon={faHeart} />
                <Fa icon={faBell} />
                <Avatar />
            </div>
        </nav>
    );
}