import React, { lazy, Suspense } from 'react';
import { motion } from "framer-motion";
import IconLoading from "./IconLoading";

const Store = lazy(() => import('./Store'));

const AnswerCard = ({ foodChoice }) => {

    const answerCardVariants = {
        initial: { y: 1000, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 2,
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.9]
            }
        }
    };

    let { name, trueName, price, address, expensive } = foodChoice;
    let richOrPoor = (expensive) ? "拎杯有錢啦 就要吃貴的啦" : "我窮(可在一百內解決)"

    return (
        <>
            <motion.div variants={answerCardVariants}
                initial="initial"
                animate="animate"
                className="answer-card">
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
                            <Suspense fallback={<IconLoading />}>
                                <Store />
                            </Suspense>
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
