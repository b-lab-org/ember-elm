import { setApplication } from '@ember/test-helpers';
import { loadTests } from 'ember-qunit/test-loader';
import { start, setupEmberOnerrorValidation } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import Application from '../app';
import config from '../config/environment';

setupEmberOnerrorValidation();
loadTests();

setup(QUnit.assert);

setApplication(Application.create(config.APP));

start();