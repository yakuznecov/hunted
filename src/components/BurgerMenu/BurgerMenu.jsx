import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import cn from 'classnames';

function BurgerMenu() {
    const [burgerTab, setBurgerTab] = useState(null);

    const toggleTab = (tab) => {
        if (tab === burgerTab) {
            setBurgerTab(null);
        } else {
            setBurgerTab(tab);
        }
    };
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
                            <div className={`${styles.accordion__item} ${burgerTab === 0 ? styles.active : ''}`}>
                                <button
                                    className={styles.accordion__item_btn}
                                    onClick={() => {
                                        toggleTab(0);
                                    }}
                                >
                                    <span className={styles.accordion__item_title}>возможности</span>
                                    <img
                                        className={styles.accordion__item_icon}
                                        src="images/caretDown-burger.svg"
                                        alt="arrow"
                                    />
                                </button>
                                <SlideDown className={styles.accordion__item_content} closed={burgerTab !== 0}>
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
                                </SlideDown>
                            </div>

                            <div className={`${styles.accordion__item} ${burgerTab === 1 ? styles.active : ''}`}>
                                <button
                                    className={styles.accordion__item_btn}
                                    onClick={() => {
                                        toggleTab(1);
                                    }}
                                >
                                    <span className={styles.accordion__item_title}>информация</span>
                                    <img
                                        className={styles.accordion__item_icon}
                                        src="images/caretDown-burger.svg"
                                        alt="arrow"
                                    />
                                </button>
                                <SlideDown className={styles.accordion__item_content} closed={burgerTab !== 1}>
                                    <h3 className={styles.title}>Справка</h3>
                                    <div className={styles.help__top}>
                                        <a href="#" className={styles.help_link}>
                                            <img className={styles.help_link_icon} src="images/faq-24.svg" alt="FAQ" />
                                            <span>FAQ</span>
                                        </a>
                                        <a href="#" className={styles.help_link}>
                                            <img
                                                className={styles.help_link_icon}
                                                src="images/userSquare.svg"
                                                alt="Blog"
                                            />
                                            <span>Блог</span>
                                        </a>
                                        <a href="#" className={styles.help_link}>
                                            <img
                                                className={styles.help_link_icon}
                                                src="images/contactUs.svg"
                                                alt="contact us"
                                            />
                                            <span>Связаться с нами</span>
                                        </a>
                                    </div>
                                    <h3 className={styles.title}>правила сервиса</h3>
                                    <div className={styles.help__rules}>
                                        <a href="#" className={styles.help_link}>
                                            <img className={styles.help_link_icon} src="images/rules.svg" alt="FAQ" />
                                            <span>Правила сервиса</span>
                                        </a>
                                        <a href="#" className={styles.help_link}>
                                            <img className={styles.help_link_icon} src="images/shield.svg" alt="FAQ" />
                                            <span>Конфиденциальность</span>
                                        </a>
                                        <a href="#" className={styles.help_link}>
                                            <img className={styles.help_link_icon} src="images/cookies.svg" alt="FAQ" />
                                            <span>Файлы cookies</span>
                                        </a>
                                        <a href="#" className={styles.help_link}>
                                            <img className={styles.help_link_icon} src="images/chat.svg" alt="FAQ" />
                                            <span>Обратная связь</span>
                                        </a>
                                    </div>
                                </SlideDown>
                            </div>
                        </div>

                        <div className={styles.links}>
                            <a href="#" className={styles.link}>
                                создать резюме
                            </a>
                            <a href="#" className={styles.link}>
                                разместить вакансию
                            </a>
                            <a href="#" className={styles.link}>
                                вход
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;
