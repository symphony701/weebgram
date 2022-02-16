import './style.css';
import { FriendItem } from '../frienditem/FriendItem';
export function FriendList() {
  const friends = [
    {
      name: "Menhera",
      image: "https://c.tenor.com/IMNDZBkct8gAAAAC/anime-girl.gif",
      state: "Online",
    },

    {
      name: "Nino Nakano",
      image:
        "https://i.pinimg.com/originals/5c/dd/df/5cdddfde3398f513a59c07cc298247c2.jpg",
      state: "Offline",
    },
    {
      name: "Futaba Rio",
      image:
        "https://i.pinimg.com/originals/a9/8c/fc/a98cfc1ec60ff8d2532d4324382fe4f2.jpg",
      state: "Online",
    },
    {
      name: "Zero Two",
      image:
        "https://9tailedkitsune.com/wp-content/uploads/2021/04/zero-two_-cute.jpg",
      state: "Offline",
    },
    
  ];

  return (
    <div className="friendlist">
      <h4>YOUR TOMODACHI</h4>
      <div className="friendcontainer">
        {friends.map((friend) => (
          <FriendItem key={friend.name} friend={friend}/>
        ))}
      </div>
    </div>
  );
}
