// eslint-disable-next-line
import App from './App';
import React from 'react';

import ReactDOM from 'react-dom';
import { DarkModeProvider, ThemeProvider } from './context';

const output=document.getElementById('root');



ReactDOM.render(   <ThemeProvider><App /></ThemeProvider>, output);