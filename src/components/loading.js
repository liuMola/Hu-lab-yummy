import React, { useEffect, useState } from 'react';
import UncontrolledLottie from "../lottie/UncontrolledLottie";
import { motion } from "framer-motion";

const Loading = () => {
    //state
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => { setIsLoading(false) }, 3500);
    }, []);

    const loadingVariants = {
        initial: { opacity: 1 },
        animate: {
            opacity: 0,
            transition: {
                delay: 3,
                duration: 0.7,
                ease: [0.43, 0.13, 0.23, 0.9]
            }
        }
    };

    return (
        <>
            {
                isLoading ? (
                    <motion.div variants={loadingVariants}
                        initial="initial"
                        animate="animate" className="loading-wrapper">
                        <div className="loading-inner">
                            <div className="loading-logo">
                                <UncontrolledLottie />
                            </div>
                            <div className="hu-lab">HU LAB</div>
                        </div>
                    </motion.div>
                ) : (
                        null
                    )
            }
        </>
    )
}


export default Loading;