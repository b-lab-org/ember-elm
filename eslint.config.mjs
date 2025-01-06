import ember from "eslint-plugin-ember";
import babel from "@babel/eslint-plugin";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import node from "eslint-plugin-node";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "blueprints/*/files/",
        "vendor/",
        "dist/",
        "tmp/",
        "docs/",
        "bower_components/",
        "coverage/",
        ".node_modules.ember-try/",
        "bower.json.ember-try",
        "package.json.ember-try",
    ],
}, ...compat.extends("eslint:recommended", "plugin:ember/recommended"), {
    plugins: {
        ember,
        "@babel": babel,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: babelParser,
        ecmaVersion: 2017,
        sourceType: "module",

        parserOptions: {
            requireConfigFile: false,

            babelOptions: {
                plugins: [["@babel/plugin-proposal-decorators", {
                    decoratorsBeforeExport: true,
                }]],
            },
        },
    },

    rules: {},
}, {
    files: [
        "**/.template-lintrc.js",
        "**/ember-cli-build.js",
        "**/index.js",
        "**/testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "tests/dummy/config/**/*.js",
        "**/.eslintrc.js",
    ],

    ignores: ["addon/**", "addon-test-support/**", "app/**", "tests/dummy/app/**"],

    plugins: {
        node,
    },

    languageOptions: {
        globals: {
            ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, "off"])),
            ...globals.node,
        },

        ecmaVersion: 2015,
        sourceType: "script",
    },
}];