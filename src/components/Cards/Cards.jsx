import styles from './Cards.module.scss';
import cn from 'classnames';

function Cards({ active }) {
    return (
        <section className={styles.container}>
            {active === 'applicant' && (
                <div className={styles.wrapper}>
                    <div className={styles.card__container}>
                        <div>
                            <h2 className={styles.title}>вакансии дня</h2>
                            <div className={styles.count}>
                                <span className={styles.count_num}>24</span>
                                <span className={styles.count_text}>Вакансии</span>
                            </div>
                            <div className={styles.sum}>40 000 - 300 000 руб.</div>
                            <div className={styles.inner}>
                                <div className={styles.item}>Администратор площадки</div>
                                <div className={styles.item}>Помощник режиссера</div>
                                <div className={styles.item}>Звукорежиссер</div>
                                <div className={styles.item}>Каскадер</div>
                                <div className={styles.item}>Оператор - постановщик</div>
                                <div className={styles.item}>2-ой режиссер</div>
                            </div>
                            <a href="/" className={styles.link}>
                                Ещё 18 профессий
                            </a>
                        </div>

                        <div className={styles.icon} style={{ backgroundColor: '#a6e1bf' }}>
                            <img src="images/rocketLaunch.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={styles.card__container}>
                        <div>
                            <h2 className={styles.title}>Горячие вакансии</h2>
                            <div className={styles.count}>
                                <span className={styles.count_num}>14</span>
                                <span className={styles.count_text}>Вакансий</span>
                            </div>
                            <div className={styles.sum}>2 000 - 35 000 руб.</div>
                            <div className={styles.inner}>
                                <div className={styles.item}>Хлопушка</div>
                                <div className={styles.item}>Консультант по животным</div>
                                <div className={styles.item}>Рабочий на площадку</div>
                                <div className={styles.item}>Декоратор</div>
                                <div className={styles.item}>Оператор - постановщик</div>
                                <div className={styles.item}>Работник сцены</div>
                            </div>
                            <a href="/" className={styles.link}>
                                Ещё 8 профессий
                            </a>
                        </div>

                        <div className={styles.icon} style={{ backgroundColor: '#ffb097' }}>
                            <img src="images/fire.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={styles.card__container}>
                        <div>
                            <h2 className={styles.title}>Компании дня</h2>
                            <div className={styles.count}>
                                <span className={styles.count_num}>108</span>
                                <span className={styles.count_text}>Компаний</span>
                            </div>
                            <div className={styles.sum}>50 000 - 270 000 руб.</div>
                            <div className={styles.inner}>
                                <div className={styles.item}>Базилевс</div>
                                <div className={styles.item}>Первый канал</div>
                                <div className={styles.item}>Студия Первоцвет</div>
                                <div className={styles.item}>Военфильм</div>
                                <div className={styles.item}>2х2 продакшн</div>
                                <div className={styles.item}>Единая Медиа Группа</div>
                            </div>
                            <a href="/" className={styles.link}>
                                Все компании
                            </a>
                        </div>

                        <div className={styles.icon} style={{ backgroundColor: '#a8e8ec' }}>
                            <img src="images/leaf.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={styles.card__container}>
                        <div>
                            <h2 className={styles.title}>Вакансии в Москве</h2>
                            <div className={styles.count}>
                                <span className={styles.count_num}>1512</span>
                                <span className={styles.count_text}>Вакансий</span>
                            </div>
                            <div className={styles.sum}>75 000 - 380 000 руб.</div>
                            <div className={styles.inner}>
                                <div className={styles.item}>Кастинг - директор</div>
                                <div className={styles.item}>Художник по костюмам</div>
                                <div className={styles.item}>Асс художника по костюмам</div>
                                <div className={styles.item}>Каскадер</div>
                                <div className={styles.item}>Реквизитор</div>
                                <div className={styles.item}>2-ой режиссер</div>
                            </div>
                            <a href="/" className={styles.link}>
                                Ещё 1506 профессий
                            </a>
                        </div>

                        <div className={styles.icon} style={{ backgroundColor: '#bbccc8' }}>
                            <img src="images/buildings.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={styles.card__container}>
                        <div>
                            <h2 className={styles.title}>Вакансии в СПБ</h2>
                            <div className={styles.count}>
                                <span className={styles.count_num}>968</span>
                                <span className={styles.count_text}>Вакансий</span>
                            </div>
                            <div className={styles.sum}>50 000 - 290 000 руб.</div>
                            <div className={styles.inner}>
                                <div className={styles.item}>CG Супервайзер</div>
                                <div className={styles.item}>Военный консультант</div>
                                <div className={styles.item}>Звукорежиссер</div>
                                <div className={styles.item}>Хореограф</div>
                                <div className={styles.item}>Оператор - постановщик</div>
                                <div className={styles.item}>Асс по реквизиту</div>
                            </div>
                            <a href="/" className={styles.link}>
                                Ещё 1506 профессий
                            </a>
                        </div>

                        <div className={styles.icon} style={{ backgroundColor: '#b0d2c1' }}>
                            <img src="images/maskHappy.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={styles.card__container}>
                        <div>
                            <h2 className={styles.title}>другие города</h2>
                            <div className={cn(styles.count, styles.city)}>
                                <span className={styles.count_num}>125</span>
                                <span className={styles.count_text}>Городов</span>
                            </div>
                            <div className={styles.inner}>
                                <div className={styles.item}>Минск</div>
                                <div className={styles.item}>Сочи</div>
                                <div className={styles.item}>Краснодар</div>
                                <div className={styles.item}>Владивосток</div>
                                <div className={styles.item}>Тверь</div>
                                <div className={styles.item}>Нижний Новгород</div>
                                <div className={styles.item}>Архангельск</div>
                            </div>
                            <a href="/" className={styles.link}>
                                Все города
                            </a>
                        </div>

                        <div className={styles.icon} style={{ backgroundColor: '#c2d4ff' }}>
                            <img src="images/globe.svg" alt="icon" />
                        </div>
                    </div>
                    <div className={cn(styles.card__container, styles.department)}>
                        <div>
                            <h2 className={styles.title}>по департаментам</h2>
                            <div className={cn(styles.count, styles.department)}>
                                <span className={styles.count_num}>38</span>
                                <span className={styles.count_text}>Позиций</span>
                            </div>
                            <div className={styles.inner}>
                                <div className={styles.item}>Режиссерский</div>
                                <div className={styles.item}>Операторский</div>
                                <div className={styles.item}>Продюсерский</div>
                                <div className={styles.item}>Административный</div>
                                <div className={styles.item}>Костюмерный</div>
                                <div className={styles.item}>Гримерный</div>
                                <div className={styles.item}>Реквизиторский</div>
                                <div className={styles.item}>Художественный</div>
                                <div className={styles.item}>Транспорный</div>
                                <div className={styles.item}>Сценарный</div>
                            </div>
                            <a href="/" className={styles.link}>
                                Смотреть все
                            </a>
                        </div>

                        <div className={styles.icon} style={{ backgroundColor: '#C4BEC4' }}>
                            <img src="images/suitcaseSimple.svg" alt="icon" />
                        </div>
                    </div>
                    <div className={cn(styles.card__container, styles.professions)}>
                        <div>
                            <h2 className={styles.title}>
                                {window.innerWidth > 1280 ? 'работа по профессиям' : 'по профессиям'}
                            </h2>
                            <div className={cn(styles.count, styles.department)}>
                                <span className={styles.count_num}>155</span>
                                <span className={styles.count_text}>Профессий</span>
                            </div>
                            <div className={styles.card__wrapper}>
                                <div className={styles.inner}>
                                    <div className={styles.item}>Режиссер</div>
                                    <div className={styles.item}>Оператор</div>
                                    <div className={styles.item}>Осветитель</div>
                                    <div className={styles.item}>Художник - постановщик</div>
                                    <div className={styles.item}>Асс режиссера (хлопушка)</div>
                                    <div className={styles.item}>Скрипт - супервайзер</div>
                                    <div className={styles.item}>Оператор дрона</div>
                                    <div className={styles.item}>Гример</div>
                                    <div className={styles.item}>Художник по костюмам</div>
                                    <div className={styles.item}>Реквизитор</div>
                                </div>
                                <div className={styles.inner}>
                                    <div className={styles.item}>Модель по свету</div>
                                    <div className={styles.item}>Консультант по истории </div>
                                    <div className={styles.item}>Консультант по оружию</div>
                                    <div className={styles.item}>Продюсер постпродакшн</div>
                                    <div className={styles.item}>Дресировщики хищников</div>
                                    <div className={styles.item}>Кинолог</div>
                                    <div className={styles.item}>Языковед</div>
                                    <div className={styles.item}>Музыкант</div>
                                    <div className={styles.item}>Расскадровщик</div>
                                    <div className={styles.item}>Дубляж</div>
                                </div>
                            </div>
                            <a href="/" className={styles.link}>
                                Смотреть все
                            </a>
                        </div>

                        <div className={styles.icon} style={{ backgroundColor: '#D1C4B9' }}>
                            <img src="images/users.svg" alt="icon" />
                        </div>
                    </div>
                </div>
            )}

            {active === 'employer' && (
                <div className={styles.wrapper}>
                    <div className={styles.card__container}>
                        <h2 className={styles.title}>Кандидаты в Москве</h2>
                        <div className={styles.count}>
                            <span className={styles.count_num}>1512</span>
                            <span className={styles.count_text}>Резюме</span>
                        </div>
                        <div className={styles.sum}>75 000 - 380 000 руб.</div>
                        <div className={styles.inner}>
                            <div className={styles.item}>Кастинг - директор</div>
                            <div className={styles.item}>Художник по костюмам</div>
                            <div className={styles.item}>Асс художника по костюмам</div>
                            <div className={styles.item}>Каскадер</div>
                            <div className={styles.item}>Реквизитор</div>
                            <div className={styles.item}>2-ой режиссер</div>
                        </div>
                        <a href="/" className={styles.link}>
                            Ещё 1506 резюме
                        </a>

                        <div className={styles.icon} style={{ backgroundColor: '#bbccc8' }}>
                            <img src="images/buildings.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={styles.card__container}>
                        <h2 className={styles.title}>Кандидаты в СПБ</h2>
                        <div className={styles.count}>
                            <span className={styles.count_num}>968</span>
                            <span className={styles.count_text}>Резюме</span>
                        </div>
                        <div className={styles.sum}>50 000 - 290 000 руб.</div>
                        <div className={styles.inner}>
                            <div className={styles.item}>CG Супервайзер</div>
                            <div className={styles.item}>Военный консультант</div>
                            <div className={styles.item}>Звукорежиссер</div>
                            <div className={styles.item}>Хореограф</div>
                            <div className={styles.item}>Оператор - постановщик</div>
                            <div className={styles.item}>Асс по реквизиту</div>
                        </div>
                        <a href="/" className={styles.link}>
                            Ещё 962 резюме
                        </a>

                        <div className={styles.icon} style={{ backgroundColor: '#b0d2c1' }}>
                            <img src="images/maskHappy.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={cn(styles.card__container, styles.other_cities)}>
                        <h2 className={styles.title}>другие города</h2>
                        <div className={cn(styles.count, styles.city)}>
                            <span className={styles.count_num}>125</span>
                            <span className={styles.count_text}>Городов</span>
                        </div>
                        <div className={styles.inner}>
                            <div className={styles.item}>Минск</div>
                            <div className={styles.item}>Сочи</div>
                            <div className={styles.item}>Краснодар</div>
                            <div className={styles.item}>Владивосток</div>
                            <div className={styles.item}>Тверь</div>
                            <div className={styles.item}>Нижний Новгород</div>
                            <div className={styles.item}>Архангельск</div>
                        </div>
                        <a href="/" className={styles.link}>
                            Все города
                        </a>

                        <div className={styles.icon} style={{ backgroundColor: '#c2d4ff' }}>
                            <img src="images/globe.svg" alt="icon" />
                        </div>
                    </div>
                    <div className={cn(styles.card__container, styles.department)}>
                        <h2 className={styles.title}>по департаментам</h2>
                        <div className={cn(styles.count, styles.department)}>
                            <span className={styles.count_num}>38</span>
                            <span className={styles.count_text}>Позиций</span>
                        </div>
                        <div className={styles.inner}>
                            <div className={styles.item}>Режиссерский</div>
                            <div className={styles.item}>Операторский</div>
                            <div className={styles.item}>Продюсерский</div>
                            <div className={styles.item}>Административный</div>
                            <div className={styles.item}>Костюмерный</div>
                            <div className={styles.item}>Гримерный</div>
                            <div className={styles.item}>Реквизиторский</div>
                            <div className={styles.item}>Художественный</div>
                            <div className={styles.item}>Транспорный</div>
                            <div className={styles.item}>Сценарный</div>
                        </div>
                        <a href="/" className={styles.link}>
                            Смотреть все
                        </a>

                        <div className={styles.icon} style={{ backgroundColor: '#C4BEC4' }}>
                            <img src="images/suitcaseSimple.svg" alt="icon" />
                        </div>
                    </div>
                    <div className={cn(styles.card__container, styles.professions)}>
                        <h2 className={styles.title}>
                            {window.innerWidth >= 1280 ? 'Резюме по профессиям' : 'по профессиям'}
                        </h2>
                        <div className={cn(styles.count, styles.department)}>
                            <span className={styles.count_num}>155</span>
                            <span className={styles.count_text}>
                                {window.innerWidth >= 1280 ? 'Профессий' : 'Позиций'}
                            </span>
                        </div>
                        <div className={styles.card__wrapper}>
                            <div className={styles.inner}>
                                <div className={styles.item}>Режиссер</div>
                                <div className={styles.item}>Оператор</div>
                                <div className={styles.item}>Осветитель</div>
                                <div className={styles.item}>Художник - постановщик</div>
                                <div className={styles.item}>Асс режиссера (хлопушка)</div>
                                <div className={styles.item}>Скрипт - супервайзер</div>
                                <div className={styles.item}>Оператор дрона</div>
                                <div className={styles.item}>Гример</div>
                                <div className={styles.item}>Художник по костюмам</div>
                                <div className={styles.item}>Реквизитор</div>
                            </div>
                            <div className={styles.inner}>
                                <div className={styles.item}>Модель по свету</div>
                                <div className={styles.item}>Консультант по истории </div>
                                <div className={styles.item}>Консультант по оружию</div>
                                <div className={styles.item}>Продюсер постпродакшн</div>
                                <div className={styles.item}>Дресировщики хищников</div>
                                <div className={styles.item}>Кинолог</div>
                                <div className={styles.item}>Языковед</div>
                                <div className={styles.item}>Музыкант</div>
                                <div className={styles.item}>Расскадровщик</div>
                                <div className={styles.item}>Дубляж</div>
                            </div>
                        </div>
                        <a href="/" className={styles.link}>
                            Смотреть все
                        </a>

                        <div className={styles.icon} style={{ backgroundColor: '#D1C4B9' }}>
                            <img src="images/users.svg" alt="icon" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Cards;
