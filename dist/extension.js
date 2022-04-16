/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
const keywords = [
    { keyword: "assert", description: "Some description here" },
    { keyword: "assigns", description: "" },
    { keyword: "assumes", description: "" },
    { keyword: "allocates", description: "" },
    { keyword: "axiom", description: "" },
    { keyword: "axiomatic", description: "" },
    { keyword: "behavior", description: "" },
    { keyword: "behaviors", description: "" },
    { keyword: "breaks", description: "" },
    { keyword: "complete", description: "" },
    { keyword: "continues", description: "" },
    { keyword: "decreases", description: "" },
    { keyword: "double", description: "" },
    { keyword: "disjoint", description: "" },
    { keyword: "else", description: "" },
    { keyword: "ensures", description: "" },
    { keyword: "exits", description: "" },
    { keyword: "for", description: "" },
    { keyword: "frees", description: "" },
    { keyword: "float", description: "" },
    { keyword: `forall`, description: "" },
    { keyword: "if", description: "" },
    { keyword: "inductive", description: "" },
    { keyword: "invariant", description: "" },
    { keyword: "global", description: "" },
    { keyword: "label", description: "" },
    { keyword: "lemma", description: "" },
    { keyword: "logic", description: "" },
    { keyword: "loop", description: "" },
    { keyword: "pragma", description: "" },
    { keyword: "predicate", description: "" },
    { keyword: "reads", description: "" },
    { keyword: "real", description: "" },
    { keyword: "requires", description: "" },
    { keyword: "returns", description: "" },
    { keyword: "signed", description: "" },
    { keyword: "sizeof", description: "" },
    { keyword: "slice", description: "" },
    { keyword: "impact", description: "" },
    { keyword: "struct", description: "" },
    { keyword: "terminates", description: "" },
    { keyword: "type", description: "" },
    { keyword: "variant", description: "" },
];
function activate(context) {
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ language: "c" }, {
        provideCompletionItems(document, position, token) {
            return keywords.map((word) => {
                return new vscode.CompletionItem({ label: word.keyword, description: word.description }, vscode.CompletionItemKind.Keyword);
            });
        },
    }));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map