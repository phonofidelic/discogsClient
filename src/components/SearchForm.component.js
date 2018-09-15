import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
	Button,
	TextField 
} from '@material-ui/core';

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
			}
		}

		return (
			<form 
				style={styles.root} 
				onSubmit={this.handleSubmit.bind(this)}
			>
				<TextField 
					onChange={this.handleInputChange.bind(this)} 
				/>
				<Button 
					type="submit" 
				>
				Submit
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