import React from "react";
import { Button } from "./UI/Button";

export const Friend = ({ friend, onSelection, selectedFriend }) => {
  console.log(`in friend friend`, friend);
  console.log(`in friend selected`, selectedFriend);

  //using the ? below is called optional chaining. if the object accessed ot function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error

  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};
