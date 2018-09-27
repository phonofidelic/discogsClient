import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { THEME } from './config';

// require('dotenv').config();

const theme = createMuiTheme(THEME);

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>, 
	document.getElementById('root')
);
registerServiceWorker();
