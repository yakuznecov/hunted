import React from 'react';
import styles from './Card.module.scss';

function Card({ cards, iconCards }) {
	return (
		<>
			{cards.map((card) => (
				<div className={styles.container} key={card.id}>
					<div>
						<h2 className={styles.title}>{card.title}</h2>
						<div className={styles.count}>
							<span className={styles.count_num}>{card.countNum}</span>
							<span className={styles.count_text}>{card.countText}</span>
						</div>
						<div className={styles.sum}>{card.sum} руб.</div>
						<div className={styles.inner}>
							<div className={styles.item}>{card.item1}</div>
							<div className={styles.item}>{card.item2}</div>
							<div className={styles.item}>{card.item3}</div>
							<div className={styles.item}>{card.item4}</div>
							<div className={styles.item}>{card.item5}</div>
							<div className={styles.item}>{card.item6}</div>
						</div>
						<a href='/' className={styles.link}>
							Ещё {card.link} профессий
						</a>
					</div>

					<div className={styles.icon} style={{ backgroundColor: iconCards.color }} key={iconCards.id}>
						<img src={iconCards.path} alt='icon' />
					</div>
				</div>
			))}
		</>
	);
}

export default Card;
