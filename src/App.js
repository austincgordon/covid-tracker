import React from 'react';

import { Cards, CountryPicker, Chart, Footer } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
	state = {
		data: {},
		country: '',
	};

	async componentDidMount() {
		const data = await fetchData(); // Pulls general data from API

		this.setState({ data });
	}

	handleCountryChange = async (country) => {
		const data = await fetchData(country); // pulls the "country" from the API to be handled by CountryPicker component

		this.setState({ data, country: country });
	};

	render() {
		const { data, country } = this.state;

		return (
			<div className={styles.container}>
				<img className={styles.image} src={image} alt='COVID-19' />
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
				<Footer />
			</div>
		);
	}
}

export default App;
