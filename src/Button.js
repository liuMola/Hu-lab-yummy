import React from 'react';

const Button = () => {
    return (
        <button className="button">
            <div className="button-inner">
                <div className="dice">
                    <img src="/dice64.png" alt="" />
                </div>
                <div className="CTA">
                    Draw!
                </div>
            </div>
        </button>
    );
}

export default Button;
