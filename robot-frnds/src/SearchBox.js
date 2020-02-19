import React from 'react';

const SearchBox = ({ searchchange}) => {
    return (
        <div className = 'pa2 ' >

        <input className = 'pa3 ba b--light-green bg-washed-blue' 
        type = 'search' 
        placeholder = 'Search Robots' 
        onChange = {searchchange} />
        </div>
    )
}

export default SearchBox;