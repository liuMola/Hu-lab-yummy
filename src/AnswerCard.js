import React, { useEffect, useState } from 'react';
import foodData from "./dataFood.json";
import Store from "./Store";

////fix the zero problems
const AnswerCard = () => {
    const [foodIndex, setFoodIndex] = useState(0);

    let { id, name, trueName, price, address, expensive } = foodData[foodIndex];
    let richOrPoor = (expensive) ? "拎杯有錢啦 就要吃貴的啦" : "我窮(可在一百內解決)";


    useEffect(() => {
        let index = Math.floor(Math.random() * foodData.length) + 1;
        setFoodIndex(foodIndex => index);
    }, [])

    return (
        <>
            <div className="answer-card">
                <div className="card-inner">
                    <div className="card-top">
                        <div className="rich-or-poor">
                            <div>
                                <svg width='15px' height='15px' >
                                    <circle cx="10" cy="10" r="4" fill="#212121" />
                                </svg>
                            </div>
                            <div>{richOrPoor}</div>
                        </div>
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