import NavLink from '../components/NavLink/NavLink';
import styles from '../components/Cards/Cards.module.scss';
import cn from 'classnames';

function Home() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.card__container}>
                        <h2 className={styles.title}>вакансии дня</h2>
                        <div className={styles.count}>
                            <span className={styles.count_num}>24</span>
                            <span className={styles.count_text}>Вакансии</span>
                        </div>
                        <div className={styles.sum}>40 000 - 300 000 руб.</div>
                        <div className={styles.inner}>
                            <NavLink className={styles.item} to={'/'}>
                                Администратор площадки
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Помощник режиссера
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Звукорежиссер
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Каскадер
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Оператор - постановщик
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                2-ой режиссер
                            </NavLink>
                        </div>
                        <a href="/" className={styles.link}>
                            Ещё 18 профессий
                        </a>

                        <div className={styles.icon} style={{ backgroundColor: '#a6e1bf' }}>
                            <img src="images/rocketLaunch.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={styles.card__container}>
                        <h2 className={styles.title}>Горячие вакансии</h2>
                        <div className={styles.count}>
                            <span className={styles.count_num}>14</span>
                            <span className={styles.count_text}>Вакансий</span>
                        </div>
                        <div className={styles.sum}>2 000 - 35 000 руб.</div>
                        <div className={styles.inner}>
                            <NavLink className={styles.item} to={'/'}>
                                Хлопушка
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Консультант по животным
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Рабочий на площадку
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Декоратор
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Оператор - постановщик
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Работник сцены
                            </NavLink>
                        </div>
                        <a href="/" className={styles.link}>
                            Ещё 8 профессий
                        </a>

                        <div className={styles.icon} style={{ backgroundColor: '#ffb097' }}>
                            <img src="images/fire.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={styles.card__container}>
                        <h2 className={styles.title}>Компании дня</h2>
                        <div className={styles.count}>
                            <span className={styles.count_num}>108</span>
                            <span className={styles.count_text}>Компаний</span>
                        </div>
                        <div className={styles.sum}>50 000 - 270 000 руб.</div>
                        <div className={styles.inner}>
                            <NavLink className={styles.item} to={'/'}>
                                Базилевс
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Первый канал
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Студия Первоцвет
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Военфильм
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                2х2 продакшн
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Единая Медиа Группа
                            </NavLink>
                        </div>
                        <a href="/" className={styles.link}>
                            Все компании
                        </a>

                        <div className={styles.icon} style={{ backgroundColor: '#a8e8ec' }}>
                            <img src="images/leaf.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={styles.card__container}>
                        <h2 className={styles.title}>Вакансии в Москве</h2>
                        <div className={styles.count}>
                            <span className={styles.count_num}>1512</span>
                            <span className={styles.count_text}>Вакансий</span>
                        </div>
                        <div className={styles.sum}>75 000 - 380 000 руб.</div>
                        <div className={styles.inner}>
                            <NavLink className={styles.item} to={'/'}>
                                Кастинг - директор
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Художник по костюмам
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Асс художника по костюмам
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Каскадер
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Реквизитор
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                2-ой режиссер
                            </NavLink>
                        </div>
                        <a href="/" className={styles.link}>
                            Ещё 1506 профессий
                        </a>

                        <div className={styles.icon} style={{ backgroundColor: '#bbccc8' }}>
                            <img src="images/buildings.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={styles.card__container}>
                        <h2 className={styles.title}>Вакансии в СПБ</h2>
                        <div className={styles.count}>
                            <span className={styles.count_num}>968</span>
                            <span className={styles.count_text}>Вакансий</span>
                        </div>
                        <div className={styles.sum}>50 000 - 290 000 руб.</div>
                        <div className={styles.inner}>
                            <NavLink className={styles.item} to={'/'}>
                                CG Супервайзер
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Военный консультант
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Звукорежиссер
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Хореограф
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Оператор - постановщик
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Асс по реквизиту
                            </NavLink>
                        </div>
                        <a href="/" className={styles.link}>
                            Ещё 1506 профессий
                        </a>

                        <div className={styles.icon} style={{ backgroundColor: '#b0d2c1' }}>
                            <img src="images/maskHappy.svg" alt="icon" />
                        </div>
                    </div>

                    <div className={styles.card__container}>
                        <h2 className={styles.title}>другие города</h2>
                        <div className={cn(styles.count, styles.city)}>
                            <span className={styles.count_num}>125</span>
                            <span className={styles.count_text}>Городов</span>
                        </div>
                        <div className={styles.inner}>
                            <NavLink className={styles.item} to={'/'}>
                                Минск
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Сочи
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Краснодар
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Владивосток
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Тверь
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Нижний Новгород
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Архангельск
                            </NavLink>
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
                            <NavLink className={styles.item} to={'/'}>
                                Режиссерский
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Операторский
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Продюсерский
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Административный
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Костюмерный
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Гримерный
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Реквизиторский
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Художественный
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Транспорный
                            </NavLink>
                            <NavLink className={styles.item} to={'/'}>
                                Сценарный
                            </NavLink>
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
                            {window.innerWidth > 1280 ? 'работа по профессиям' : 'по профессиям'}
                        </h2>
                        <div className={cn(styles.count, styles.department)}>
                            <span className={styles.count_num}>155</span>
                            <span className={styles.count_text}>Профессий</span>
                        </div>
                        <div className={styles.card__wrapper}>
                            <div className={styles.inner}>
                                <NavLink className={styles.item} to={'/'}>
                                    Режиссер
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Оператор
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Осветитель
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Художник - постановщик
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Асс режиссера (хлопушка)
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Скрипт - супервайзер
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Оператор дрона
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Гример
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Художник по костюмам
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Реквизитор
                                </NavLink>
                            </div>
                            <div className={styles.inner}>
                                <NavLink className={styles.item} to={'/'}>
                                    Модель по свету
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Консультант по истории
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Консультант по оружию
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Продюсер постпродакшн
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Дресировщики хищников
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Кинолог
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Языковед
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Музыкант
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Расскадровщик
                                </NavLink>
                                <NavLink className={styles.item} to={'/'}>
                                    Дубляж
                                </NavLink>
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
            </section>
        </>
    );
}

export default Home;
