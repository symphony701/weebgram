import './style.css'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export function Search() {
    return (
        <div className="search">
            <div className="icon">
                <Fa icon={faSearch} />
            </div>
            <input type="text" />
        </div>
    );
}