import * as vscode from 'vscode';

let timer: NodeJS.Timeout | undefined;
let time = 0;
let timerStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
  timerStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  timerStatusBarItem.text = '0:00:00';
  timerStatusBarItem.show();
  context.subscriptions.push(timerStatusBarItem);

  let startCommand = vscode.commands.registerCommand('timed-session.start', () => {
    if (timer) {
      clearInterval(timer);
      timer = undefined;
    }
    timer = setInterval(() => {
      time++;
      timerStatusBarItem.text = new Date(time * 1000).toISOString().substr(11, 8);
    }, 1000);
  });

  let pauseCommand = vscode.commands.registerCommand('timed-session.pause', () => {
    if (timer) {
      clearInterval(timer);
      timer = undefined;
    }
  });

  let clearCommand = vscode.commands.registerCommand('timed-session.clear', () => {
    if (timer) {
      clearInterval(timer);
      timer = undefined;
    }
    time = 0;
    timerStatusBarItem.text = '0:00:00';
  });

  context.subscriptions.push(startCommand, pauseCommand, clearCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
