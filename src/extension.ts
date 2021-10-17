// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import './viewer.ts';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "interactive-source-graph" is now active!');
	
	context.subscriptions.push(vscode.commands.registerCommand('interactive-source-graph.enable', () => {
		const panel = vscode.window.createWebviewPanel(
			'Source Graph', // Identifies the type of the webview. Used internally
			'Source Graph', // Title of the panel displayed to the user
			vscode.ViewColumn.One
				
		),);

}

// this method is called when your extension is deactivated
export function deactivate() {}

