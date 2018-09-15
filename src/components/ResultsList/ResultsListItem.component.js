import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
	Avatar, 
	ListItem, 
	ListItemText 
} from '@material-ui/core';

class ResultsListItem extends Component {
	render() {
		const {	item } = this.props;

		const styles = {
			root: {

			}
		}

		return (
			<ListItem item={item}>
				<Avatar 
					alt={item.title}
					src={item.thumb}
				/>
				<ListItemText 
					primary={item.title} 
					secondary={item.type}
				/>
			</ListItem>
		);
	}
}

ResultsListItem.propTypes = {
	item: PropTypes.object.isRequired
}

export default ResultsListItem;