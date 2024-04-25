import { useState, FormEvent } from "react";
import { IITems } from "./types";
export default function Form(props: { onAddNewItem: (item: IITems) => void }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      id: Date.now(),
      packed: false,
      info: { existed: true, price: 200 },
    };

    props.onAddNewItem(newItem);
    console.log("new item", newItem);

    setDescription("");
    setQuantity(1);
  };

  const show = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <form
        className="add-form"
        onSubmit={handleSubmit}
        onKeyUp={(e) => show(e)}
      >
        <h3>What do yout need for your trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <input
          placeholder="Item...."
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add Item</button>
      </form>
    </>
  );
}
