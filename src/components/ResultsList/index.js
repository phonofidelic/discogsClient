import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';

import ResultsListItem from './ResultsListItem.component';

const styles = theme => ({
	root: {
		width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // margin: 50,
	}
});

class ResultsList extends Component {
	render() {
		const { 
			results, 
			handleSelectItem,
			classes ,
		} = this.props;

		return (
			<div className={classes.root}>
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

export default withStyles(styles)(ResultsList);
