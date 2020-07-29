import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        border: '2px solid black'
    };
    return (
    <div style={style} onClick={props.click}>{props.character}</div>
    )
};
export default char;