import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import animationData from './data.json'

const UncontrolledLottie = () => {
    const [isStopped, setIsStopped] = useState(true);

    useEffect(() => {
        setTimeout(() => { setIsStopped(false) }, 1000);
    }, [])

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            className: 'lottie-self'
        }
    };

    return (
        <>
            <div className="lottie">
                <Lottie options={defaultOptions}
                    height={'50%'}
                    width={'50%'}
                    isStopped={isStopped} />
            </div>
        </>
    );
}

export default UncontrolledLottie;
