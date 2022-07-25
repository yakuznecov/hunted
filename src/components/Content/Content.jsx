import React, { useState } from 'react';
import styles from './Content.module.scss';
import cn from 'classnames';

function Content() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Как это работает?</h2>
			<div className={styles.wrapper}>
				<div className={cn(styles.item, styles.applicant__first)}>
					<div className='cast__power-item-info'>
						<h2 className='cast__power-item-info-title'>
							<span className='num'>1</span>
							<span className='dot'>.</span>
							Анкета
						</h2>
						<h3 className='cast__power-item-info-subtitle'>Расскажите о себе в анкете</h3>
						<p className='cast__power-item-info-text'>
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
