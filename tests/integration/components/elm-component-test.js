import { run } from "@ember/runloop";
import { render } from '@ember/test-helpers';
import Elm from "dummy/elm-modules";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from 'qunit';

module("Integration | Component | elm component", function(hooks) {
  setupRenderingTest(hooks);

  test("it works", async function(assert) {
    const done = assert.async();
    this.set("Elm", Elm);
    await render(hbs`<div>{{elm-component src=this.Elm.Main.Hello}}</div>`);

    run.next(() => {
      assert.dom(this.element).hasText("hello world");
      done();
    });
  });
});
