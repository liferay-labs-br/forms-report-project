'use strict';

import templates from './ImportCSV.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

class ImportCSV extends Component {
	/**
	 * Upload File
	 * @param {*} event
	 */
	_handleUploadFile(event) {
		const file = event.target.files[0];
		const reader = new FileReader();
		
		if (!file || !this.checkFileType(file)) {
			this.errorMessage = 'Please, choose a file in CSV format';
			return;
		}
		
		this.errorMessage = '';
		reader.onload = this.formatCSV.bind(this);
		reader.readAsText(file);
	}
}

Soy.register(ImportCSV, templates);

ImportCSV.STATE = {
	/**
	 * @type {string}
	 * @default undefined
	 */
	errorMessage: Config.string(),
};

export default ImportCSV;