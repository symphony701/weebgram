import './style.css'
import { FriendList } from './friendlist/FriendList';
import { ChatContainer } from './chatcontainer/ChatContainer';
export function Rightbar(){
    return(
        <div className="rightbar"> 
            <FriendList />
            <ChatContainer />
        </div>
    );
}