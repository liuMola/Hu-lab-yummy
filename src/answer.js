import React from 'react';

const getFood = () => {
    const food = ["承瑞燒肉飯", "韓國承瑞", "東南亞承瑞", "geng魚湯", "geng德基", "geng鍋", "麻辣鴨血", "酸辣粉", "姐姐a泰奶", "老闆雲集", "志凌第一腿", "閃麵", "志凌小米粥", "大盛豬排", "大一女", "卓聯", "鹿鳴堂便當", "麥當勞", "活大", "低基哎", "大埔鐵板燒", "水源", "關東煮", "老闆麵館", "五九麵館"]
    const chooseFood = () => {
        let choose = Math.floor(Math.random() * food.length);
        window.alert(food[choose])
        return food[choose];
    }
}

const Answer = () => {

    return (
        <div>answer</div>
    );
}

export default Answer;
