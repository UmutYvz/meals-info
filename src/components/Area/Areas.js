import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Area from './Area'

function Areas() {

    const [areas, setAreas] = useState([])

    const getAreas = async () => {
        let response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        setAreas(response.data.meals)
    }

    useEffect(() => {
        getAreas();
    }, [])
    //                

    return (
        <div className="list-group" style={{ overflow: 'auto', maxHeight: 700, }}>
            <ul className="list-group" >
                {areas && areas.map(area => <Area key={Math.random() * 12367891} area={area.strArea} />)}
            </ul>
        </div >
    )
}

export default Areas;
