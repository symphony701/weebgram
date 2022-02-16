import './style.css'
import moment from "moment";
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

export function Post({ data }) {
    const {
        _id,
        createAt,
        nComments,
        nLikes,
        nickname,
        profile_image,
        text,
        userId,
        image,
    } = data;
    return (
        <div className="post">
            <div class="top-post">
                <p class="name">{nickname}</p>
                <p class="time">{moment(createAt).fromNow()}</p>
            </div>
            <div class="post-content">

            </div>
            <div class="text-post">
                <p>
                    {text}
                </p>
            </div>
            <div class="footer-post">
                <div class="icons">
                    <div class="hearths">
                        <Fa icon={faHeart} />
                        <p>{nLikes}</p>
                    </div>
                    <div class="comments">
                        <Fa icon={faComment} />
                        <p>{nComments}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}