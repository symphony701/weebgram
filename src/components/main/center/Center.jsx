import './style.css';
import { Poster } from './poster/Poster';
import { Post } from './post/Post';
import { AddPostDialog } from './dialog/addpostdialog/AddPostDialog';
export function Center(){
    const posts =[
        {
            _id: '1',
            createAt: '2020-01-01',
            nComments: 0,
            nLikes: 0,
            nickname: 'nickname',
            profile_image: 'https://i.pinimg.com/550x/97/89/aa/9789aa9c793486ac626a908571c80f43.jpg',
            text: 'text',
            userId: '1',
            image: 'https://i.pinimg.com/550x/97/89/aa/9789aa9c793486ac626a908571c80f43.jpg',
        },
        {
            _id: '2',
            createAt: '2020-01-01',
            nComments: 0,
            nLikes: 0,
            nickname: 'nickname',
            profile_image: 'https://i.pinimg.com/550x/97/89/aa/9789aa9c793486ac626a908571c80f43.jpg',
            text: 'text',
            userId: '1',
            image: 'https://i.pinimg.com/550x/97/89/aa/9789aa9c793486ac626a908571c80f43.jpg',
        },
        {
            _id: '3',
            createAt: '2020-01-01',
            nComments: 0,
            nLikes: 0,
            nickname: 'nickname',
            profile_image: 'https://i.pinimg.com/550x/97/89/aa/9789aa9c793486ac626a908571c80f43.jpg',
            text: 'text',
            userId: '1',
            image: 'https://i.pinimg.com/550x/97/89/aa/9789aa9c793486ac626a908571c80f43.jpg',
        }
        
    ]
    return(
        <div className="center">
            <Poster />
            <AddPostDialog />
            {posts.map(post => (
                <Post key={post._id} data={post} />
            ))}
        </div>
    );

}