import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import cn from 'classnames';

function Header({ onSwitch, active }) {
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
        <header className={`${styles.header} ${navbar ? styles.active : ''}`}>
            <div className={`${styles.menu} ${navbar ? styles.active : ''}`}>
                <a href="/" className={styles.logo} aria-label="Hunted" alt="Hunted">
                    <img src="images/logo/logo.svg" alt="logo" />
                </a>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li
                            className={`${styles.item} ${active === 'employer' ? styles.employer : ''}`}
                            onClick={(e) => onSwitch('applicant', e)}
                            onMouseUp={() => window.scrollTo({ top: 0 })}
                        >
                            <span className={styles.title}>Соискателям</span>
                        </li>
                        <li
                            className={`${styles.item} ${active === 'employer' ? styles.employer : ''}`}
                            onClick={(e) => onSwitch('employer', e)}
                            onMouseUp={() => window.scrollTo({ top: 0 })}
                        >
                            <span className={styles.title}>Работодателям</span>
                        </li>
                        <li className={`${styles.item} ${active === 'employer' ? styles.employer : ''}`}>
                            <span className={styles.title}>Тарифные планы</span>
                        </li>
                    </ul>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a href="/" className={styles.title}>
                                Войти
                            </a>
                            {active === 'applicant' && (
                                <a href="/" className={styles.create}>
                                    Создать резюме
                                </a>
                            )}
                            {active === 'employer' && (
                                <a href="/" className={cn(styles.create, styles.employer)}>
                                    Разместить вакансию
                                </a>
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
