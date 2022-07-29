import React, { useState } from 'react';
import styles from './Content.module.scss';
import cn from 'classnames';

function Content() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Как это работает?</h2>
            <div className={styles.wrapper}>
                <div className={cn(styles.item, styles.applicant__first)}>
                    <div className={styles.info}>
                        <h2 className={styles.info_title}>
                            <span className={styles.num}>1</span>
                            <span className={styles.dot}>.</span>
                            Начало
                        </h2>

                        <h3 className={styles.info_subtitle}> Создайте резюме</h3>
                        <p className={styles.info_text}>
                            Простая форма. Расскажите о себе. Не забудьте фотографию. Максимум информации и Работодатель
                            обратит на вас внимание. Чем больше вы напишете, тем быстрее работа найдет вас.
                        </p>
                    </div>
                </div>

                <div className={cn(styles.item, styles.applicant__second)}>
                    <div className={styles.info}>
                        <h2 className={styles.info_title}>
                            <span className={styles.num}>2</span>
                            <span className={styles.dot}>.</span>
                            Фото
                        </h2>
                        <h3 className={styles.info_subtitle}>Загрузите хорошее фото</h3>
                        <p className={styles.info_text}>
                            Ниже мы покажем цепочку действий, которая приведёт вас к нужному результату и поможет найти
                            актёров, которая приведёт вас к нужному результату и поможет найти актёров.
                        </p>
                    </div>
                </div>

                <div className={cn(styles.item, styles.applicant__third)}>
                    <div className={styles.info}>
                        <h2 className={styles.info_title}>
                            <span className={styles.num}>3</span>
                            <span className={styles.dot}>.</span>
                            Вакансии
                        </h2>
                        <h3 className={styles.info_subtitle}>
                            Просматривайте <br /> и откликайтесь на вакансии
                        </h3>
                        <p className={styles.info_text}>
                            Ниже мы покажем цепочку действий, которая приведёт вас к нужному результату и поможет найти
                            актёров, которая приведёт вас к нужному результату и поможет найти актёров.
                        </p>
                    </div>
                </div>

                <div className={cn(styles.item, styles.applicant__fourth)}>
                    <div className={styles.info}>
                        <h2 className={styles.info_title}>
                            <span className={styles.num}>4</span>
                            <span className={styles.dot}>.</span>
                            Компании
                        </h2>
                        <h3 className={styles.info_subtitle}>Выбирайте работодателей</h3>
                        <p className={styles.info_text}>
                            Ниже мы покажем цепочку действий, которая приведёт вас к нужному результату и поможет найти
                            актёров, которая приведёт вас к нужному результату и поможет найти актёров.
                        </p>
                    </div>
                </div>

                <div className={cn(styles.item, styles.applicant__fifth)}>
                    <div className={styles.info}>
                        <h2 className={styles.info_title}>
                            <span className={styles.num}>5</span>
                            <span className={styles.dot}>.</span>
                            Приглашение
                        </h2>
                        <h3 className={styles.info_subtitle}>Получите работу</h3>
                        <p className={styles.info_text}>
                            Ниже мы покажем цепочку действий, которая приведёт вас к нужному результату и поможет найти
                            актёров, которая приведёт вас к нужному результату и поможет найти актёров.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
