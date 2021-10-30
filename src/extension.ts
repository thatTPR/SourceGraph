import * as vscode from 'vscode';
import * as renderer from './Renderer';



export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "interactive-source-graph" is now active!');
	
	
	context.subscriptions.push(vscode.commands.registerCommand('sg.enable', () => {
		renderer.statusBarEnable();
		renderer.viewsEnable();
		
	}));
	
	
	// context.subscriptions.push(vscode.commands.registerCommand('sg.openFileSymbolGraph', ()=> {
	// 	renderer.viewContainerEnable();
	// 	renderer.statusBarEnable();
	// 	renderer.openFileSymbolGraph();
	// }))
	


}


// this method is called when your extension is deactivated
export function deactivate(context: vscode.ExtensionContext)  {
	
}

