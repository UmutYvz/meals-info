import React from 'react'
import { Link } from "react-router-dom";
function Area({ area }) {

    return (
        <li style={{ marginBottom: 5 }} className="list-group-item d-flex justify-content-between align-items-center" >
            <Link to={`/detail/${area}/a`} >
                {area}
            </Link>

        </li >
    )
}

export default Area;