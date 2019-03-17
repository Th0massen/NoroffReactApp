import React from 'react'
import { Link } from 'react-router-dom'
import './CharacterCard.css'

const characterCard = (props) => {

    let linkButton = null
    let className = null;
    if( props.showLink ){
        linkButton = ( <Link to={{ pathname: 'character/' + props.id }} className="btn btn-primary"> View Card </Link> )
        className = 'col-xs-12 col-sm-6 col-md-4'
    } else {
        className = " col-sm-6 offset-sm-3 "
    }

    return (
        <React.Fragment>
        <div className={className}>
            <div className="card CharacterCard">
                <img className="card-img-top" src={props.image} alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <b>Species:</b> {props.species} <br/>
                    <b>Status:</b> {props.status} <br/>
                    <b>Gender:</b> {props.gender} <br/>
                    <b>Location:</b> {props.location} <br/>
                    <b>Origin:</b> {props.origin} <br/>
                    { linkButton }
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default characterCard


