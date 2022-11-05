import Controller from '@ember/controller';
import { set } from '@ember/object';
import Elm from "dummy/elm-modules";

export default class ApplicationController extends Controller {
    // eslint-disable-next-line
    sendToElm(message) {};
    value = "👋";
    Elm = Elm;
    flags = '{}';

    actions = {
        sendToElm() {
            this.sendToElm(this.value);
            set(this, "value", "");
        },

        setupPorts(ports) {
            set(this, "sendToElm", ports.emberMessage.send);
        },

        onChange(event) {
            set(this, "value", event.target.value);
        }
    }
}