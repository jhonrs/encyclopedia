import React from 'react';
import './CardCategory.css';
interface CardCategoryProps{
    nameCategory: string;

}

export const CardCategory: React.FC<CardCategoryProps> = ({nameCategory})=>{



return (
    <div className="cardCategory__container">

    <h2 className="cardCategory__name">{nameCategory}</h2>

    </div>
);
}