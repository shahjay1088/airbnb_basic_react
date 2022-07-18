import React  from "react";
import Navbar from "./componant/navbar";
import './App.css'
import data from "./data.js";
import Card from "./componant/card"; 
import Hero from "./componant/hero"


export default function App(){

  const cards= data.map(item => {
    return (
     <Card 
     key={item.id}
     {...item}
     />
  
      )
  })

  return (
    <div>
      <Navbar/>     
      <Hero/>
      <section className="cards-list">
                {cards}
            </section>
    </div>
    
  )
}