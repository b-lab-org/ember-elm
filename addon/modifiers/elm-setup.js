import { modifier } from 'ember-modifier';

export default modifier(function elmSetup(element, [src, flags, setup]) {
  if (!src) {
    throw new Error('elm-component missing src object');
  }

  const { ports } = src.init({
    node: element,
    flags: flags
  });

  setup(ports);
});
