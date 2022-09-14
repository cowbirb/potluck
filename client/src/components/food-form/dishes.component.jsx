import React, { useState } from 'react';

import Dish from './dish.component.jsx';

function Dishes (props) {
    const [foods, setFoods] = useState(props.foods);

    return (
        <div className={props.className}>
            {props.title}
            <div className='row'>
                <input className='col-sm-10' placeholder="Add a Dish"></input>
                <button className='col-sm-2'>+</button>
            </div>
            <ul class='text-left d-flex justify-content-between'>
                {foods.map((food, index) => {
                    return(<Dish food={food} key={food.name + index}></Dish>);
                })}
            </ul>
        </div>
    )
}

export default Dishes;