import React from 'react';
import { motion } from "framer-motion";

import Header from "./Header";
import AnswerCard from "./AnswerCard";
import Button from "./Button";


function Answer() {
    const buttonLetter = "Draw again!($10)";
    const path = "/";
    return (
        <motion.section key="answer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} id="answer" >
            <Header />
            <div className="meal-goes">
                <div>
                    <svg width='9px' height='10px' >
                        <path d=" M 0 0  L9 4 L 0 8 Z " />
                    </svg>
                </div>
                <div>Your meal goes</div>
            </div>
            <AnswerCard />
            <div className="button-wrapper">
                <motion.div exit={{ opacity: 0 }}>Don't like it?</motion.div>
                <Button buttonLetter={buttonLetter} path={path} />
            </div>
            <div className="jar-tsai">
                ⓒ2020 GinNaLiJarTsai
            </div>
        </motion.section>
    )
}


export default Answer;