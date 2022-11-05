import Component from '@ember/component';

export default class ElmComponent extends Component {
  // Elm module
  src = undefined;

  // anything you want to pass to the Elm module
  flags = undefined;

  // function that is passed the Elm module's ports
  // eslint-disable-next-line
  setup(ports) {}

  didReceiveAttrs() {
    this._super(...arguments);

    if (!this.src) {
      throw new Error("elm-component missing src object");
    }
  }

  didInsertElement() {
    this._super(...arguments);

    const { ports } = this.src.init({
      node: this.element,
      flags: this.flags
    });

    this.setup(ports);
  }
}
