import React from "react";
import { Friend } from "./Friend";

export const FriendsList = ({ initialFriends }) => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
