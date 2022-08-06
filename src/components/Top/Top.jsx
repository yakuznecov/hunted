import { Link, useLocation } from 'react-router-dom';

import NavLink from '../NavLink/NavLink';
import styles from './Top.module.scss';
import cn from 'classnames';

function Top() {
    const location = useLocation();

    return (
        <section className={cn(styles.container, { [styles.employer]: location.pathname === '/employer' })}>
            <div className={cn(styles.wrapper, { [styles.employer]: location.pathname === '/employer' })}>
                <div className={styles.content}>
                    <h3 className={styles.caption}>съемочная группа. реквизит. объекты. продакшены</h3>

                    {location.pathname === '/' && (
                        <h1 className={styles.title}>
                            Кинолифт | Hunted <br /> Это больше, чем просто поиск работы в кино
                        </h1>
                    )}
                    {location.pathname === '/employer' && (
                        <h1 className={styles.title}>
                            Разместите вакансию и найдите сотрудника уже сегодня <br /> на Кинолифт | Hunted
                        </h1>
                    )}

                    <div className={styles.search}>
                        <label className={styles.input__box}>
                            {location.pathname === '/' && (
                                <input
                                    className={styles.input}
                                    placeholder={window.innerWidth >= 480 ? 'Профессия или компания' : 'Профессия'}
                                    type="text"
                                />
                            )}
                            {location.pathname === '/employer' && (
                                <input
                                    className={styles.input}
                                    placeholder={window.innerWidth >= 480 ? 'Резюме или навыки' : 'Резюме'}
                                    type="text"
                                />
                            )}

                            <span className={styles.input_icon}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.7599 4.21376C5.7599 3.12681 4.86462 2.24192 3.76229 2.24192C2.66113 2.24192 1.76467 3.12681 1.76467 4.21376C1.76467 5.30072 2.66113 6.18561 3.76229 6.18561C4.86462 6.18561 5.7599 5.30072 5.7599 4.21376ZM7.52457 4.21376C7.52457 6.26109 5.83754 7.92753 3.76229 7.92753C1.68821 7.92753 0 6.26109 0 4.21376C0 2.16643 1.68821 0.5 3.76229 0.5C5.83754 0.5 7.52457 2.16643 7.52457 4.21376ZM20 4.214C20 3.73323 19.6047 3.34304 19.1177 3.34304H11.8825C11.3954 3.34304 11.0002 3.73323 11.0002 4.214C11.0002 4.69476 11.3954 5.08495 11.8825 5.08495H19.1177C19.6047 5.08495 20 4.69476 20 4.214ZM14.2397 15.7862C14.2397 16.8732 15.135 17.7581 16.2374 17.7581C17.3397 17.7581 18.235 16.8732 18.235 15.7862C18.235 14.6981 17.3397 13.8144 16.2374 13.8144C15.135 13.8144 14.2397 14.6981 14.2397 15.7862ZM12.4751 15.7862C12.4751 13.7377 14.1621 12.0725 16.2374 12.0725C18.3126 12.0725 19.9996 13.7377 19.9996 15.7862C19.9996 17.8336 18.3126 19.5 16.2374 19.5C14.1621 19.5 12.4751 17.8336 12.4751 15.7862ZM0.883161 14.9149H8.11715C8.6042 14.9149 8.99949 15.3051 8.99949 15.7859C8.99949 16.2667 8.6042 16.6568 8.11715 16.6568H0.883161C0.396111 16.6568 0.000823515 16.2667 0.000823515 15.7859C0.000823515 15.3051 0.396111 14.9149 0.883161 14.9149Z"
                                        fill="#627E8B"
                                    />
                                </svg>
                            </span>
                        </label>

                        {location.pathname === '/' && (
                            <NavLink className={styles.input_btn} to={'/'}>
                                {window.innerWidth >= 480 ? 'Найти работу' : 'Найти'}
                            </NavLink>
                        )}

                        {location.pathname === '/employer' && (
                            <NavLink className={cn(styles.input_btn, styles.employer)} to={'/'}>
                                {window.innerWidth >= 480 ? 'Найти сотрудника' : 'Найти'}
                            </NavLink>
                        )}
                    </div>

                    {location.pathname === '/' && (
                        <Link className={styles.link} to={'/employer'}>
                            Я ищу сотрудника
                        </Link>
                    )}

                    {location.pathname === '/employer' && (
                        <Link className={styles.link} to={'/'}>
                            Я ищу работу
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Top;
