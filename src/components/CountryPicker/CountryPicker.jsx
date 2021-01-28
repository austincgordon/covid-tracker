import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setCountries(await fetchCountries());
		};

		fetchAPI();
	}, []);

	return (
		<div>
			<FormControl className={styles.formControl}>
				<NativeSelect className={styles.selector} defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
					<option value=''>Global</option>
					{countries.map((country, i) => (
						<option key={i} value={country}>
							{country}
						</option>
					))}
				</NativeSelect>
			</FormControl>
		</div>
	);
};

export default Countries;
