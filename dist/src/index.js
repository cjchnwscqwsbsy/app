'use strict';

var _loadsh = require('loadsh');

var _loadsh2 = _interopRequireDefault(_loadsh);

var _print = require('./print');

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = _loadsh2.default.join(['hello', 'webpack'], '');
  btn.innerHTML = 'click me and check the console';
  btn.onclick = _print2.default;
  element.appendChild(btn);
  return element;
}
document.body.appendChild(component());
//# sourceMappingURL=index.js.map