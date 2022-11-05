import Component from '@ember/component';
import classic from 'ember-classic-decorator';

@classic
export default class ElmComponent extends Component {
  // Elm module
  src = undefined;

  // anything you want to pass to the Elm module
  flags = undefined;

  // function that is passed the Elm module's ports
  setup() {}

  didReceiveAttrs() {
    super.didReceiveAttrs(...arguments);

    if (!this.src) {
      throw new Error('elm-component missing src object');
    }
  }

  didInsertElement() {
    super.didInsertElement(...arguments);

    const { ports } = this.src.init({
      node: this.element,
      flags: this.flags
    });

    this.setup(ports);
  }
}
