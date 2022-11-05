import { A } from '@ember/array';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Elm from "dummy/elm-modules";

export default class ApplicationController extends Controller {
    @tracked
    value = '👋';

    @tracked
    messages = A([]);

    Elm = Elm;
    flags = '{}';
    sendToElm() {}

    recieveElmMessage(message) {
        this.messages.pushObject(message);
    }

    @action
    setupPorts(ports) {
        this.sendToElm = ports.emberMessage.send;
        ports.elmMessage.subscribe(this.recieveElmMessage.bind(this));
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