import React from "react";
import { Friend } from "./Friend";

export const FriendsList = ({ initialFriends, friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
