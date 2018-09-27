import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
	Button,
	TextField 
} from '@material-ui/core';
import { THEME } from '../../config';

class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: null
		}
	}

	handleInputChange(e) {
		this.setState({
			...this.state,
			query: e.target.value
		});
	}

	handleSubmit(e) {
		const { handleFetchData } = this.props;

		e.preventDefault();
		handleFetchData(this.state.query);
	}

	render() {
		const {
			results,
			handleFetchData,
		} = this.props;

		const styles = {
			root: {
				padding: 20,
				height: results ? null : 100,
				marginTop: THEME.dimensions.header.height,
				backgroundColor: '#fff',
			},
			root_noResults: {
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#fff',
			},
			searchField: {
				marginRight: 10
			}
		}

		return (
			<form 
				style={!results ? styles.root_noResults : styles.root} 
				onSubmit={this.handleSubmit.bind(this)}
			>
			<div>
				<TextField 
					style={styles.searchField}
					type="text"
					autoFocus
					label="Find your music"
					onChange={this.handleInputChange.bind(this)} 
				/>
				<Button 
					type="submit" 
				>
				Search
				</Button>
			</div>
			</form>
		);
	}
}

SearchForm.propTypes ={
	results: PropTypes.array,
	handleFetchData: PropTypes.func.isRequired,
}

export default SearchForm;
