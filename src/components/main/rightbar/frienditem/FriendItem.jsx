import './style.css';

export function FriendItem({friend}) {
    const { name, image, state } = friend;
    return (
        <div className="frienditem-container" >
            <div className="avatar">
                <img src={`${image}`} alt=""/>
            </div>
            <div>
                <p>{name}</p>
                <div className="state">
                    <div className=""></div>
                    <p>{state}</p>
                </div>
            </div>
        </div>

    );
}