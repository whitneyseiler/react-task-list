import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {tasks} from '../dist/assets/taskData';

ReactDOM.render(<App tasks={tasks}/>, document.getElementById('app'));