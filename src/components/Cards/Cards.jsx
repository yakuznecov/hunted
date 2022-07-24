import React, { useState } from 'react';
import styles from './Cards.module.scss';
import Card from '../Card/Card';

function Cards() {
	const cards = [
		{
			id: 1,
			title: 'Вакансии дня',
			countNum: 24,
			countText: 'Вакансии',
			sum: '40 000 - 300 000',
			item1: 'Администратор площадки',
			item2: 'Помощник режиссера',
			item3: 'Звукорежиссер',
			item4: 'Каскадер',
			item5: 'Оператор - постановщик',
			item6: '2-ой режиссер',
			link: 18,
		},
		{
			id: 2,
			title: 'горячие вакансии',
			countNum: 14,
			countText: 'Вакансий',
			sum: '2000 - 35 000',
			item1: 'Хлопушка',
			item2: 'Консультант по животным',
			item3: 'Рабочий на площадку',
			item4: 'Декоратор',
			item5: 'Оператор - постановщик',
			item6: 'Работник сцены',
			link: 8,
		},
	];

	const iconCards = [
		{ id: 1, color: '#a6e1bf', path: 'images/rocketLaunch.svg' },
		{ id: 2, color: '#ffb097', path: 'images/fire.svg' },
	];

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<Card cards={cards} iconCards={iconCards} />
			</div>
		</section>
	);
}

export default Cards;
