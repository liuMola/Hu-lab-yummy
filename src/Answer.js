import React from 'react';
import { motion } from "framer-motion";

import AnswerCard from "./AnswerCard";
import Button from "./Button";

const goesVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
};

const buttonVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.7,
            delay: 3
        }
    }
};


function Answer() {
    const buttonLetter = "Draw again!($10)";
    const path = "/";
    return (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }} id="answer" >
            <motion.div initial="initial" animate="animate" variants={goesVariants} className="meal-goes">
                <div>
                    <svg width='9px' height='10px' >
                        <path d=" M 0 0  L9 4 L 0 8 Z " />
                    </svg>
                </div>
                <div>Your meal goes to</div>
            </motion.div>
            <AnswerCard />
            <motion.div initial="initial" animate="animate" variants={buttonVariants} className="button-wrapper">
                <div >Don't like it?</div>
                <Button buttonLetter={buttonLetter} path={path} />
            </motion.div>
        </motion.div>
    )
}


export default Answer;