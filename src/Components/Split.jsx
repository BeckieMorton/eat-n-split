import { Button } from "./UI/Button";

export const Split = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💲 Bill value</label>
      <input type="text" />

      <label>🙂 Your expenses</label>
      <input type="text" />

      <label>😏 "friends' expenses</label>
      <input type="text" disabled />

      <label>🍜 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button>Split</Button>
    </form>
  );
};
