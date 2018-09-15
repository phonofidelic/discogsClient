import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from '../components/SearchForm.component';
import ResultsList from '../components/ResultsList';

const DISCOGS_BASE_URL = 'https://api.discogs.com/database/';
const TOKEN = 'lZVtMlqqTwdKFsGhQfliTSBvVdxYpgmqXwqeNnov';

class DiscogsBrowser extends Component {
	state = {
		results: null
	}
	handleFetchData(query) {
		console.log('handleFetchData, query:', query)

		axios.get(`${DISCOGS_BASE_URL}search?q=${query}&token=${TOKEN}`)
		.then(response => {
			console.log('response:', response);
			this.setState({
				...this.state,
				results: response.data.results
			})
		})
		.catch(err => {
			console.log('Discogs error:', err);
		});
	}

	handleFetchSuccess() {
	console.log('handleFetchSuccess')
	}

	handleFetchFailure() {
		console.log('handleFetchFailure')
	}

	render() {
		return (
			<div>
				<SearchForm 
					handleFetchData={this.handleFetchData.bind(this)}
				/>
				<ResultsList results={this.state.results} />
			</div>
		);
	}
}

export default DiscogsBrowser;
