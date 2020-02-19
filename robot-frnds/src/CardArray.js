import React from 'react';
import Cards from './Cards';

const CardArray =(props) => {
    //de-structuring
    const { robots } = props;
    const CardList = robots.map((user, i) =>
    {
        return(<Cards key = {i} id={robots[i].id} name = {robots[i].name} email = {robots[i].email}/>)
    })
    return (
        // CardList is a JS variable. Must be enclosed in curly brackets when used in React
        <div>   
           { CardList }
        </div>
    )
}

export default CardArray;