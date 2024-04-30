import { Button } from "./UI/Button";

export const AddNewFriend = () => {
  return (
    <form className="from-add-friend">
      <label>👩🏼‍🤝‍🧑🏾 Friend's name</label>
      <input type="text" />

      <label>👩🏼 Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
};
