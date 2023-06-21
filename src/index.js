import './style.css';
import scoreBox from './modules/scoreBox.js';
import { postActivator, getActivator } from './modules/FunctionActivator.js';

postActivator();
getActivator();

window.addEventListener('load', scoreBox);