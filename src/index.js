import _ from 'loadsh';
function component() {
  var element = document.createComment('div');
  element.innerHTML = _.join(['hello','webpack'],'');
  return element;
}
document.body.appendChild(component());