//Event Delegation - attach a single event listener(on parent) for all elements
//Benefits:
//Simplifies initialization and saves memory: no need to add many handlers.
//Less code: when adding or removing elements, no need to add/remove handlers.
//DOM modifications: we can mass add/remove elements with innerHTML and alike.

class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      alert('saving');
    }

    load() {
      alert('loading');
    }

    search() {
      alert('searching');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

  new Menu(menu);
