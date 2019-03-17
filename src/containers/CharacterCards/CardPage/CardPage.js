import React from 'react'
import CharacterCard from '../../../components/CharacterCard/CharacterCard'

class CardPage extends React.Component{
    state = {
        character: {}
    }

    getCharacterData = () => {
        const { id } = this.props.match.params
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then( resp => resp.json() )
        .then( res => {
            console.log(res)
            this.setState({
                character: res
            })
        })
        .catch( err => console.error(err) )
    }

    componentDidMount(){
        this.getCharacterData()
    }

    render(){
        let characterCard = null;
        if( this.state.character.id ){
            characterCard = ( 
                <CharacterCard
                    key={ this.state.character.id }
                    id={ this.state.character.id }
                    image={ this.state.character.image }
                    name={ this.state.character.name }
                    species={ this.state.character.species }
                    status={ this.state.character.status }
                    gender={ this.state.character.gender }
                    location={ this.state.character.location.name }
                    origin={ this.state.character.origin.name }
                />)
        } else{
            characterCard = <p>Loading...</p>
        }

        return(
            <div className="singleChar">
                <h1 className="cardTitle">{ this.state.character.name }</h1>
                <div className="displaySingleChar">
                    { characterCard }
                </div>
            </div>
        )
    }
}

export default CardPage