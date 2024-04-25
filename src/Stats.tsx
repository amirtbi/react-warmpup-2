import { IITems } from "./types";
export default function Stats(props: { newItems: IITems[] }) {
  if (props.newItems.length === 0) {
    return <p className="stats">You are not ready</p>;
  }
  const itemsLength = props.newItems.length;
  const packedItemLength = props.newItems.filter((item) => item.packed).length;
  const perentage = (packedItemLength / itemsLength) * 100;

  return (
    <footer className="stats">
      <em>
        {perentage === 100
          ? "You got everything"
          : `You have ${itemsLength} items on your list, and you already
          packed ${packedItemLength} (${perentage}%)`}
      </em>
    </footer>
  );
}
