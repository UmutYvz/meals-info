import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function MoreDetail() {
    let { id } = useParams()
    const [meal, setMeal] = useState({})

    const getDetail = async () => {
        let detail = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
        setMeal(detail.data.meals[0])
    }

    useEffect(() => {
        getDetail()
    }, [id])

    return (
        <div className="card" style={{ width: 500, marginTop: 10, marginLeft: 10 }}>
            <div className="mx-auto">
                <img src={meal.strMealThumb} className="card-img-top" style={{ width: 400 }} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Bölge: {meal.strArea}</li>
                <li className="list-group-item">Kategori: {meal.strCategory} </li>
                <li className="list-group-item">Yapılışı: {meal.strInstructions}</li>
            </ul>
            <div className="card-body">
                <a className="card-link" href={meal.strYoutube} target="blank">Youtube Linki </a>
            </div>
        </div>
    )
}

export default MoreDetail;
