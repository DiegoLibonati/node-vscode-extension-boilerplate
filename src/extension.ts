import type * as vscode from "vscode";

import { registerAliveCommand } from "@/commands/aliveCommand";

export function activate(context: vscode.ExtensionContext): void {
  console.log(
    "Congratulations, your 'Node VS Code Extension Boilerplate' extension is now active."
  );

  context.subscriptions.push(registerAliveCommand());
}

export function deactivate(): void {
  // no-empty-function
}
