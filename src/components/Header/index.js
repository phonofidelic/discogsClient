import React, { Component } from 'react';

const Header = (props) => {
	const styles = {
		root: {
			position: 'fixed',
			top: 0,
			width: '100%',
		  zIndex: 1001,
		},
		header: {
			backgroundColor: '#222',
			height: 100,
			lineHeight: '100px',
		  verticalAlign: 'middle',
		  color: '#fff',
		},
		title: {
			fontSize: '1.5em',
			margin: 0,
		}
	}

	return (
		<div style={styles.root}>
			<header style={styles.header}>
	      <h1 style={styles.title}>Discogs Browser</h1>
	    </header>
    </div>
	);
}

export default Header;