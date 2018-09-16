import React, { Component } from 'react';
import axios from 'axios';
import { MOCK_DATA, MOCK_DETAIL_DATA } from '../mockData';

import SearchForm from '../components/SearchForm.component';
import ResultsList from '../components/ResultsList';
import DetailCard from '../components/DetailCard';

const DISCOGS_BASE_URL = 'https://api.discogs.com/';
const TOKEN = 'lZVtMlqqTwdKFsGhQfliTSBvVdxYpgmqXwqeNnov';

class DiscogsBrowser extends Component {
	state = {
		results: MOCK_DATA.results,
		selectedItem: MOCK_DATA.results[0],
		detailViewData: {...MOCK_DETAIL_DATA, cover_image: MOCK_DATA.results[0].cover_image,},
		showDetailView: true,
	}
	handleFetchData(query) {
		console.log('handleFetchData, query:', query)

		axios.get(`${DISCOGS_BASE_URL}database/search?q=${query}&token=${TOKEN}`)
		.then(response => {
			console.log('response:', response);
			this.setState({
				...this.state,
				results: response.data.results
			});
		})
		.catch(err => {
			console.log('Discogs error:', err);
		});
	}

	handleSelectItem(item) {
		console.log('handleSelectItem, item:', item)

		/***
		 * Skip network request if user selects itam that is 
		 * already loaded in state.
		 */
		if (this.state.selectedItem === item) {
			return this.setState({
				...this.state,
				showDetailView: true,
			});
		}

		axios.get(`${DISCOGS_BASE_URL}${item.type}s/${item.id}`)
		.then(results => {
			console.log('handleSelectItem, results:', results);

			this.setState({
				...this.state,
				selectedItem: item,
				detailViewData: {
					...results.data,
					cover_image: item.cover_image,
				},
				showDetailView: true,
			});
		})
		.catch(err => {
			console.error('handleSelectItem error:', err);
		});
	}

	handleCloseDetailView() {
		console.log('handleCloseDetailView')
		this.setState({
			...this.state,
			showDetailView: false,
		});
	}

	render() {
		return (
			<div>
				<SearchForm handleFetchData={this.handleFetchData.bind(this)} />
				<ResultsList 
					results={this.state.results} 
					handleSelectItem={this.handleSelectItem.bind(this)}
					handleCloseDetailView={this.handleCloseDetailView.bind(this)}
				/>
				{this.state.detailViewData && 
					<DetailCard 
						detailViewData={this.state.detailViewData}
						showDetailView={this.state.showDetailView}
						handleCloseDetailView={this.handleCloseDetailView.bind(this)} 
					/>
				}
			</div>
		);
	}
}

export default DiscogsBrowser;
