import React from 'react';

const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'Scroll', boder:'5px black', height:'600px'}}>
            {props.children}
        </div>

    );
}

export default Scroll;
