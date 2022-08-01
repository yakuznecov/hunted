import styles from './Resumes.module.scss';
import cn from 'classnames';

function Resumes({}) {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>новые резюме</h2>
                <h2 className={styles.title}>часто просматривают</h2>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <div className={styles.top}>
                        <div className={styles.content}>
                            <div className={styles.content__title}>Оператор постановщик</div>
                            <div className={styles.cityAge}>
                                <div className={styles.city}>
                                    <div className={styles.cityAge_title}>Город</div>
                                    <div className={styles.cityAge_subtitle}>Санкт-Петербург</div>
                                </div>
                                <div className={styles.age}>
                                    <div className={styles.cityAge_title}>Лет</div>
                                    <div className={styles.cityAge_subtitle}>26</div>
                                </div>
                            </div>
                            <div className={styles.tags}>
                                <div className={styles.tags_item}>Видеосъемка</div>
                                <div className={styles.tags_item}>Объективы</div>
                                <div className={styles.tags_item}>Постановка света</div>
                                <div className={styles.tags_item}>Продакшен</div>
                                <div className={styles.tags_item}>Adobe Premier</div>
                                <div className={styles.tags_item}>+4</div>
                            </div>
                        </div>
                        <div className={styles.avatar}>
                            <img className={styles.avatar_img} src="images/avatar-1.png" alt="avatar" />
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.experience_item}>
                            <span>NoNameLab - </span>
                            <span>Помощник оператора</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Starliner - </span>
                            <span>Оператор постановщик</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Студия Бурусова - </span>
                            <span>Ведущий оператор</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <span>75 000 руб.</span>
                        <a href="#" className={styles.footer_link}>
                            Посмотреть
                        </a>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.top}>
                        <div className={styles.content}>
                            <div className={styles.content__title}>Режиссер монтажа</div>
                            <div className={styles.cityAge}>
                                <div className={styles.city}>
                                    <div className={styles.cityAge_title}>Город</div>
                                    <div className={styles.cityAge_subtitle}>Москва</div>
                                </div>
                                <div className={styles.age}>
                                    <div className={styles.cityAge_title}>Лет</div>
                                    <div className={styles.cityAge_subtitle}>21</div>
                                </div>
                            </div>
                            <div className={styles.tags}>
                                <div className={styles.tags_item}>Видеосъемка</div>
                                <div className={styles.tags_item}>Объективы</div>
                                <div className={styles.tags_item}>Постановка света</div>
                                <div className={styles.tags_item}>Продакшен</div>
                                <div className={styles.tags_item}>Adobe Premier</div>
                                <div className={styles.tags_item}>+4</div>
                            </div>
                        </div>
                        <div className={styles.avatar}>
                            <img className={styles.avatar_img} src="images/avatar-4.png" alt="avatar" />
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.experience_item}>
                            <span>Новая волна - </span>
                            <span>Режиссер</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Only Hits - </span>
                            <span>Режиссер</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>ТРК Пятый канал - </span>
                            <span>Режиссер монтажа</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <span>140 000 руб.</span>
                        <a href="#" className={styles.footer_link}>
                            Посмотреть
                        </a>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.top}>
                        <div className={styles.content}>
                            <div className={styles.content__title}>Продюсер</div>
                            <div className={styles.cityAge}>
                                <div className={styles.city}>
                                    <div className={styles.cityAge_title}>Город</div>
                                    <div className={styles.cityAge_subtitle}>Екатеринбург</div>
                                </div>
                                <div className={styles.age}>
                                    <div className={styles.cityAge_title}>Лет</div>
                                    <div className={styles.cityAge_subtitle}>37</div>
                                </div>
                            </div>
                            <div className={styles.tags}>
                                <div className={styles.tags_item}>Видеосъемка</div>
                                <div className={styles.tags_item}>Объективы</div>
                                <div className={styles.tags_item}>Постановка света</div>
                                <div className={styles.tags_item}>Продакшен</div>
                                <div className={styles.tags_item}>Adobe Premier</div>
                                <div className={styles.tags_item}>+4</div>
                            </div>
                        </div>
                        <div className={styles.avatar}>
                            <img className={styles.avatar_img} src="images/avatar-5.png" alt="avatar" />
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.experience_item}>
                            <span>Kuberto LA - </span>
                            <span>Продюсер постпродакшн</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Студия Метрика - </span>
                            <span>Ассисент режиссера</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>ОРТ - </span>
                            <span>Ассисент режиссера</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <span>280 000 руб.</span>
                        <a href="#" className={styles.footer_link}>
                            Посмотреть
                        </a>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.top}>
                        <div className={styles.content}>
                            <div className={styles.content__title}>Расскадровщик</div>
                            <div className={styles.cityAge}>
                                <div className={styles.city}>
                                    <div className={styles.cityAge_title}>Город</div>
                                    <div className={styles.cityAge_subtitle}>Владивосток</div>
                                </div>
                                <div className={styles.age}>
                                    <div className={styles.cityAge_title}>Лет</div>
                                    <div className={styles.cityAge_subtitle}>32</div>
                                </div>
                            </div>
                            <div className={styles.tags}>
                                <div className={styles.tags_item}>Видеосъемка</div>
                                <div className={styles.tags_item}>Объективы</div>
                                <div className={styles.tags_item}>Постановка света</div>
                                <div className={styles.tags_item}>Продакшен</div>
                                <div className={styles.tags_item}>Adobe Premier</div>
                                <div className={styles.tags_item}>+4</div>
                            </div>
                        </div>
                        <div className={styles.avatar}>
                            <img className={styles.avatar_img} src="images/avatar-2.png" alt="avatar" />
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.experience_item}>
                            <span>Кадры всея руси - </span>
                            <span>Расскадровщик</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Chop & Crop - </span>
                            <span>Кинолог</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>ВГТРК Вид - </span>
                            <span>Расскадровщик</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <span>50 000 руб.</span>
                        <a href="#" className={styles.footer_link}>
                            Посмотреть
                        </a>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.top}>
                        <div className={styles.content}>
                            <div className={styles.content__title}>Модель по свету</div>
                            <div className={styles.cityAge}>
                                <div className={styles.city}>
                                    <div className={styles.cityAge_title}>Город</div>
                                    <div className={styles.cityAge_subtitle}>Санкт-Петербург</div>
                                </div>
                                <div className={styles.age}>
                                    <div className={styles.cityAge_title}>Лет</div>
                                    <div className={styles.cityAge_subtitle}>29</div>
                                </div>
                            </div>
                            <div className={styles.tags}>
                                <div className={styles.tags_item}>Видеосъемка</div>
                                <div className={styles.tags_item}>Объективы</div>
                                <div className={styles.tags_item}>Постановка света</div>
                                <div className={styles.tags_item}>Продакшен</div>
                                <div className={styles.tags_item}>Adobe Premier</div>
                                <div className={styles.tags_item}>+4</div>
                            </div>
                        </div>
                        <div className={styles.avatar}>
                            <img className={styles.avatar_img} src="images/avatar-6.png" alt="avatar" />
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.experience_item}>
                            <span>2x2 - </span>
                            <span>Модель по свету</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Культура - </span>
                            <span>Модель по свету</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Legorage - </span>
                            <span>Модель по свету</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <span>45 000 руб.</span>
                        <a href="#" className={styles.footer_link}>
                            Посмотреть
                        </a>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.top}>
                        <div className={styles.content}>
                            <div className={styles.content__title}>Асс режиссера (хлопушка)</div>
                            <div className={styles.cityAge}>
                                <div className={styles.city}>
                                    <div className={styles.cityAge_title}>Город</div>
                                    <div className={styles.cityAge_subtitle}>Москва</div>
                                </div>
                                <div className={styles.age}>
                                    <div className={styles.cityAge_title}>Лет</div>
                                    <div className={styles.cityAge_subtitle}>33</div>
                                </div>
                            </div>
                            <div className={styles.tags}>
                                <div className={styles.tags_item}>Видеосъемка</div>
                                <div className={styles.tags_item}>Объективы</div>
                                <div className={styles.tags_item}>Постановка света</div>
                                <div className={styles.tags_item}>Продакшен</div>
                                <div className={styles.tags_item}>Adobe Premier</div>
                                <div className={styles.tags_item}>+4</div>
                            </div>
                        </div>
                        <div className={styles.avatar}>
                            <img className={styles.avatar_img} src="images/avatar-7.png" alt="avatar" />
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.experience_item}>
                            <span>1 cinema - </span>
                            <span>Асс режиссера (хлопушка)</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>20 век фокс - </span>
                            <span>Асс режиссера (кофе)</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Каламбия - </span>
                            <span>Асс режиссера (квас)</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <span>80 000 руб.</span>
                        <a href="#" className={styles.footer_link}>
                            Посмотреть
                        </a>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.top}>
                        <div className={styles.content}>
                            <div className={styles.content__title}>Военный консультант</div>
                            <div className={styles.cityAge}>
                                <div className={styles.city}>
                                    <div className={styles.cityAge_title}>Город</div>
                                    <div className={styles.cityAge_subtitle}>Москва</div>
                                </div>
                                <div className={styles.age}>
                                    <div className={styles.cityAge_title}>Лет</div>
                                    <div className={styles.cityAge_subtitle}>43</div>
                                </div>
                            </div>
                            <div className={styles.tags}>
                                <div className={styles.tags_item}>Видеосъемка</div>
                                <div className={styles.tags_item}>Объективы</div>
                                <div className={styles.tags_item}>Постановка света</div>
                                <div className={styles.tags_item}>Продакшен</div>
                                <div className={styles.tags_item}>Adobe Premier</div>
                                <div className={styles.tags_item}>+4</div>
                            </div>
                        </div>
                        <div className={styles.avatar}>
                            <img className={styles.avatar_img} src="images/avatar-3.png" alt="avatar" />
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.experience_item}>
                            <span>Россия 24 - </span>
                            <span>Консультант по оружию</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Blago Dobro - </span>
                            <span>Консультант по обороне</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Кокон - </span>
                            <span>Консультант по оружию</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <span>300 000 руб.</span>
                        <a href="#" className={styles.footer_link}>
                            Посмотреть
                        </a>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.top}>
                        <div className={styles.content}>
                            <div className={styles.content__title}>Скрипт - супервайзер</div>
                            <div className={styles.cityAge}>
                                <div className={styles.city}>
                                    <div className={styles.cityAge_title}>Город</div>
                                    <div className={styles.cityAge_subtitle}>Краснодар</div>
                                </div>
                                <div className={styles.age}>
                                    <div className={styles.cityAge_title}>Лет</div>
                                    <div className={styles.cityAge_subtitle}>32</div>
                                </div>
                            </div>
                            <div className={styles.tags}>
                                <div className={styles.tags_item}>Видеосъемка</div>
                                <div className={styles.tags_item}>Объективы</div>
                                <div className={styles.tags_item}>Постановка света</div>
                                <div className={styles.tags_item}>Продакшен</div>
                                <div className={styles.tags_item}>Adobe Premier</div>
                                <div className={styles.tags_item}>+4</div>
                            </div>
                        </div>
                        <div className={styles.avatar}>
                            <img className={styles.avatar_img} src="images/avatar-8.png" alt="avatar" />
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.experience_item}>
                            <span>Club Street - </span>
                            <span>Скрипт - супервайзер</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Star Link - </span>
                            <span>Супервайзер</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Wase - </span>
                            <span>Супервайзер</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <span>150 000 руб.</span>
                        <a href="#" className={styles.footer_link}>
                            Посмотреть
                        </a>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.top}>
                        <div className={styles.content}>
                            <div className={styles.content__title}>Языковед</div>
                            <div className={styles.cityAge}>
                                <div className={styles.city}>
                                    <div className={styles.cityAge_title}>Город</div>
                                    <div className={styles.cityAge_subtitle}>Санкт-Петербург</div>
                                </div>
                                <div className={styles.age}>
                                    <div className={styles.cityAge_title}>Лет</div>
                                    <div className={styles.cityAge_subtitle}>24</div>
                                </div>
                            </div>
                            <div className={styles.tags}>
                                <div className={styles.tags_item}>Видеосъемка</div>
                                <div className={styles.tags_item}>Объективы</div>
                                <div className={styles.tags_item}>Постановка света</div>
                                <div className={styles.tags_item}>Продакшен</div>
                                <div className={styles.tags_item}>Adobe Premier</div>
                                <div className={styles.tags_item}>+4</div>
                            </div>
                        </div>
                        <div className={styles.avatar}>
                            <img className={styles.avatar_img} src="images/avatar-9.png" alt="avatar" />
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.experience_item}>
                            <span>Stance Plus - </span>
                            <span>Языковед</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Школа языков - </span>
                            <span>Языковед</span>
                        </div>
                        <div className={styles.experience_item}>
                            <span>Типография - </span>
                            <span>Филолог</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <span>105 000 руб.</span>
                        <a href="#" className={styles.footer_link}>
                            Посмотреть
                        </a>
                    </div>
                </div>
            </div>

            <a href="/" className={styles.link}>
                Посмотреть больше резюме
            </a>
        </section>
    );
}

export default Resumes;
