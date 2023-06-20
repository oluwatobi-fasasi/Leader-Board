import './style.css';
import scoreBox from './modules/scoreBox.js';
import {postActivator, getActivator} from './modules/FunctionActivator';

postActivator();
getActivator();



window.addEventListener('load', scoreBox);