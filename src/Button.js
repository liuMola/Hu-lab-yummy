import React from 'react';

const Button = ({ buttonLetter }) => {

    return (
        <button className="button">
            <div className="button-inner">
                <div className="dice">
                    <img src="/dice64.png" alt="" />
                </div>
                <div className="CTA">
                    {buttonLetter}
                </div>
            </div>
        </button>
    );
}

export default Button;
