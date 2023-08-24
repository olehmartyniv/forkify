class SearchView {
  #parentElement = document.querySelector('.search');
  #inputField = document.querySelector('.search__field');

  getQuery() {
    const query = this.#inputField.value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#inputField.value = '';
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', event => {
      event.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
