import styles from './BurgerMenu.module.scss';

function BurgerMenu() {
	return (
		<div className={styles.container}>
			<input id={styles.toggle} type='checkbox' />
			<label className={styles.btn} htmlFor={styles.toggle}>
				<span></span>
			</label>
			<div className={styles.menu}></div>
		</div>
	);
}

export default BurgerMenu;
