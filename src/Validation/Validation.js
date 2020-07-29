import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text Long Enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text Too Short';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
        // <div>
        //     {
        //         props.inputLength > 5 ?
        //             <p>TEXT LONG ENOUGH!!</p> :
        //             <p>TEXT TOO SHORT!!</p>
        //     }
        // </div>
        );
};

export default validation;