import _ from 'loadsh';
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = _.join(['hello','webpack'],'');
  btn.innerHTML = 'click me and check the';
  element.appendChild(btn);
  return element;
}
document.body.appendChild(component());