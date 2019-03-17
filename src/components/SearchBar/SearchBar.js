import React from 'react'

const SearchBar = ( props ) => {    

    const searchInput = React.createRef();
    
    const handleSearch = () => {
        const searchValue = searchInput.current
        props.onSearchTerm( searchValue.value )
    }

    const searchStyling = {
        margin: '15 0'
    }

    return(
        <div className="search">
            <input type="text"
            style={ searchStyling }
                className="form-control"
                placeholder="Search..."
                ref={ searchInput }
                onChange={ handleSearch }    
            />
        </div>
    )
}

export default SearchBar