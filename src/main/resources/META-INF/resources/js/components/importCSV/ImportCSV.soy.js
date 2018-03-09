/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from ImportCSV.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ImportCSV.
 * @public
 */

goog.module('ImportCSV.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {$render.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
var $render = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var errorMessage = soy.asserts.assertType(opt_data.errorMessage == null || (goog.isString(opt_data.errorMessage) || opt_data.errorMessage instanceof goog.soy.data.SanitizedContent), 'errorMessage', opt_data.errorMessage, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'import-csv-component');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('label');
      incrementalDom.attr('class', 'btn btn-primary');
      incrementalDom.attr('for', 'uploadFile');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('Please choose a file in CSV format');
  incrementalDom.elementClose('label');
  incrementalDom.elementOpenStart('input');
      incrementalDom.attr('data-onchange', '_handleUploadFile');
      incrementalDom.attr('id', 'uploadFile');
      incrementalDom.attr('type', 'file');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementClose('input');
  soyIdom.print(errorMessage);
  incrementalDom.elementOpen('br');
  incrementalDom.elementClose('br');
  incrementalDom.elementClose('div');
};
exports.render = $render;
/**
 * @typedef {{
 *  errorMessage: (!goog.soy.data.SanitizedContent|null|string|undefined),
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ImportCSV.render';
}

exports.render.params = ["errorMessage"];
exports.render.types = {"errorMessage":"string"};
templates = exports;
return exports;

});

class ImportCSV extends Component {}
Soy.register(ImportCSV, templates);
export { ImportCSV, templates };
export default templates;
/* jshint ignore:end */
