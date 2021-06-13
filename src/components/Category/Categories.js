import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Category from './Category'


function Categories() {
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        let response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        setCategories(response.data.categories)
    }

    useEffect(() => {
        getCategories();
    })



    //active koyarsan seçili olur
    return (
        <div className="list-group" style={{overflow:'auto',maxHeight:700,}}>
            <ul className="list-group" >
                {categories && categories.map(cat => <Category key={cat.idCategory} cat={cat} />)}
            </ul>
        </div >
    )
}

export default Categories;
