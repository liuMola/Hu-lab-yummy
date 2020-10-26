import React from 'react';
import { motion } from "framer-motion";

import Store from "./Store";

const AnswerCard = ({ foodChoice }) => {

    const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.9], delay: 2 };
    let { name, trueName, price, address, expensive } = foodChoice;
    console.log(foodChoice)
    let richOrPoor = (expensive) ? "拎杯有錢啦 就要吃貴的啦" : "我窮(可在一百內解決)"

    return (
        <>
            <motion.div transition={transition} initial={{ y: 1000, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="answer-card">
                <div className="card-inner">
                    <div className="card-top">
                        <div className="rich-or-poor">
                            <div>
                                <svg width='14px' height='14px' >
                                    <circle cx="10" cy="9" r="3" fill="#212121" />
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
            </motion.div>
        </>
    );
}

export default AnswerCard;
