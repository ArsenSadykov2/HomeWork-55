import './App.css'
import meat from './assets/meat.png'
import cheese from './assets/cheese.png'
import bacon from './assets/bacon.png'
import salad from './assets/salad.png'
import {Ingredients} from "./types";
import {useState} from "react";

const App = () => {
  const INGREDIENTS: Ingredients[] = [
    {name: 'Meat', price: 80, image: meat},
    {name: 'Cheese', price: 50, image: cheese},
    {name: 'Bacon', price: 60, image: bacon},
    {name: 'Salad', price: 10, image: salad},
  ];

  const [ingredients, setIngredients] = useState([
      {name: 'Meat', count: 0},
      {name: 'Cheese', count: 0},
      {name: 'Bacon', count: 0},
      {name: 'Salad', count: 0},
  ]);

  return (

  )
};

export default App
