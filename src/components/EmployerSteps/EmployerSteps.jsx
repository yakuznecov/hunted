import cn from 'classnames';
import styles from './EmployerSteps.module.scss';

function EmployerSteps() {
    return (
        <div className={cn(styles.container)}>
            <h2 className={styles.title}>Как это работает?</h2>
            <div className={styles.wrapper}>
                <div className={cn(styles.item, styles.employer__first)}>
                    <div className={styles.info}>
                        <h2 className={styles.info_title}>
                            <span className={styles.num}>1</span>
                            <span className={styles.dot}>.</span>
                            Начало
                        </h2>

                        <h3 className={styles.info_subtitle}>Создайте вакансию</h3>
                        <p className={styles.info_text}>
                            Ниже мы покажем цепочку действий, которая приведёт вас к нужному результату и поможет найти
                            актёров, которая приведёт вас к нужному результату и поможет найти актёров.
                        </p>
                    </div>
                </div>

                <div className={cn(styles.item, styles.employer__second)}>
                    <div className={styles.info}>
                        <h2 className={styles.info_title}>
                            <span className={styles.num}>2</span>
                            <span className={styles.dot}>.</span>
                            Отклики
                        </h2>
                        <h3 className={styles.info_subtitle}>Получите отклики</h3>
                        <p className={styles.info_text}>
                            Ниже мы покажем цепочку действий, которая приведёт вас к нужному результату и поможет найти
                            актёров, которая приведёт вас к нужному результату и поможет найти актёров.
                        </p>
                    </div>
                </div>

                <div className={cn(styles.item, styles.employer__third)}>
                    <div className={styles.info}>
                        <h2 className={styles.info_title}>
                            <span className={styles.num}>3</span>
                            <span className={styles.dot}>.</span>
                            Выбор
                        </h2>
                        <h3 className={styles.info_subtitle}>Выбирайте из лучших</h3>
                        <p className={styles.info_text}>
                            Ниже мы покажем цепочку действий, которая приведёт вас к нужному результату и поможет найти
                            актёров, которая приведёт вас к нужному результату и поможет найти актёров.
                        </p>
                    </div>
                </div>

                <div className={cn(styles.item, styles.employer__fourth)}>
                    <div className={styles.info}>
                        <h2 className={styles.info_title}>
                            <span className={styles.num}>4</span>
                            <span className={styles.dot}>.</span>
                            Больше
                        </h2>
                        <h3 className={styles.info_subtitle}>Посмотрите подробную информацию</h3>
                        <p className={styles.info_text}>
                            Ниже мы покажем цепочку действий, которая приведёт вас к нужному результату и поможет найти
                            актёров, которая приведёт вас к нужному результату и поможет найти актёров.
                        </p>
                    </div>
                </div>

                <div className={cn(styles.item, styles.employer__fifth)}>
                    <div className={styles.info}>
                        <h2 className={styles.info_title}>
                            <span className={styles.num}>5</span>
                            <span className={styles.dot}>.</span>
                            Завершение
                        </h2>
                        <h3 className={styles.info_subtitle}>Получите нового сотрудника</h3>
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

export default EmployerSteps;
