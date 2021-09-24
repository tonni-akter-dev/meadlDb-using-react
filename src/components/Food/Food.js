import React from 'react';
import './Food.css';
const Food = (props) => {
    // console.log(props.food.strMeal);
    const { strMealThumb, strMeal, strCategory } = props.food;
    const btnStyle={
        marginLeft: '105px',
                    marginBottom: '15px',
                    backgroundColor: 'goldenrod',
                    height: '30px',
                    width: '100px',
                    borderRadius:'5px'
  }
    return (
        <div  className="imgCol">
            <div style={{border:'1px solid gray',borderRadius:'5px'}}>
                <img src={strMealThumb} style={{
                    height: "300px",
                }} alt="" />
                  <h2 className="head">Name:{strMeal}</h2>
                <h5 className="head">Category:{strCategory}</h5>
                <p className="head">Price:300</p>
                <button style={btnStyle} onClick={()=>props.billHandler(props.food)}>Order Now</button>
            </div>
        </div>
    );
};

export default Food;