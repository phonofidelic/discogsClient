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

			},
			avatar: {
				borderRadius: item.type === 'artist' ? 100 : 1.5,
			}
		}

		return (
			<ListItem item={item}>
				<Avatar 
					style={styles.avatar}
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