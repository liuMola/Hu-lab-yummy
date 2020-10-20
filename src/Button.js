import React from 'react';
import { Link } from "react-router-dom";

const Button = ({ buttonLetter, path }) => {

    return (
        <button className="button">
            <Link to={path}>
                <div className="button-inner">
                    <div className="dice">
                        <img src="/dice64.png" alt="" />
                    </div>
                    <div className="CTA">
                        {buttonLetter}
                    </div>
                </div>
            </Link>
        </button>
    );
}

export default Button;
