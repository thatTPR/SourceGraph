import * as vscode from 'vscode';
import { cycleScale, diamondScale, workspaceGraph } from './view/layers/workspace';
import './extension';
class sourceGraphActivity {
    cycleScale: cycleScale;
    diamondScale: diamondScale;
    public setDiamondScale(diamondScale: diamondScale) {
        this.diamondScale = diamondScale;
    }
    public setCycleScale(cycleScale: cycleScale) {
        this.cycleScale = cycleScale;
    }

}

class SourceGraphtreeDataProvider implements vscode.TreeDataProvider {
   
     onDidChangeTreeData?: Event<T | undefined | null | void>;

     
     getTreeItem(element: T): TreeItem | Thenable<TreeItem>;

    
     getChildren(element?: T): ProviderResult<T[]>;

     getParent?(element: T): ProviderResult<T>;

     resolveTreeItem?(item: TreeItem, element: T, token: CancellationToken): ProviderResult<TreeItem>;
 

}
class SourceGraphTreeViewOptions implements vscode.TreeViewOptions {
    treeDataProvider: TreeDataProvider<T>;

    /**
     * Whether to show collapse all action or not.
     */
    showCollapseAll?: boolean;

    /**
     * Whether the tree supports multi-select. When the tree supports multi-select and a command is executed from the tree,
     * the first argument to the command is the tree item that the command was executed on and the second argument is an
     * array containing all selected tree items.
     */
    canSelectMany?: boolean;
}

export function sgEnable() {
    const panel = vscode.window.createWebviewPanel('Source graph',
        'Source graph',
        vscode.ViewColumn.Active,
        {}
    )
    panel.webview.asWebviewUri(vscode.Uri.file('./view/index.html'))
    const statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left, 1)
    statusBarItem.text = "SourceGraph";
    statusBarItem.tooltip = "Open Ource Graph View";
    statusBarItem.command = "sg.enable";
    statusBarItem.show()
    const treeView = vscode.window.createTreeView('Source Graph', new SourceGraphTreeViewOptions())
}
