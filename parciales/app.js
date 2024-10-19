const App = (() => {
  const htmlElements = {
    generateButton: document.querySelector('#generate'),
    sortAscendingButton: document.querySelector('#sort-asc'),
    sortDescendingButton: document.querySelector('#sort-desc'),
    responseContainer: document.querySelector('#response'),
  }

  const templates = {
    card: (number) => `
      <div class="card">
        <span class="js-random-number" data-id="${number}">${number < 10 ? '0' + number : number}</span>
      </div>
    `
  }

  const utils = {
    renderNumber(n) {
      htmlElements.responseContainer.innerHTML += templates.card(n);
    }
  }

  const handlers = {
    onGenerate(e) {
      e.preventDefault();
      const randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      const random = randomNumberBetween(1, 99);
      utils.renderNumber(random);
    },
    onSort(asc=false) {
      return (e) => {
        console.log('onSort', asc);
        e.preventDefault();
        const randomNumbersTags = document.querySelectorAll('.js-random-number');
        console.log({ randomNumbersTags });
        const randomNumber = Object.values(randomNumbersTags).map(e => e.data('id'));
        const sorted = asc ? randomNumber.sort((a, b) => a - b) : randomNumber.sort((a, b) => b - a);
        sorted.forEach(element => {
          utils.renderNumber(element); 
        });
      }
    }
  }

  const bindEvents = () => {
    htmlElements.generateButton.addEventListener('click', handlers.onGenerate);
    htmlElements.sortAscendingButton.addEventListener('click', handlers.onSort(true));
    htmlElements.sortDescendingButton.addEventListener('click', handlers.onSort());
  }

  return {
    init() {
      bindEvents();
    }
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
