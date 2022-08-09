import styles from './Join.module.scss';
import NavLink from 'components/NavLink/NavLink';

function Join() {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Готовы присоединиться к нам?</h2>
                <div className={styles.box__btn}>
                    <NavLink to={'/'} className={styles.btn} target="_blank">
                        Создать резюме
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default Join;
