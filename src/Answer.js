import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import Header from "./components/Header";
import AnswerCard from "./components/AnswerCard";
import Button from "./components/Button";
import foodData from "./dataFood.json";

//animatino variables
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


const Answer = ({ selectPrice }) => {
    const buttonLetter = "Draw again!($10)";
    const path = "/";
    let foodArray = Object.values(foodData);
    let expensiveFood = [];
    let cheapFood = [];
    //state
    const [foodChoice, setFoodChoice] = useState({});

    function filterFoodPrice() {
        let i = 1;
        for (i; i < foodArray.length; i++) {
            (foodArray[i].expensive) ? expensiveFood.push(foodArray[i]) : cheapFood.push(foodArray[i]);
        }
    }
    const filter = () => {
        if (selectPrice === "rich") {
            return expensiveFood[Math.floor(Math.random() * expensiveFood.length)]
        } else if (selectPrice === "poor") {
            return cheapFood[Math.floor(Math.random() * cheapFood.length)]
        } else {
            return foodData[Math.floor(Math.random() * foodData.length)]
        }
    }

    useEffect(() => {
        filterFoodPrice();
        let choice = filter()
        setFoodChoice(foodChoice => choice);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header />
            <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="answer" >
                <motion.div initial="initial" animate="animate" variants={goesVariants} className="meal-goes">
                    <div>
                        <svg width='9px' height='10px' >
                            <path d=" M 0 0  L9 4 L 0 8 Z " />
                        </svg>
                    </div>
                    <div>Your meal goes to</div>
                </motion.div>
                <AnswerCard foodChoice={foodChoice} />
                <motion.div initial="initial" animate="animate" variants={buttonVariants} className="button-wrapper">
                    <div >Don't like it?</div>
                    <Button buttonLetter={buttonLetter} path={path} />
                </motion.div>
            </motion.div>
        </>
    )
}


export default Answer;