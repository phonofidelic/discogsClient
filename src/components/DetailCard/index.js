import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';

class DetailCard extends Component {
	render() {
		const { 
			detailViewData,
			showDetailView,
			handleCloseDetailView,
		} = this.props;

		const styles = {
			root: {

			},
			cardMedia: {
				width: 600,
				height: 400,
				margin: 0,
			},

			dialog: {
				// width: '100%',
			},
			dialogContent: {
				padding: '0px',
			},
			dialogContentText: {
				paddingLeft: 24,
				paddingRight: 24,
				paddingBottom: 24,
			},
			dialogImg: {
				width: '100%'
			}
		}

		return (
			<Dialog
				open={showDetailView}
				scroll="paper"
				onBackdropClick={() => handleCloseDetailView()}
			>
				<DialogContent style={styles.dialogContent}>
					<div>
						<img
							style={styles.dialogImg} 
							alt={detailViewData.title || detailViewData.name}
							src={detailViewData.cover_image}
						/>
					</div>
					<DialogTitle>{detailViewData.title || detailViewData.name}</DialogTitle>
					<DialogContentText style={styles.dialogContentText}>
						{detailViewData.profile || 'No discription found'}
					</DialogContentText>
				</DialogContent>
			</Dialog>
		);
	}
}

DetailCard.propTypes = {
	detailViewData: PropTypes.object.isRequired,
	showDetailView: PropTypes.bool.isRequired,
	handleCloseDetailView: PropTypes.PropTypes.func.isRequired,
}

export default DetailCard;