import styles from './Join.module.scss';

function Join() {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Готовы присоединиться к нам?</h2>
                <div className={styles.box__btn}>
                    <a href="/" className={styles.btn} target="_blank">
                        Создать резюме
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Join;
