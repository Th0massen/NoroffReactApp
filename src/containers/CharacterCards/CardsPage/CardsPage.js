import React from 'react'
import CharacterCard from '../../../components/CharacterCard/CharacterCard' 
import SearchBar from '../../../components/SearchBar/SearchBar'
import './CardsPage.css'

class CardsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rickMorty: [],
            characterCards: []
        }
    }

    getData = () => {
        fetch( 'https://rickandmortyapi.com/api/character/' )
        .then( response => response.json() )
        .then( data => {
            this.setState({
                rickMorty: data.results,
                characterCards: [...data.results]
            })
        })
        .catch( err => console.error(err) )
    }

    componentDidMount(){
        this.getData()
    }

    handleSearchTerm = ( searchTerm ) => {
        this.filterSearchTerm( searchTerm )
    }

    filterSearchTerm = ( term ) => {
        const characters = this.state.rickMorty.filter( char => {
            return char.name.toLowerCase().includes(term.trim().toLowerCase())
        })
        this.setState({
            characterCards: characters
        })
    }

    render(){
        let characters = null
        if( this.state.characterCards.length > 0 ){
            characters = this.state.characterCards.map( character => (
                <CharacterCard
                    key={ character.id }
                    id={ character.id }
                    image={ character.image }
                    name={ character.name }
                    species={ character.species }
                    status={ character.status }
                    gender={ character.gender }
                    location={ character.location.name }
                    origin={ character.origin.name }
                    showLink = { true }
                />
            ))
        } else {
            characters = <p>Loading...</p>
        }

        return(
            <div className="content">
                <h1 className="cardTitle">Rick & Morty <br />Characters</h1>
                <SearchBar onSearchTerm={ this.handleSearchTerm }/>
                <div className="row">
                    { characters }
                </div>
            </div>
        )
    }
}

export default CardsPage