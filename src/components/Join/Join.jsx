import styles from './Join.module.scss';

function Join() {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>Готовы присоединиться к нам?</h2>
			<a href='/' className={styles.btn} target='_blank'>
				Создать резюме
			</a>
		</section>
	);
}

export default Join;
