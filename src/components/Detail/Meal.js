import React from 'react'
import { Link } from 'react-router-dom'

function Meal({ meal }) {
    return (
        <div className="card" style={{ width: 250, marginTop: 10, marginLeft: 10 }}>
            <img src={meal.strMealThumb} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <Link to={`/moredetail/${meal.idMeal}`}>
                    <button type="button" class="btn btn-info">Go Detail</button>
                </Link>
            </div>
        </div>
    )
}

export default Meal;