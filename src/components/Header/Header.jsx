import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLink from 'components/NavLink/NavLink';
import styles from './Header.module.scss';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import cn from 'classnames';

function Header({}) {
    const location = useLocation();
    const [navbar, setNavbar] = useState(false);

    const stickyNavbar = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickyNavbar);
    });

    return (
        <header className={cn(styles.header, { [styles.active]: navbar })}>
            <div className={cn(styles.menu, { [styles.active]: navbar })}>
                <Link to="/" className={styles.logo} alt="Hunted">
                    <img src="images/logo/logo.svg" alt="logo" />
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.item} onMouseUp={() => window.scrollTo({ top: 0 })}>
                            <Link to="/" className={styles.title}>
                                Соискателям
                            </Link>
                        </li>

                        <li className={styles.item} onMouseUp={() => window.scrollTo({ top: 0 })}>
                            <Link to="/employer" className={styles.title}>
                                Работодателям
                            </Link>
                        </li>

                        <li className={styles.item}>
                            <span className={styles.title}>Тарифные планы</span>
                        </li>
                    </ul>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <NavLink to="/" className={styles.title}>
                                Войти
                            </NavLink>

                            {location.pathname === '/' && (
                                <NavLink to={'/'} className={styles.create}>
                                    Создать резюме
                                </NavLink>
                            )}

                            {location.pathname === '/employer' && (
                                <NavLink to={'/'} className={cn(styles.create, styles.employer)}>
                                    Разместить вакансию
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </nav>
                <BurgerMenu />
            </div>
        </header>
    );
}

export default Header;
