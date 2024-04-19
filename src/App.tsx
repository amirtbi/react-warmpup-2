import { FormEvent, useState } from "react";
import "./index.css";

interface IITems {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}
const initialItems: IITems[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Socks", quantity: 12, packed: true },
];

function Logo() {
  return <h1>Far away</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e: FormEvent) => {
    console.log("e", e);
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, id: Date.now(), packed: false };
    console.log("new item", newItem);

    setDescription("");
    setQuantity(1);
  };
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
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

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item(props: { item: IITems }) {
  const { item } = props;
  return (
    <>
      <li>
        <>
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity} {item.description}
          </span>
          <button>&times;</button>
        </>
      </li>
    </>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on your list, and you already packed X </em>
    </footer>
  );
}
function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </>
  );
}

export default App;
