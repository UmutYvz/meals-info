import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Meal from './Meal'



export default function Detail() {
    let { name, link } = useParams()
    const [meals, setMeals] = useState([])

    const getMeals = async () => {
        let response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?' + link + '=' + name)
        setMeals(response.data.meals)
    }

    useEffect(() => {
        getMeals();
    }, [meals])

    return (

        <React.Fragment>
            {meals.map((meal,index) => <Meal key={index} meal={meal} />)}
        </React.Fragment>


    )
}
