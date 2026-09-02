import * as vscode from "vscode";

const aliveCommand = (): void => {
  vscode.window.showInformationMessage(
    "Hello world from Node VS Code Extension Boilerplate."
  );
};

export const registerAliveCommand = (): vscode.Disposable => {
  return vscode.commands.registerCommand(
    "node-vscode-extension-boilerplate.alive",
    aliveCommand
  );
};
