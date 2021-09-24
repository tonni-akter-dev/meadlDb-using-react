import React, { useEffect } from 'react';
import { useState } from 'react';
import Bill from '../Bill/Bill';
import Food from '../Food/Food';
import './Main.css'
const Main = () => {
    const [foods, setFoods] = useState([]);
    // for bill container..........
    const [bill, setBill] = useState([]);
    // search food.......
    const [displayFood, setDisplayFood] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => {
                setFoods(data.meals);
                setDisplayFood(data.meals);
            })
    }, []);
    const billHandler = (food) => {
        const newFood = [...bill, food];
        setBill(newFood);
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        // console.log(searchText);
        const matchedFood = foods.filter(product => product.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayFood(matchedFood);
    }

    return (
        <>
 <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
        <div className="product-container">
            <div className="food-container">
                {
                    displayFood.map(food => <Food
                        key={food.idMeal}
                        billHandler={billHandler}
                        food={food}></Food>)
                }
            </div>
     

            </div>
            </>
    );
};

export default Main;