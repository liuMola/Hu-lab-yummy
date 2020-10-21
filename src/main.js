import React from "react";
import { motion } from "framer-motion";

import Store from "./Store";
import Button from "./Button";


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



    return (
        <div className="main">
            <motion.div variants={titleVariants} initial="initial" animate="animate" className="main-text">
                <div>Hey there!</div>
                <div>Draw your meal now</div>
            </motion.div>
            <motion.div initial={{ y: 1000 }} animate={{ y: 0, delay: 2 }} exit={{ y: 1000 }} transition="transition" className="card">
                {/* <Store /> */}
                <div className="text">
                    Hundreds and thousands of choices are<br />
                    waiting here for you!
                </div>
                <div className="button-wrapper">
                    <div>Save your meal now!</div>
                    <Button buttonLetter={buttonLetter} path={path} />
                </div>
            </motion.div>

        </div>
    );
}

export default Main;
