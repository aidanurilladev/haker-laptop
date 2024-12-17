import React from 'react';
import sass from "../accessory/CardsAccessory.module.scss"

const CardsAccessory = () => {
    return (
        <div id= {sass.cardsAcc}>
            <div className="container">
                <div className={sass.cardsAcc}>
                    <h1>Игровые акссесуары</h1>
                    <p>Хочешь играть как профессиональные игроки? Покупай топовые игровые девайсы! <br />
                    Наши эксперты по геймингу помогут выбрать лучшие игровые аксессуары для максимально комфортной игры!</p>

                </div>
            </div>
            
        </div>
    );
};

export default CardsAccessory;