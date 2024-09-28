const App = (({ reverseString }) => {
  const htmlElements = {
    form: document.querySelector('form'),
    response: document.querySelector('#response'),
  }
  const templates = {
    response: c => {
      const color = htmlElements.form.elements.color.value;
      const colorMap = {
        white: 'white',
        blue: 'blue',
        grey: 'grey',
      }
      return `<span class="color-${colorMap[color]}">${c}</span>`;
    }
  }
  const handlers = {
    onInputChange(e) {
      const response = reverseString(e.target.value);
      const template = templates.response(response)
      htmlElements.response.innerHTML = template;
    },
    onColorChange(e) {
      const response = reverseString(htmlElements.form.cadena.value);
      const template = templates.response(response)
      htmlElements.response.innerHTML = template;
    }
  }
  const bindEvents = () => {
    htmlElements.form.elements.cadena.addEventListener('input', handlers.onInputChange);
    htmlElements.form.elements.color.addEventListener('change', handlers.onColorChange);
  }
  return {
    init() {
      bindEvents();
    }
  } 
})(window.Utils);
App.init();