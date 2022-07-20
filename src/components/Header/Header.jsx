import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.menu}>
				<a href='/' aria-label='Hunted' alt='Hunted'>
					<img src='images/logo/logo.svg' alt='logo' />
				</a>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.item}>
							<span className={styles.title}>Соискателям</span>
						</li>
						<li className={styles.item}>
							<span className={styles.title}>Работодателям</span>
						</li>
						<li className={styles.item}>
							<span className={styles.title}>Работодателям</span>
						</li>
					</ul>
					<ul className={styles.list}>
						<li className={styles.item}>
							<a href='/' className={styles.title}>
								Войти
							</a>
							<a href='/' className={styles.create}>
								Создать резюме
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
