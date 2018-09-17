import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import { THEME } from '../../config';

import ResultsListItem from './ResultsListItem.component';
import Pagination from './Pagination.component';

class ResultsList extends Component {
	render() {
		const { 
			results,
			pagination,
			handleSelectItem,
			handlePaginationRequest,
			handleShowMore,
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
				<Pagination 
					pagination={pagination} 
					handlePaginationRequest={handlePaginationRequest} 
					handleShowMore={handleShowMore}
				/>
			</div>
		);
	}
}

ResultsList.propTypes = {
	results: PropTypes.array,
	pagination: PropTypes.object.isRequired,
	handleSelectItem: PropTypes.func.isRequired,
	handlePaginationRequest: PropTypes.func.isRequired,
	handleShowMore: PropTypes.func.isRequired,
}

export default ResultsList;
