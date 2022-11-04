import Component from '@ember/component';
import { hbs } from "ember-cli-htmlbars";

export default Component.extend({
  classNames: "emoji-picker",

  value: "",
  onChange: undefined,

  layout: hbs`
    <input value={{value}} onkeyup={{action onChange value="target.value"}}>
  `,

  didInsertElement() {
    this.$("input").emojiPicker();
  },

  willDestroyElement() {
    this.$("input").emojiPicker("destroy");
  }
});
