import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
	render() {
		const {	item } = this.props;

		return (
			<li item={item}>
				{item.type} - {item.title}
			</li>
		);
	}
}

ListItem.propTypes = {
	item: PropTypes.object.isRequired
}

export default ListItem;