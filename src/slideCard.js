import React from 'react'

function SlideCard({ slideImg, slideLetter, slideLetterPrice, cardClassName }) {
    return (
        <div className="slide-card">
            <div className="slide-inner">
                <div className={cardClassName}>
                    <img src={slideImg} alt="" />
                </div>
                <div className="slide-letter">
                    <span>{slideLetter}</span>
                    <span>{slideLetterPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default SlideCard;