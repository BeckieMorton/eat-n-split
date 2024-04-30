import React from "react";
import { FriendsList } from "./Components/FriendsList";

import "./index.css";

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
    name: "Sarah",
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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList initialFriends={initialFriends} />
      </div>
    </div>
  );
};
