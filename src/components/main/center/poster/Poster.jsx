import './style.css';
import { AvatarPoster } from '../avatarposter/AvatarPoster';
export function Poster() {
    return (
        <div className="poster-container">
            <AvatarPoster />
            <div className="input-container" >
                <input
                    type="text"
                    placeholder="What does your waifu say to your heart?"
                    disabled
                />
            </div>
        </div>
    );
}