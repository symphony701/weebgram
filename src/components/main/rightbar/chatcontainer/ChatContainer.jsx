import './style.css'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faUserNinja, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
export function ChatContainer() {
    return (
        <div className="chat-container">
            <div className="chats">
                <div className="no-select">
                    <div className="icon-noselect">
                        <Fa icon={faUserNinja} />
                    </div>
                    <h4>Select a tomodachi to start chatting :3</h4>
                </div>
            </div>
            <div className="input-chat">
                <input type="text" className="form-control" placeholder="Type a message..." />
                <div className="send-message">
                    <Fa icon={faPaperPlane} />
                </div>
            </div>
        </div>
    );
}