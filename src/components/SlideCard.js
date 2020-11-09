import React from 'react'

const SlideCard = ({ slideImg, slideWebp, slideLetter, slideLetterPrice, cardClassName, id, handleOnChange }) => {
    return (
        <label htmlFor={id}>
            <div className={cardClassName}>
                <div className="slide-inner">
                    <div className="slide-img">
                        <picture>
                            <source srcSet={slideWebp} type="image/webp" />
                            <source srcSet={slideImg} type="image/png" />
                            <img src={slideWebp} alt="slidImage" />
                        </picture>
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
