import { IITems } from "./types";
export default function Item(props: {
  item: IITems;
  onDeleteItem: Function;
  onToggle: Function;
}) {
  const { item, onDeleteItem, onToggle } = props;
  return (
    <>
      <li>
        <>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => onToggle(item.id)}
          />
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity} {item.description}
          </span>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => onDeleteItem(item.id)}
          >
            &times;
          </button>
        </>
      </li>
    </>
  );
}
