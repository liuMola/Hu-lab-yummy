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
                <div></div>
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