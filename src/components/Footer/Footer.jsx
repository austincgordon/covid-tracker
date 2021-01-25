import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footer}>
			Data provided by{' '}
			<a href='https://github.com/mathdroid/covid-19-api' target='_blank'>
				https://github.com/mathdroid/covid-19-api
			</a>
		</div>
	);
};

export default Footer;
