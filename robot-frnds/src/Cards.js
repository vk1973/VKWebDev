import React from 'react';

const Cards = (props) => {
    //de-structuring so you dnt need to use "props." in code
    const { id, name, email } = props;
    return (
        <div className = 'bg-light-green dib br3 tc pa1 ma2 grow bw2 shadow-5 courier '>
            <img alt='robots' src={`https://robohash.org/${id}?size=250x250`}/>
        
            <div>
                <h1 className = 'f5'>{name}</h1>
                <p className = 'f6'>{email}</p>
            </div>
        </div>
    )
}
export default Cards;