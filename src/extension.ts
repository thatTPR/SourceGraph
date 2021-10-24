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
	  	panel.webview.asWebviewUri(vscode.Uri.file('./view/index.html'))
	}));

}


// this method is called when your extension is deactivated
export function deactivate(context: vsccode.ExtensionContext)  {
	context.subscriptions.po
}

