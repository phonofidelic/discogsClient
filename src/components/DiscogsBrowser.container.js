import React, { Component } from 'react';
import axios from 'axios';
import { MOCK_DATA, MOCK_DETAIL_DATA } from '../mockData';

import SearchForm from '../components/SearchForm';
import ResultsList from '../components/ResultsList';
import DetailCard from '../components/DetailCard';
import StatusMessage from '../components/StatusMessage';

const DISCOGS_BASE_URL = 'https://api.discogs.com/';
const TOKEN = 'lZVtMlqqTwdKFsGhQfliTSBvVdxYpgmqXwqeNnov';

const MOCK_RESULTS = MOCK_DATA.results;
const MOCK_SELECTED_ITEM = MOCK_DATA.results[0];
const MOCK_DETAIL_VIEW_DATA = {...MOCK_DETAIL_DATA, cover_image: MOCK_DATA.results[0].cover_image,};

class DiscogsBrowser extends Component {
	state = {
		status: {
			loading: false,
			error: false,
			message: null,
		},
		results: MOCK_RESULTS,
		selectedItem: MOCK_SELECTED_ITEM,
		detailViewData: MOCK_DETAIL_VIEW_DATA,
		showDetailView: true,
	}

	handleFetchData(query) {
		console.log('handleFetchData, query:', query)
		/***
		 * Initial Discogs search request,
		 * set status object 
		 */
		this.setState({
			...this.state,
			status: {
				...this.state.status,
				loading: true,
				message: `Searching Discogs for "${query}"...`,
			}
		});


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
			this.setState({
				...this.state,
				status: {
					loading: false,
					error: true,
					message: 'Sorry, could not retrieve search results at this time.'
				}
			})
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

		this.setState({
			...this.state,
			status: {
				...this.state.status,
				loading: true,
				message: `Fetching details...`,
			}
		});

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

			this.setState({
				...this.state,
				status: {
					loading: false,
					error: true,
					message: 'Sorry, could not retrieve details at this time.'
				}
			})
		});
	}

	handleCloseDetailView() {
		console.log('handleCloseDetailView')
		this.setState({
			...this.state,
			showDetailView: false,
		});
	}

	handleDiscardError() {
		this.setState({
			...this.state,
			status: {
				...this.state.status,
				error: false,
				message: null,
			}
		})
	}

	render() {
		return (
			<div>
				<StatusMessage 
					status={this.state.status} 
					handleDiscardError={this.handleDiscardError.bind(this)}
				/>
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
