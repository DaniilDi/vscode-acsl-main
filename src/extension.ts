// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

const keywords = [
  {keyword: "assert", description: "Some description here"},
  {keyword: "assigns", description: ""},
  {keyword: "assumes", description: ""},
  {keyword: "allocates", description: ""},
  {keyword: "axiom", description: ""},
  {keyword: "axiomatic", description: ""},
  {keyword: "behavior", description: ""},
  {keyword: "behaviors", description: ""},
  {keyword: "breaks", description: ""},
  {keyword: "complete", description: ""},
  {keyword: "continues", description: ""},
  {keyword: "decreases", description: ""},
  {keyword: "double", description: ""},
  {keyword: "disjoint", description: ""},
  {keyword: "else", description: ""},
  {keyword: "ensures", description: ""},
  {keyword: "exits", description: ""},
  {keyword: "for", description: ""},
  {keyword: "frees", description: ""},
  {keyword: "float", description: ""},
  {keyword: `forall`, description: ""},
  {keyword: "if", description: ""},
  {keyword: "inductive", description: ""},
  {keyword: "invariant", description: ""},
  {keyword: "global", description: ""},
  {keyword: "label", description: ""},
  {keyword: "lemma", description: ""},
  {keyword: "logic", description: ""},
  {keyword: "loop", description: ""},
  {keyword: "pragma", description: ""},
  {keyword: "predicate", description: ""},
  {keyword: "reads", description: ""},
  {keyword: "real", description: ""},
  {keyword: "requires", description: ""},
  {keyword: "returns", description: ""},
  {keyword: "signed", description: ""},
  {keyword: "sizeof", description: ""},
  {keyword: "slice", description: ""},
  {keyword: "impact", description: ""},
  {keyword: "struct", description: ""},
  {keyword: "terminates", description: ""},
  {keyword: "type", description: ""},
  {keyword: "variant", description: ""},
];

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      { language: "c" },
      {
        provideCompletionItems(
          document: vscode.TextDocument,
          position: vscode.Position,
          token: vscode.CancellationToken
        ) {
          return keywords.map((word) => {
            return new vscode.CompletionItem(
				{label: word.keyword, description: word.description},
              vscode.CompletionItemKind.Keyword
            );
          });
        },
      }
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
