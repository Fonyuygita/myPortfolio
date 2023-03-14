// eslint-disable-next-line
import App from './component/App';
import React from 'react';

import ReactDOM from 'react-dom';
import { DarkModeProvider } from './context';

const output=document.getElementById('root');



ReactDOM.render(   <DarkModeProvider><App /></DarkModeProvider>, output);