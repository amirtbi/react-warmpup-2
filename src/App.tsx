import { useState } from 'react'
import { Icon } from '@iconify/react';
// import './App.css'

// function Header() {
//   return <>
//     <header className='header'>
//       <h1>Fast React Pizza Co.</h1>
//     </header>
//   </>
// }
// const Menu = () => {
//   return <>
//     <main className='menu'>
//       <h2>Our Menu</h2>
//       <Pizza name="Psizza Delicious"
//         photoName="margherita.jpg"
//         price={12}
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese" />

//       <Pizza name="Psizza Delicious"
//         photoName="margherita.jpg"
//         price={10}
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese" />
//     </main>
//   </>
// }

// const Footer = () => {
//   const hour = new Date().getHours();
//   return <>
//     <footer className="footer">
//       {hour}&nbsp;We are currenly open
//     </footer>
//   </>
// }

// function Pizza(props: {
//   name: string,
//   photoName: string, price: number, ingredients: string
// }) {
//   return <>
//     <div className="pizza">
//       <img src={`/${props.photoName}`} />
//       <div>
//         <h2>{props.name}</h2>
//         <p>{props.ingredients}</p>
//         <span>{props.price + 3}</span>
//       </div>
//     </div>
//   </>
// }




// function App() {
//   return (
//     <>
//       <div className="container">
//         <Header />
//         <Menu />
//         <Footer />
//       </div >
//     </>
//   )
// }


function CardHeader(props: { imgSrc: string }) {

  return <>
    <div style={{ width: "100%" }} >
      <img style={{ width: "100%" }} src={props.imgSrc} />
    </div>
  </>
}

function CardBody(props: { title: string, content: string }) {
  return <>
    <div style={{ padding: "0.5rem" }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>

  </>
}

function Skill(props: { skill: string, color: string }) {
  const styles = {
    backgroundColor: `${props.color}`, color: "white",
    display: "flex", maxWidth: "100px",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "1rem", padding: "0.25rem"
  }
  return <>
    <div style={styles}>
      <span>&nbsp;{props.skill}</span>
      <div style={{ display: "flex" }}>
        <Icon icon="mdi-light:home" />
      </div>
    </div>

  </>
}

function Skills() {

  return <>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Skill skill="javascript" color="blue" />
      <Skill skill="Node js" color="red" />
      <Skill skill="React js" color="orange" />
    </div>

  </>
}

function Card(props: { src: string, title: string, content: string }) {
  const classes = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width: "300px",
    paddingBottom: "0.75rem",
    paddingTop: "0.75rem"
  }
  return <>
    <div style={classes}>
      <CardHeader imgSrc={props.src} />
      <CardBody title={props.title} content={props.content} />
      <Skills />
    </div>
  </>
}



function App() {
  const styles = { maxWidth: "600px", padding: "0.5rem" }
  return <>
    <div style={styles}>
      <Card src="/margherita.jpg" title="Delicious Meal" content="Some Delicious meal for your" />
    </div>
  </>
}


export default App
