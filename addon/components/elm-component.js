import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class ElmComponent extends Component {
  @action
  insertedElement(element) {    
    if (!this.args.src) {
      throw new Error('elm-component missing src object');
    }

    const { ports } = this.args.src.init({
      node: element,
      flags: this.args.flags
    });

    this.args.setup(ports);
  }
}
