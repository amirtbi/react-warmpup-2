import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { IITems } from "./types";
import "./index.css";

function App() {
  const [newItems, setItems] = useState<IITems[]>([]);

  const handleAddItem = (item: IITems) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id: number) => {
    const filteredItem = newItems.filter((item) => item.id !== id);
    setItems(() => [...filteredItem]);
  };

  const clearItems = () => {
    setItems(() => []);
  };
  const toggleItemStatus = (id: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  };
  return (
    <>
      <Logo />
      <Form onAddNewItem={handleAddItem} />
      <PackingList
        items={newItems}
        onHandleDeleteItem={handleDeleteItem}
        onToggleItemStatus={toggleItemStatus}
        onClearItems={clearItems}
      />
      <Stats newItems={newItems} />
    </>
  );
}

export default App;
