import React from "react";
import { motion } from "framer-motion";

import Store from "./Store";
import Button from "./Button";
import SlideCard from "./slideCard";


const mainVariants = {
    initial: { y: 1000 },
    animate: {
        y: 0, transition: {
            duration: 2,
            delay: 3
        }
    },
    exit: {
        y: 1000,
        transition: {
            duration: 2,
            opacity: {
                delay: 3
            }
        }
    },
};

const titleVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
};


const Main = () => {
    const buttonLetter = "Draw!";
    const path = "/answer";
    const slideLetter = {
        rich: {
            letter: ["Man I'm rich like a boss", "Price above 100 NTD"],
            img: "../rich.png",
            cardClassName: "rich slide-img"
        },
        poor: {
            letter: ["Damn I’m so poor", "Price below 100 NTD"],
            img: "../poor.png",
            cardClassName: "poor slide-img"
        },
        any: {
            letter: ["Wa long A side", "It's time to Duuuuuel"],
            img: "../vege.png",
            cardClassName: "any slide-img"
        }
    }

    return (
        <div className="main">
            <motion.div variants={titleVariants} initial="initial" animate="animate" className="main-text">
                <div>Hey there!</div>
                <div>Draw your meal now</div>
            </motion.div>
            <motion.div initial={{ y: 1000 }} animate={{ y: 0, delay: 2 }} exit={{ y: 1000 }} transition="transition" className="card">
                {/* <Store /> */}
                <div className="pick">
                    <div>
                        <svg width='9px' height='10px' >
                            <path d=" M 0 0  L9 4 L 0 8 Z " />
                        </svg>
                    </div>
                    <div>Pick a price</div>
                </div>
                <div className="slide-wrapper">
                    <div className="slide-wrapper-inner">
                        <SlideCard
                            slideLetter={slideLetter.rich.letter[0]}
                            slideLetterPrice={slideLetter.rich.letter[1]}
                            slideImg={slideLetter.rich.img}
                            cardClassName={slideLetter.rich.cardClassName} />
                        <SlideCard
                            slideLetter={slideLetter.poor.letter[0]}
                            slideLetterPrice={slideLetter.poor.letter[1]}
                            slideImg={slideLetter.poor.img}
                            cardClassName={slideLetter.poor.cardClassName} />
                        <SlideCard
                            slideLetter={slideLetter.any.letter[0]}
                            slideLetterPrice={slideLetter.any.letter[1]}
                            slideImg={slideLetter.any.img}
                            cardClassName={slideLetter.any.cardClassName} />
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

        </div>
    );
}

export default Main;
