import React, { useState } from "react";
import { motion } from "framer-motion";

import Button from "./Button";
import SlideCard from "./slideCard";


const Main = ({ setSelectPrice }) => {
    const buttonLetter = "Draw!";
    const path = "/answer";

    //State
    const [price, setPrice] = useState(null);

    const handleOnChange = (id) => {
        let getInput = document.getElementsByTagName("input");
        let getSlideCard = document.querySelectorAll(".slide-card");
        function checkInput() {
            let i = 0;
            for (i; i < getInput.length; i++) {
                if (getInput[i].checked && !getSlideCard[i].classList.contains("checked")) {
                    getSlideCard[i].classList.add("checked");
                } else if (!getInput[i].checked && getSlideCard[i].classList.contains("checked")) {
                    getSlideCard[i].classList.remove("checked");
                }
            }
        }
        setPrice(id);
        checkInput();
        setSelectPrice(id);
    }

    //props variables
    const slideLetter = {
        rich: {
            id: "rich",
            letter: ["Man I'm rich like a boss", "Price above 100 NTD"],
            webp: "../rich.webp",
            img: "../rich.png",
            cardClassName: "rich slide-card"
        },
        poor: {
            id: "poor",
            letter: ["Damn I’m so poor", "Price below 100 NTD"],
            webp: "../poor.webp",
            img: "../poor.png",
            cardClassName: "poor slide-card"
        },
        any: {
            id: "any",
            letter: ["Wa long A side", "It's time to Duuuuuel"],
            webp: "../vege.webp",
            img: "../vege.png",
            cardClassName: "any slide-card"
        }
    };

    //animation variables
    const mainCardVariants = {
        initial: { y: 1000 },
        animate: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.9]
            }
        }
    };

    const titleVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 }
    };

    return (
        <>
            <motion.div exit={{ opacity: 0 }} className="main">
                <motion.div variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    className="main-text">
                    <div>Hey there!</div>
                    <div>Draw your meal now</div>
                </motion.div>
                <motion.div variants={mainCardVariants} initial="initial" animate="animate" className="card">
                    {/* <motion.div className="card"> */}
                    <div className="pick">
                        <div>
                            <svg width='9px' height='10px' >
                                <path d=" M 0 0 L9 4 L 0 8 Z " />
                            </svg>
                        </div>
                        <div>Pick a price</div>
                    </div>
                    <div className="slide-wrapper">
                        <div className="slide-wrapper-inner">
                            <SlideCard
                                slideLetter={slideLetter.rich.letter[0]}
                                slideLetterPrice={slideLetter.rich.letter[1]}
                                slideWebp={slideLetter.rich.webp}
                                slideImg={slideLetter.rich.img}
                                cardClassName={slideLetter.rich.cardClassName}
                                id={slideLetter.rich.id}
                                handleOnChange={handleOnChange} />
                            <SlideCard
                                slideLetter={slideLetter.poor.letter[0]}
                                slideLetterPrice={slideLetter.poor.letter[1]}
                                slideWebp={slideLetter.poor.webp}
                                slideImg={slideLetter.poor.img}
                                cardClassName={slideLetter.poor.cardClassName}
                                id={slideLetter.poor.id}
                                handleOnChange={handleOnChange} />
                            <SlideCard
                                slideLetter={slideLetter.any.letter[0]}
                                slideLetterPrice={slideLetter.any.letter[1]}
                                slideWebp={slideLetter.any.webp}
                                slideImg={slideLetter.any.img}
                                cardClassName={slideLetter.any.cardClassName}
                                id={slideLetter.any.id}
                                handleOnChange={handleOnChange} />
                            <div className="blank-space"></div>
                        </div>
                    </div>
                    <div className="text">
                        Hundreds and thousands of choices are<br />
                            waiting here for you!
                        </div>
                    <div className="button-wrapper">
                        <div>Save your meal!</div>
                        <Button buttonLetter={buttonLetter} path={path} />
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default Main;
