import cn from 'classnames';
import { useMedia } from 'react-use';
import NavLink from 'components/NavLink/NavLink';
import styles from 'components/Cards/Cards.module.scss';
import Resumes from 'components/Resumes/Resumes';
import EmployerSteps from 'components/EmployerSteps/EmployerSteps';

function Employer() {
    const isLaptop = useMedia('(max-width: 1280px)');

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.card__container}>
                        <h2 className={styles.title}>Кандидаты в Москве</h2>
                        <div className={styles.count}>
                            <span className={styles.count_num}>1512</span>
                            <span className={styles.count_text}>Резюме</span>
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
                        <h2 className={styles.title}>{isLaptop ? 'по профессиям' : 'Резюме по профессиям'}</h2>
                        <div className={cn(styles.count, styles.department)}>
                            <span className={styles.count_num}>155</span>
                            <span className={styles.count_text}>{isLaptop ? 'Позиций' : 'Профессий'}</span>
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
            </div>
            <Resumes />
            <EmployerSteps />
        </>
    );
}

export default Employer;
