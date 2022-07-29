import styles from './Header.module.scss';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import cn from 'classnames';

function Header({ onSwitch, active }) {
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <a href="/" className={styles.logo} aria-label="Hunted" alt="Hunted">
                    <img src="images/logo/logo.svg" alt="logo" />
                </a>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.item} onClick={(e) => onSwitch('applicant', e)}>
                            <span className={styles.title}>Соискателям</span>
                        </li>
                        <li className={styles.item} onClick={(e) => onSwitch('employer', e)}>
                            <span className={styles.title}>Работодателям</span>
                        </li>
                        <li className={styles.item}>
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
