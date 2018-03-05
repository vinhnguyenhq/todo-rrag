import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRouter } from './router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<AppRouter />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
