import React from 'react'

function SlideCard({ slideImg, slideLetter, slideLetterPrice, cardClassName, id, handleOnChange }) {
    return (
        <label htmlFor={id}>
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
                <input
                    type="radio"
                    name="price"
                    id={id}
                    value={id}
                    onChange={() => { handleOnChange(id) }}
                />
            </div>
        </label>
        // <div className="slide-card">
        //     <div className="slide-inner">
        //         <div className={cardClassName}>
        //             <img src={slideImg} alt="" />
        //         </div>
        //         <div className="slide-letter">
        //             <span>{slideLetter}</span>
        //             <span>{slideLetterPrice}</span>
        //         </div>
        //     </div>
        // </div>
    )
}

export default SlideCard;