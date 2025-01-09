import './App.css';
import meat from './assets/meat.png';
import cheese from './assets/cheese.png';
import bacon from './assets/bacon.png';
import salad from './assets/salad.png';
import {Ingredients} from "./types";
import {useState} from "react";
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

  const AddIngred = (nameIngred: string) => {
    let countIngredients  = ingredients.map(ingred => {
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

  return (
    <div className="container my-3">
      <div className="row justify-content-between">
        <div className="border border-black col me-3">
          <h5 className="mt-2">Ingredients</h5>
          <div className="row row-cols-2">
            <div className="col">
              {INGREDIENTS.map((ingred) => (
                  <div key={ingred.name} className="mb-2">
                    <button onClick={() => AddIngred(ingred.name)} type="button" className="border-1 bg-white">
                      <img width={60} src={ingred.image} alt={ingred.name} />
                    </button>
                  </div>
              ))}
            </div>
            <div className="col">
              {ingredients.map(ingred => (
                  <p><strong>{ingred.name}</strong> x {ingred.count}
                    <button className="deleteBtn"/>
                  </p>
              ))}
            </div>
          </div>
          <hr/>
        </div>
        <div className="border border-black col align-self-center">
          <h5 className="mt-2">Burger</h5>
          <hr/>
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>
            Здесь будет рисовать начинка
            <div className="BreadBottom"></div>
          </div>
          <div>
            <h5>Price:</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App
