import * as vscode from 'vscode';

export class TimedSessionView implements vscode.TreeDataProvider<string> {
  onDidChangeTreeData?: vscode.Event<string | null | undefined> | undefined;

  data: string[] = [];

  getTreeItem(element: string): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return new vscode.TreeItem(element);
  }

  getChildren(element?: string | undefined): vscode.ProviderResult<string[]> {
    return this.data;
  }
}