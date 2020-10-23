import React from 'react'

function SlideCard({ slideImg, slideLetter, slideLetterPrice, cardClassName, id, handleOnChange }) {
    return (
        <label htmlFor={id}>
            <div className={cardClassName}>
                <div className="slide-inner">
                    <div className="slide-img">
                        <img src={slideImg} alt="Slideimage" />
                    </div>
                    <div className="slide-letter">
                        <span>{slideLetter}</span>
                        <span>{slideLetterPrice}</span>
                    </div>
                </div>
                <input
                    type="radio"
                    name="price"
                    id={id}
                    value={id}
                    onChange={() => { handleOnChange(id) }}
                />
            </div>
        </label>
    )
}

export default SlideCard;