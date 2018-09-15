import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

		return (
			<form  onSubmit={this.handleSubmit.bind(this)}>
				<input 
					onChange={this.handleInputChange.bind(this)} 
				/>
				<input 
					type="submit" 
				/>
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