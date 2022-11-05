import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Elm from "dummy/elm-modules";

export default class ApplicationController extends Controller {
    @tracked
    value = '👋';

    Elm = Elm;
    flags = '{}';
    sendToElm() {}

    @action
    setupPorts(ports) {
        this.sendToElm = ports.emberMessage.send;
    }

    @action
    postElmMessage() {
        this.sendToElm(this.value);
        this.value = '';
    }

    @action
    onChange(event) {
        this.value = event.target.value;
    }
}