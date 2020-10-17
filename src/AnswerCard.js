import React, { useEffect, useState } from 'react';
import foodData from "./dataFood.json";
import Store from "./Store";

////fix the zero problems
const AnswerCard = () => {
    const [foodIndex, setFoodIndex] = useState(0);

    let { id, name, trueName, price, address, expensive } = foodData[foodIndex];

    useEffect(() => {
        let index = Math.floor(Math.random() * foodData.length) + 1;
        setFoodIndex(foodIndex => index)
    }, [])

    return (
        <>
            <div className="answer-card">
                <div className="card-inner">
                    <div className="card-top">
                        <div className="canvas">
                            <Store />
                        </div>
                        <div>{name}</div>
                    </div>
                    <div className="hz-line"></div>
                    <div className="card-info">
                        <div className="price">
                            <span className="coin">
                                <img src="/coin.png" alt="coin" />
                            </span>
                            {price}
                            <span>NTD</span>
                        </div>
                        <div>{trueName}</div>
                        <div>{address}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnswerCard;
