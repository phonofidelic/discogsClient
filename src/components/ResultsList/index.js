import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import { THEME } from '../../config';

import ResultsListItem from './ResultsListItem.component';

class ResultsList extends Component {
	render() {
		const { 
			results, 
			handleSelectItem,
		} = this.props;

		const styles = {
			root: {
				// marginTop: THEME.dimensions.header.height
			}
		}

		return (
			<div style={styles.root}>
				<List>
					{results && results.map((item, i) => (
						<ResultsListItem 
							key={i} 
							item={item} 
							handleSelectItem={handleSelectItem}
						/>
					))}
				</List>
			</div>
		);
	}
}

ResultsList.propTypes = {
	results: PropTypes.array,
	handleSelectItem: PropTypes.func.isRequired,
}

export default ResultsList;
