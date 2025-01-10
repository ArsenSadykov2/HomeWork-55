import './App.css';
import meat from './assets/meat.png';
import cheese from './assets/cheese.png';
import bacon from './assets/bacon.png';
import salad from './assets/salad.png';
import {Ingredients} from "./types";
import React, {useCallback, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const [total, setTotal] = useState<number>(30);


  const AddIngredient = (nameIngred: string) => {
    const countIngredients  = ingredients.map(ingred => {
      if(ingred.name === nameIngred) {
        return {
          ...ingred,
          count: ingred.count + 1,
        }
      }
      return ingred;
    });
    setIngredients(countIngredients );
  };

  const getBurger = () => {
    const elements= [];

    for (let i = 0; i < ingredients.length; i++) {
      const ingredient = ingredients[i];

      for (let j = 0; j < ingredient.count; j++) {
        elements.push(
            React.createElement('div', {
              key: `${ingredient.name}`,
              className: ingredient.name,
            })
        );
      }
    }

    return elements;
  };

  const DeleteIngredient = (nameIngred: string) => {
    const countIngredients  = ingredients.map(ingred => {
      if(ingred.name === nameIngred && ingred.count !== 0) {
        return {
          ...ingred,
          count: ingred.count - 1,
        }
      }
      return ingred;
    });

    setIngredients(countIngredients);
  }


  const calculateTotalPrice = useCallback(() => {
    const totalPrice = INGREDIENTS.reduce((acc, ingredient) => {
      const ingredientInBurger = ingredients.find(i => i.name === ingredient.name);
      if (ingredientInBurger) {
        acc += ingredientInBurger.count * ingredient.price;
      }
      return acc;
    }, 30);

    setTotal(totalPrice);
  }, [ingredients, INGREDIENTS]);

  React.useEffect(() => {
    calculateTotalPrice();
  }, [ingredients, calculateTotalPrice]);

  return (
    <div className="container my-2">
      <div className="row justify-content-between">
        <div className="border border-black col m-2">
          <h5 className="mt-2">INGREDIENTS</h5>
          <div className="row row-cols-2">
            <div className="col">
              {INGREDIENTS.map((ingred) => (
                  <div key={ingred.name} className="mb-2">
                    <button onClick={() => AddIngredient(ingred.name)} type="button" className="border-1 bg-white">
                      <img width={60} src={ingred.image} alt={ingred.name}/>
                      {ingred.price}
                    </button>
                  </div>
              ))}
            </div>
            <div className="col">
              {ingredients.map(ingred => (
                  <p><strong>{ingred.name}</strong> x {ingred.count}
                    {ingred.count >= 0}
                    <button onClick={() => DeleteIngredient(ingred.name)} className="deleteBtn"/>
                  </p>
              ))}
            </div>
          </div>
          <hr/>
        </div>
        <div className="border border-black col align-self-center bg-black">
          <h4 className="mt-2 text-primary">BURGER</h4>
          <hr/>
          <div className="Burger">
            <div className="BreadTop"></div>
            {getBurger()}
            <div className="BreadBottom"></div>
          </div>
          <div>
            <h5 className="text-primary">Price: {total}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App
