import * as vscode from 'vscode';
import * as renderer from './view/handlers';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "interactive-source-graph" is now active!');
	
	context.subscriptions.push(vscode.commands.registerCommand('interactive-source-graph.start', () => {
		const panel = vscode.window.createWebviewPanel('interactive source graph',
        'Interactive source graph',
        vscode.ViewColumn.One,
        {}
      	)
	  	panel.webview.cspSource = getWebViewContent();
		
	}));
	function getWebViewContent(){
		return 
			'<!DOCTYPE html>
			<html lang="en">
			<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Interactive source graph</title>
			</head>
			<body>
			<script src="./renderer.js"></script> 
			';
	}

}


// this method is called when your extension is deactivated
export function deactivate()  {
}

