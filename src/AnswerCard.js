import React, { useEffect, useState } from 'react';
import foodData from "./dataFood.json";

const food = ["承瑞燒肉飯", "韓國承瑞", "東南亞承瑞", "geng魚湯", "geng德基", "geng鍋", "麻辣鴨血", "酸辣粉", "姐姐a泰奶", "老闆雲集", "志凌第一腿", "閃麵", "志凌小米粥", "大盛豬排", "大一女", "卓聯", "鹿鳴堂便當", "麥當勞", "活大", "低基哎", "大埔鐵板燒", "水源", "關東煮", "老闆麵館", "五九麵館"]

////fix the zero problems
const AnswerCard = () => {
    const [foodIndex, setFoodIndex] = useState(0);

    useEffect(() => {
        let index = Math.floor(Math.random() * food.length);
        setFoodIndex(foodIndex => index)
    }, [])

    return (
        <>
            <div className="answer-card">
                <div className="card-inner">
                    <div>{foodData[foodIndex].name}</div>
                    <div className="card-info">
                        <div className="price">
                            <span className="coin">
                                <img src="/coin.png" alt="coin" />
                            </span>
                            {foodData[foodIndex].price}
                            <span>NTD</span>
                        </div>
                        <div>{foodData[foodIndex].trueName}</div>
                        <div>{foodData[foodIndex].address}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnswerCard;
