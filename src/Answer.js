import React from 'react'

import Header from "./Header";
import AnswerCard from "./AnswerCard";
import Button from "./Button";


function Answer() {
    const buttonLetter = "Draw again!($10)";
    return (
        <section id="answer">
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
                <div>Don't like it?</div>
                <Button buttonLetter={buttonLetter} />
            </div>
            <div className="jar-tsai">
                ⓒ2020 GinNaLiJarTsai
            </div>
        </section>
    )
}


export default Answer;