import './style.css';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faUserCircle , faBullhorn,faStar,faSlidersH } from '@fortawesome/free-solid-svg-icons'

export function Leftbar() {
    return (
        <div className="leftbar">

            <ul>
                <li><div className="icon"><Fa icon={faUserCircle} /></div> Profile</li>
                <li><div className="icon"><Fa icon={faBullhorn} /></div>Top Anime</li>
                <li><div className="icon"><Fa icon={faStar} /></div>Top Discussions</li>
                <li><div className="icon"><Fa icon={faSlidersH} /></div>Settings</li>
            </ul>
        </div>
    );
}