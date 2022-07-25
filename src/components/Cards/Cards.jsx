import React, { useState } from 'react';
import styles from './Cards.module.scss';
import stylesCard from '../Card/Card.module.scss';
import Card from '../Card/Card';
import cn from 'classnames';

function Cards() {
	const cards = [
		{
			id: 1,
			title: 'Вакансии дня',
			total: 24,
			min: '40 000',
			max: '300 000',
			list: [
				{
					id: 1,
					title: 'Администратор площадки',
				},
				{
					id: 2,
					title: 'Помощник режиссера',
				},
				{
					id: 3,
					title: 'Звукорежиссер',
				},
				{
					id: 4,
					title: 'Каскадер',
				},
				{
					id: 5,
					title: 'Оператор - постановщик',
				},
				{
					id: 6,
					title: '2-ой режиссер',
				},
			],
			link: 18,
		},
		{
			id: 2,
			title: 'горячие вакансии',
			total: 14,
			min: '2 000',
			max: '35 000',
			list: [
				{
					id: 1,
					title: 'Хлопушка',
				},
				{
					id: 2,
					title: 'Консультант по животным',
				},
				{
					id: 3,
					title: 'Рабочий на площадку',
				},
				{
					id: 4,
					title: 'Декоратор',
				},
				{
					id: 5,
					title: 'Оператор - постановщик',
				},
				{
					id: 6,
					title: 'Работник сцены',
				},
			],
			link: 8,
		},
		{
			id: 3,
			title: 'компании дня',
			total: 108,
			min: '50 000',
			max: '270 000',
			list: [
				{
					id: 1,
					title: 'Базилевс',
				},
				{
					id: 2,
					title: 'Первый канал',
				},
				{
					id: 3,
					title: 'Студия Первоцвет',
				},
				{
					id: 4,
					title: 'Военфильм',
				},
				{
					id: 5,
					title: '2х2 продакшн',
				},
				{
					id: 6,
					title: 'Единая Медиа Группа',
				},
			],
		},
		{
			id: 4,
			title: 'вакансии в Москве',
			total: 1512,
			min: '75 000',
			max: '380 000',
			list: [
				{
					id: 1,
					title: 'Кастинг - директор',
				},
				{
					id: 2,
					title: 'Художник по костюмам',
				},
				{
					id: 3,
					title: 'Асс художника по костюмам',
				},
				{
					id: 4,
					title: 'Каскадер',
				},
				{
					id: 5,
					title: 'Реквизитор',
				},
				{
					id: 6,
					title: '2-ой режиссер',
				},
			],
			link: 1506,
		},
		{
			id: 5,
			title: 'вакансии в спб',
			total: 968,
			min: '50 000',
			max: '290 000',
			list: [
				{
					id: 1,
					title: 'CG Супервайзер',
				},
				{
					id: 2,
					title: 'Военный консультант',
				},
				{
					id: 3,
					title: 'Звукорежиссер',
				},
				{
					id: 4,
					title: 'Хореограф',
				},
				{
					id: 5,
					title: 'Оператор - постановщик',
				},
				{
					id: 6,
					title: 'Асс по реквизиту',
				},
			],
			link: 962,
		},
	];

	const iconCards = [
		{ color: '#a6e1bf', path: 'images/rocketLaunch.svg' },
		{ color: '#ffb097', path: 'images/fire.svg' },
		{ color: '#a8e8ec', path: 'images/leaf.svg' },
		{ color: '#bbccc8', path: 'images/buildings.svg' },
		{ color: '#b0d2c1', path: 'images/maskHappy.svg' },
	];

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				{cards.map((card, index) => (
					<Card cards={card} iconCard={iconCards[index]} key={card.id} />
				))}

				<div className={stylesCard.container}>
					<div>
						<h2 className={stylesCard.title}>другие города</h2>
						<div className={cn(stylesCard.count, stylesCard.city)}>
							<span className={stylesCard.count_num}>125</span>
							<span className={stylesCard.count_text}>Городов</span>
						</div>
						<div className={stylesCard.inner}>
							<div className={stylesCard.item}>Минск</div>
							<div className={stylesCard.item}>Сочи</div>
							<div className={stylesCard.item}>Краснодар</div>
							<div className={stylesCard.item}>Владивосток</div>
							<div className={stylesCard.item}>Тверь</div>
							<div className={stylesCard.item}>Нижний Новгород</div>
							<div className={stylesCard.item}>Архангельск</div>
						</div>
						<a href='/' className={stylesCard.link}>
							Все города
						</a>
					</div>

					<div className={stylesCard.icon} style={{ backgroundColor: '#c2d4ff' }}>
						<img src='images/globe.svg' alt='icon' />
					</div>
				</div>
				<div className={cn(stylesCard.container, stylesCard.department)}>
					<div>
						<h2 className={stylesCard.title}>по департаментам</h2>
						<div className={cn(stylesCard.count, stylesCard.department)}>
							<span className={stylesCard.count_num}>38</span>
							<span className={stylesCard.count_text}>Позиций</span>
						</div>
						<div className={stylesCard.inner}>
							<div className={stylesCard.item}>Режиссерский</div>
							<div className={stylesCard.item}>Операторский</div>
							<div className={stylesCard.item}>Продюсерский</div>
							<div className={stylesCard.item}>Административный</div>
							<div className={stylesCard.item}>Костюмерный</div>
							<div className={stylesCard.item}>Гримерный</div>
							<div className={stylesCard.item}>Реквизиторский</div>
							<div className={stylesCard.item}>Художественный</div>
							<div className={stylesCard.item}>Транспорный</div>
							<div className={stylesCard.item}>Сценарный</div>
						</div>
						<a href='/' className={stylesCard.link}>
							Смотреть все
						</a>
					</div>

					<div className={stylesCard.icon} style={{ backgroundColor: '#C4BEC4' }}>
						<img src='images/suitcaseSimple.svg' alt='icon' />
					</div>
				</div>
				<div className={cn(stylesCard.container, stylesCard.professions)}>
					<div>
						<h2 className={stylesCard.title}>работа по профессиям</h2>
						<div className={cn(stylesCard.count, stylesCard.department)}>
							<span className={stylesCard.count_num}>155</span>
							<span className={stylesCard.count_text}>Профессий</span>
						</div>
						<div className={stylesCard.wrapper}>
							<div className={stylesCard.inner}>
								<div className={stylesCard.item}>Режиссер</div>
								<div className={stylesCard.item}>Оператор</div>
								<div className={stylesCard.item}>Осветитель</div>
								<div className={stylesCard.item}>Художник - постановщик</div>
								<div className={stylesCard.item}>Асс режиссера (хлопушка)</div>
								<div className={stylesCard.item}>Скрипт - супервайзер</div>
								<div className={stylesCard.item}>Оператор дрона</div>
								<div className={stylesCard.item}>Гример</div>
								<div className={stylesCard.item}>Художник по костюмам</div>
								<div className={stylesCard.item}>Реквизитор</div>
							</div>
							<div className={stylesCard.inner}>
								<div className={stylesCard.item}>Модель по свету</div>
								<div className={stylesCard.item}>Консультант по истории </div>
								<div className={stylesCard.item}>Консультант по оружию</div>
								<div className={stylesCard.item}>Продюсер постпродакшн</div>
								<div className={stylesCard.item}>Дресировщики хищников</div>
								<div className={stylesCard.item}>Кинолог</div>
								<div className={stylesCard.item}>Языковед</div>
								<div className={stylesCard.item}>Музыкант</div>
								<div className={stylesCard.item}>Расскадровщик</div>
								<div className={stylesCard.item}>Дубляж</div>
							</div>
						</div>
						<a href='/' className={stylesCard.link}>
							Смотреть все
						</a>
					</div>

					<div className={stylesCard.icon} style={{ backgroundColor: '#D1C4B9' }}>
						<img src='images/users.svg' alt='icon' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cards;
