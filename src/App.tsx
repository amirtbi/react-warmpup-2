import { useState } from "react";
import { Icon } from "@iconify/react";
import "./App.css";

interface IPizza {
  id: number;
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

const pizzaData: IPizza[] = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/focaccia.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/margherita.jpg",
    soldOut: false,
  },
  {
    id: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/spinaci.jpg",
    soldOut: false,
  },
  {
    id: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/funghi.jpg",
    soldOut: false,
  },
  {
    id: 5,

    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/funghi.jpg",
    soldOut: true,
  },
  {
    id: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <>
      <header className="header">
        <h1>Fast React Pizza Co.</h1>
      </header>
    </>
  );
}
const Menu = () => {
  const pizzas = pizzaData;
  const hasPizzas = pizzas.length > 0;
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        {hasPizzas ? (
          <>
            <p>Welcome to our restaurants</p>
            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza info={pizza} key={pizza.id} />
              ))}
            </ul>
          </>
        ) : (
          <p>Not found any items</p>
        )}
      </main>
    </>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>We're currenlty closed. Please come back later .</p>
        )}
      </footer>
    </>
  );
};

function Order(props: { closeHour: number; openHour: number }) {
  const { closeHour, openHour } = props;
  return (
    <>
      <p className="order">
        We're currently open from {openHour}:00 till {closeHour}:00, You can
        order by
        <button className="btn">Order now</button>
      </p>
    </>
  );
}

function Pizza(props: { info: IPizza }) {
  const { photoName, name, ingredients, price, soldOut } = props.info;
  const classes = `pizza ${soldOut ? "sold-out" : ""}`;
  return (
    <>
      <li className={classes}>
        <img src={`${photoName}`} />
        <div>
          <h2>{name}</h2>
          <p>{ingredients}</p>
          <span>{soldOut ? "SoldOut" : price + 3}</span>
        </div>
      </li>
    </>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
