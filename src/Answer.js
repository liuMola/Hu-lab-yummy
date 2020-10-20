import React from 'react';
import { motion } from "framer-motion";

import Header from "./Header";
import AnswerCard from "./AnswerCard";
import Button from "./Button";

const duration = {
    d1: 1,
    d3: 3
};

const answerVariants = {
    initial: { opacity: 0 },
    animate: {},
    enter: {
        opacity: 1,
        transition: {
            duration: 1,
            opacity: {
                delay: duration.d1
            }
        }
    },
    exit: { opacity: 0 },
    transition: { duration: 3, ease: [0.43, 0.13, 0.23, 0.9] }
};

const goesVariants = {
    initial: { opacity: 0 },
    animate: {},
    enter: {
        opacity: 1,
        transition: {
            duration: 1,
            opacity: {
                delay: duration.d3
            }
        }
    },
    exit: { opacity: 0 },
    transition: { duration: 3, ease: [0.43, 0.13, 0.23, 0.9] }
};


function Answer() {
    const buttonLetter = "Draw again!($10)";
    const path = "/";
    return (
        <div id="answer" >
            <Header />
            <motion.div initial="initial" animate="enter" transition="transition" variants={answerVariants} className="meal-goes">
                <div>
                    <svg width='9px' height='10px' >
                        <path d=" M 0 0  L9 4 L 0 8 Z " />
                    </svg>
                </div>
                <div>Your meal goes</div>
            </motion.div>
            <AnswerCard />
            <motion.div initial="initial" animate="enter" transition="transition" variants={goesVariants} className="button-wrapper">
                <div >Don't like it?</div>
                <Button buttonLetter={buttonLetter} path={path} />
            </motion.div>
            <div className="jar-tsai">
                ⓒ2020 GinNaLiJarTsai
                </div>
        </div>
    )
}


export default Answer;