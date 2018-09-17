import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
	Button,
	Typography,
} from '@material-ui/core';

class Pagination extends Component {
	renderPaginator() {
		const { 
			pagination,
			handlePaginationRequest,
		} = this.props;

		return (
			<div>
				{pagination.page > 1 && 
					<Button onClick={() => handlePaginationRequest(pagination.urls.prev)}>Prev.</Button>
				}
				{pagination.page < pagination.pages && 
					<Button onClick={() => handlePaginationRequest(pagination.urls.next)}>Next</Button>
				}
				{pagination.page < pagination.pages && 
					<Button onClick={() => handlePaginationRequest(pagination.urls.last)}>Last</Button>
				}
			</div>
		);
	}

	render() {
		const { 
			pagination,
			handlePaginationRequest,
			handleShowMore,
		} = this.props;

		const styles = {
			root: {
				margin: 20,
			},
			paginationInfo: {
				padding: 10,
			},
		}

		return (
			<div style={styles.root}>
				{/*{this.renderPaginator()}*/}
				<div>
					<Button onClick={() => handleShowMore(pagination.urls.next)}>Show more</Button>
				</div>
				<Typography 
					style={styles.paginationInfo}
					variant="caption"
				>
					Showing {pagination.per_page} of {pagination.items} results
				</Typography>
			</div>
		);
	}
}

Pagination.propTypes = {
	pagination: PropTypes.object.isRequired,
	handlePaginationRequest: PropTypes.func.isRequired,
	handleShowMore: PropTypes.func.isRequired,
}

export default Pagination;
