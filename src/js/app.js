import ImageComponent from './components/imageComponent';

import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../css/style.scss';

window.onload = () => {
  const formEl = document.getElementById('form');
  const images = document.getElementById('images');
  const inputNameEl = document.getElementById('inputName');
  const inputUrlEl = document.getElementById('inputUrl');
  const alertEl = document.getElementById('alert');

  formEl.addEventListener('submit', onSubmitHendler);
  formEl.addEventListener('focusin', onFocusFormHandler);

  function onSubmitHendler(evt) {
    evt.preventDefault();
    [...formEl.elements].forEach((el) => el.blur());
    const img = new Image();
    img.onload = () => {
      const ic = new ImageComponent(img, inputNameEl.value);
      images.appendChild(ic.render());
      formEl.reset();
    };
    img.onerror = () => {
      alertEl.className = 'alert alert-danger';
    };
    img.src = inputUrlEl.value;
  }

  function onFocusFormHandler() {
    alertEl.className = 'invisible';
  }
};
