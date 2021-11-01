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
export class contextHandler implements vscode.WebviewViewProvider {
    explorer: vscode.WebviewViewResolveContext ; 
    search:  vscode.WebviewViewResolveContext;
    scm:  vscode.WebviewViewResolveContext;
    sg: vscode.WebviewViewResolveContext;
    constructor(explorer: vscode.WebviewViewResolveContext,
        search:  vscode.WebviewViewResolveContext,
        scm:  vscode.WebviewViewResolveContext,
        
    ){
        this.explorer = explorer ;
        this.search = search ;
        this.scm = scm ;
        this.sg = 
    }
    resolveWebviewView(webviewView: vscode.)
    
    // debug:
}
class sidebarPreArrayHandler implements vscode.WebviewViewProvider{

}

class sidedebarListeners {
    explorer
}
class renderViewHandler { // This is so you can move views and share them across view containers
    explorer: vscode.WebviewViewProvider ; 
    search:  vscode.WebviewViewProvider;
    scm:  vscode.WebviewViewProvider;
    constructor(explorer: vscode.WebviewViewProvider,
        search:  vscode.WebviewViewProvider,
        scm:  vscode.WebviewViewProvider,
    ){
        this.explorer = explorer ;
        this.search = search ;
        this.scm = scm ;
    }
    // debug:

}


export function mainViewEnable(){
    vscode.window.showWorkspaceFolderPick
    const panel = vscode.window.createWebviewPanel('Source graph',
    'Source graph',
    vscode.ViewColumn.Active,
    {}
    )
    panel.webview.asWebviewUri(vscode.Uri.file('./view/index.html'))
    
}
export function customSidebarEnable(){
    
}
export function explorerViewEnable(){
    
}
export function scmViewEnable(){
    
}
export function debugViewEnable(){
    
}
export function statusBarEnable() {
    // Status bar and 
    
    const statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left, 1)
        statusBarItem.text = "SourceGraph";
        statusBarItem.tooltip = "Open Surce Graph Sidebar View";
        statusBarItem.command = "sg.enable";
        statusBarItem.show()
        
    }
    
    
    export function viewsEnable(){
        mainViewEnable();
        customSidebarEnable();
        explorerViewEnable();
        scmViewEnable();
        debugViewEnable();
        statusBarEnable();
    }







    //  IDEAS
    // class symbolScaleNode {
    //     symbol: symbolNode ;
    //     value: number ;
    //     constructor(node: symbolNode, value: number ){
    //         this.symbol = node ;
    //         this.value = value ;
    //     }
    // }
    // class fileScaleNode {
    //     file: fileNode ;
    //     value: number ;
    //     constructor(node: fileNode, value: number ){
    //         this.file = node ;
    //         this.value = value ;
    //     }
    // }
    // class folderScaleNode {
    //     folder: folderNode ;
    //     value: number ;
    //     constructor(node: folderNode, value: number ){
    //         this.folder = node ;
    //         this.value = value ;
    //     }
    // }