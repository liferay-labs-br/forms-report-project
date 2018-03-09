/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from App.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace App.
 * @public
 */

goog.module('App.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('ImportCSV.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
var $render = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'app');
  incrementalDom.elementOpenEnd();
  $templateAlias1(null, null, opt_ijData);
  incrementalDom.elementClose('div');
};
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'App.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class App extends Component {}
Soy.register(App, templates);
export { App, templates };
export default templates;
/* jshint ignore:end */
