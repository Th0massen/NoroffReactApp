import React from 'react'
import './Location.css'

const Location = (props) => {
    return(
        <React.Fragment>
            <div>
                <div className="card LocationCard">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <b>Type:</b> {props.type} <br/>
                    <b>Dimention:</b> {props.dimension} <br/>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Location