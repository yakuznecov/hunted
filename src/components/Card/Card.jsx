import React from 'react';
import styles from './Card.module.scss';

function Card({ cards, iconCard, cardsEmployer }) {
    const numToStr = (num, arrText) => {
        if (num % 10 === 1 && num % 100 !== 11) {
            return arrText[0];
        } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
            return arrText[1];
        }
        return arrText[2];
    };

    const textLink = (id) => {
        if (id === 3) {
            return 'Все компании';
        }
        return `Ещё ${cards.link} профессий`;
    };

    return (
        <div className={styles.container} key={cards.id}>
            <div>
                <h2 className={styles.title}>{cards.title}</h2>
                <div className={styles.count}>
                    <span className={styles.count_num}>{cards.total}</span>
                    <span className={styles.count_text}>
                        {numToStr(cards.total, ['вакансия', 'вакансии', 'вакансий'])}
                    </span>
                </div>
                <div className={styles.sum}>{cards.id === 6 ? '' : `${cards.min} - ${cards.max} руб.`}</div>
                <div className={styles.inner}>
                    <div className={styles.item}>{cards.list[0].title}</div>
                    <div className={styles.item}>{cards.list[1].title}</div>
                    <div className={styles.item}>{cards.list[2].title}</div>
                    <div className={styles.item}>{cards.list[3].title}</div>
                    <div className={styles.item}>{cards.list[4].title}</div>
                    <div className={styles.item}>{cards.list[5].title}</div>
                </div>
                <a href="/" className={styles.link}>
                    {textLink(cards.id)}
                </a>
            </div>

            <div className={styles.icon} style={{ backgroundColor: iconCard.color }} key={iconCard.id}>
                <img src={iconCard.path} alt="icon" />
            </div>
        </div>
    );
}

export default Card;
