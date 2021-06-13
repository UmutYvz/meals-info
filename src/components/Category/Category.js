import React from 'react'
import { Link } from 'react-router-dom'

export default function Category({ cat }) {

    return (
        <li style={{ marginBottom: 5 }} className="list-group-item d-flex justify-content-between align-items-center" >
            <Link to={`/detail/${cat.strCategory}/c`}>
                {cat.strCategory}
            </Link>
            <div className="image-parent" >
                <img src={cat.strCategoryThumb} className="img-fluid" alt="quixote" width="50px" />
            </div>
        </li >
    )
}
