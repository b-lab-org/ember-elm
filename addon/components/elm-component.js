import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class ElmComponent extends Component {
  src = undefined;

  // anything you want to pass to the Elm module
  flags = undefined;

  // function that is passed the Elm module's ports
  setup = () => {}

  constructor(owner, args) {
    super(owner, args);

    this.src = args.src;
    this.flags = args.flags;
    this.setup = args.setup;
  }

  @action
  insertedElement(element) {    
    if (!this.src) {
      throw new Error('elm-component missing src object');
    }

    const { ports } = this.src.init({
      node: element,
      flags: this.flags
    });

    this.setup(ports);
  }
}
