import styles from './BurgerMenu.module.scss';

function BurgerMenu() {
    return (
        <div className={styles.container}>
            <input id={styles.toggle} type="checkbox" />
            <label className={styles.btn} htmlFor={styles.toggle}>
                <span></span>
            </label>
            <div className={styles.menu}>
                <div className={styles.wrapper}>
                    <div className={styles.line_box}>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.inner}>
                        <div className={styles.scope}>
                            <h3 className={styles.title}>Возможности</h3>
                            <div className={styles.scope__wrapper}>
                                <a href="#" className={styles.scope_item}>
                                    <div className={styles.scope_icon}>
                                        <img src="images/scope-1.svg" alt="applicant" />
                                    </div>
                                    <div className={styles.scope_info}>
                                        <h3 className={styles.scope_title}>Соискателям</h3>
                                        <p className={styles.scope_text}>
                                            Если вы находитесь в поиске работы, то вам сюда
                                        </p>
                                    </div>
                                </a>

                                <a href="#" className={styles.scope_item}>
                                    <div className={styles.scope_icon}>
                                        <img src="images/scope-2.svg" alt="employer" />
                                    </div>
                                    <div className={styles.scope_info}>
                                        <h3 className={styles.scope_title}>Работодателям</h3>
                                        <p className={styles.scope_text}>
                                            Для тех, кто разыскивает специалистов в свою команду
                                        </p>
                                    </div>
                                </a>

                                <a href="#" className={styles.scope_item}>
                                    <div className={styles.scope_icon}>
                                        <img src="images/scope-3.svg" alt="plans" />
                                    </div>
                                    <div className={styles.scope_info}>
                                        <h3 className={styles.scope_title}>Тарифные планы</h3>
                                        <p className={styles.scope_text}>
                                            Различные варианты, приобретайте только нужные вам услуги
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className={styles.help}>
                            <h3 className={styles.title}>справка</h3>
                            <div className={styles.help__top}>
                                <a href="#" className={styles.help_link}>
                                    FAQ
                                </a>
                                <a href="#" className={styles.help_link}>
                                    Блог
                                </a>
                                <a href="#" className={styles.help_link}>
                                    Связаться с нами
                                </a>
                            </div>
                            <h3 className={styles.title}>правила сервиса</h3>
                            <div className={styles.help__rules}>
                                <a href="#" className={styles.help_link}>
                                    Правила сервиса
                                </a>
                                <a href="#" className={styles.help_link}>
                                    Конфиденциальность
                                </a>
                                <a href="#" className={styles.help_link}>
                                    Файлы cookies
                                </a>
                                <a href="#" className={styles.help_link}>
                                    Обратная связь
                                </a>
                            </div>
                        </div>

                        <div className={styles.accordion}>
                            <div className={cn(styles.accordion__item)}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;
