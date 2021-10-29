import * as vscode from 'vscode';
import { /*embeddedView,*/ workspaceGraph ,cycleScale, diamondScale } from './view/layers/workspace';
import * as extension from './extension';
// This file calls layers classes and handles calling of the app as well as responsibility for contributions. 
// It should stay relatively simple calling embedded views and workspace methods. everything else is handled in the constructors and 
// by the class instances automatically. The extension just loads the graph and then refreshes it. events are handled internally as well  
export class SidebarProvider implements vscode.WebviewViewProvider{
    resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext<unknown>, token: vscode.CancellationToken): void | Thenable<void> {
        throw new Error('Method not implemented.');
    }
    
}

export function renderWorkSpace(){
    const panel = vscode.window.createWebviewPanel('Source graph',
        'Source graph',
        vscode.ViewColumn.Active,
        {}
    )
    panel.webview.asWebviewUri(vscode.Uri.file('./view/index.html'))
}
// export function openFileSymbolGraph(){

//     view = new embeddedView(new embeddedEditorMediator() , undefined, undefined)
    
// }
export function viewContainerEnable(){
    // contains multiple tree views. Right now just contains. Statistics about cycles and diamonds
    
}
export function scaleSidebarGraph(){
    
}

export function statusBarEnable() {
    // Status bar and 
    
    const statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left, 1)
    statusBarItem.text = "SourceGraph";
    statusBarItem.tooltip = "Open Ource Graph View";
    statusBarItem.command = "sg.enable";
    statusBarItem.show()
   
}
