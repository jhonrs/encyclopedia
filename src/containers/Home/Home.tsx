import React from 'react';
import { CardCategory } from '../../components/CardCategory/CardCategory';
import './Home.css';
interface HomeProps { }

export const Home: React.FC<HomeProps> = () => {
    return (
        <div className="containerCategory__main">
           
                <CardCategory nameCategory={"Star wars"}></CardCategory>
                <CardCategory nameCategory={"Pokemon"}></CardCategory>
                <CardCategory nameCategory={"Animals"}></CardCategory>
                <CardCategory nameCategory={"Rick and Morty"}></CardCategory>
            
        </div>
    );
}