import { Button } from "./UI/Button";
import { useState } from "react";

export const AddNewFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");

  const handleSubmit = (e) => {
    //to stop it from reloading the page
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID;

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  };

  return (
    <form className="from-add-friend" onSubmit={handleSubmit}>
      <label>👩🏼‍🤝‍🧑🏾 Friend's name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>👩🏼 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};
