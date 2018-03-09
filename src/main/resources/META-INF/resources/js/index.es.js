'use strict';

import templates from './App.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './components/importCSV/ImportCSV';

class App extends Component {}

Soy.register(App, templates);

export default function(elementId) {
	new App({ element: `#${elementId}` });
}