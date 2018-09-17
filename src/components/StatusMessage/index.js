import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';

class StatusMessage extends Component {
	
	render() {
		const { 
			status,
			handleDiscardError,
		} = this.props;

		const styles = {
			root: {

			},
			container: {
				position: 'fixed',
				Zindex: 2005,
				width: '100vw',
				height: '100vh',
				paddingTop: '25vh',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				color: '#fff',
			},
			dialogContent: {
				padding: 0,
			},
			dialogContentText: {
				paddingLeft: 24,
				paddingRight: 24,
				paddingBottom: 24,
			},
		}

		return (
			<div>
				{ status.loading || status.error ?
					<div style={styles.container}>
						{ status.loading && (
							<div>
								<h2>Loading...</h2>
								<p>{status.message}</p>
							</div>
						)}
						{ status.error && (
							<Dialog open={status.error}>
								<DialogContent style={styles.dialogContent}>
									<DialogTitle>Error:</DialogTitle>
									<DialogContentText style={styles.dialogContentText}>{status.message}</DialogContentText>
									<DialogActions>
										<Button styles={{backgroundColor: '#fff'}} onClick={() => handleDiscardError()}>Ok</Button>
									</DialogActions>
								</DialogContent>
							</Dialog>
						)}
					</div>
					:
					null
				}
			</div>
		);
	}
}

StatusMessage.propTypes = {
	status: PropTypes.object.isRequired,
	handleDiscardError: PropTypes.func.isRequired,
}

export default StatusMessage;
