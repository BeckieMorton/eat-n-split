import { useState } from "react";
import { FriendsList } from "./Components/FriendsList";

import "./index.css";
import { AddNewFriend } from "./Components/AddNewFriend";
import { Button } from "./Components/UI/Button";
import { Split } from "./Components/Split";

//array of objects
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Helen",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleClick = () => {
    //setShowAddFriend(!showAddFriend);
    //works the above way but we should do it with an anonymous callback function instead
    setShowAddFriend((show) => !show);
  };

  const handleAddFriend = (friend) => {
    //cant use push as it would not create a new array and therefore react wouldnt rerender, we shouldnt mutate original arrays, and we arent allowed to mutate probs
    setFriends((friends) => [...friends, friend]);
    //hide form again once new friend is added
    setShowAddFriend(false);
  };

  const handleSelection = (friend) => {
    //? below is optional chaining in js
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriend && <AddNewFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleClick}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <Split selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
};
