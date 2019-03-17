import React from 'react'
import Location from '../../components/Location/Location'
import SearchBar from '../../components/SearchBar/SearchBar'

class LocationsPage extends React.Component{
    constructor(){
        super()
        this.state = {
            Locations: [],
            filterLocations: []
        }
    }

    fetchLocations(){
        fetch('https://rickandmortyapi.com/api/location')
        .then( response => response.json() )
        .then( res => {
            console.log(res.results)
            this.setState({
                Locations: res.results,
                filterLocations: [...res.results]
            })
        })
        .catch( err => console.log( err ))
    }

    componentDidMount(){
        this.fetchLocations()
    }

    handleSearchTerm = ( searchTerm ) => {
        this.filterSearchTerm( searchTerm )
    }

    filterSearchTerm = ( term ) => {
        const locations = this.state.filterLocations.filter( location => {
            return location.name.toLowerCase().includes(term.trim().toLowerCase())
        })
        this.setState({
            Locations: locations
        })
    }

    render(){
        let locations = null
        if( this.state.Locations.length > 0 ){
            locations = this.state.Locations.map( location => (
                <Location
                    key = {location.id}
                    name={ location.name }
                    type={location.type}
                    dimension={location.dimension}
                />
            ))
        } else {
            locations = <p>Loading...</p>
        }

        return(
            <div className="Locations">
                <h1 className="cardTitle">Locations</h1>
                <SearchBar onSearchTerm={ this.handleSearchTerm } />
                <div className="row">
                    { locations }
                </div>
            </div>
        )
    }
}

export default LocationsPage