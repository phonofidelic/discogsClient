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
			handleFetchData,
			// handleFetchSuccess,
			// handleFetchFailure,
		} = this.props;

		const styles = {
			root: {
				padding: 20,
				// position: 'fixed',
				// zIndex: 1001,
				// width: '100%',
				// top: THEME.dimensions.header.height,
				marginTop: THEME.dimensions.header.height,
				backgroundColor: '#fff',
			},
			searchField: {
				marginRight: 10
			}
		}

		return (
			<form 
				style={styles.root} 
				onSubmit={this.handleSubmit.bind(this)}
			>
				<TextField 
					style={styles.searchField}
					autoFocus
					label="Find your music"
					onChange={this.handleInputChange.bind(this)} 
				/>
				<Button 
					type="submit" 
				>
				Search
				</Button>
			</form>
		);
	}
}

SearchForm.propTypes ={
	handleFetchData: PropTypes.func.isRequired,
	// handleFetchSuccess: PropTypes.func.isRequired,
	// handleFetchFailure: PropTypes.func.isRequired,
}

export default SearchForm;
