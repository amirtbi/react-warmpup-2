import { IITems } from "./types";
import { useState } from "react";
import PackingItem from "./PackingItem";
export default function PackingList(props: {
  items: IITems[];
  onHandleDeleteItem: Function;
  onToggleItemStatus: Function;
  onClearItems: any;
}) {
  const { items, onHandleDeleteItem, onToggleItemStatus, onClearItems } = props;
  const [sortBy, setSortBy] = useState("input");
  let sortItems: IITems[] = [];

  if (sortBy === "input") sortItems = items;
  if (sortBy === "description")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <PackingItem
            key={item.id}
            item={item}
            onDeleteItem={onHandleDeleteItem}
            onToggle={onToggleItemStatus}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>clear list</button>
      </div>
    </div>
  );
}
