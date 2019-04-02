import { header } from './header';
function container() {
  const { body } = document;
  const div = document.createElement('div');
  const logo = document.createElement('span');
  const wrapper = document.createElement('div');
  body.appendChild(div);
  div.appendChild(wrapper);
  wrapper.appendChild(logo);
  div.classList.add('container');
  wrapper.classList.add('wrapper');
  logo.innerText = "d'inks";
  logo.classList.add('logo');
}

export default container;
