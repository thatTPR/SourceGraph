import { workspace } from 'vscode';

export class workspaceMediator {
    folders: any;
    constructor() {
        this.folders = workspace.workspaceFolders;
    }
    public buildWorkspace(folders: workspace.workspaceFolders) {
        for (let index = 0; index < folders.length; index++) {
            folders[index];

        }

    }

    
    public detectDiamond() {
        // Triggered If any symbol calls two or more symbols recurring
        //  that all call 1 symbol 
    }

    public detectCycle() {
        // If any symbol calls a symbol reccuring that calls the original symbol
    }
    public getMaxCycleCount(){

    }
    public getMinCycleCount(){

    }
    public getMaxDiamondCount(){

    }
    public getMinDiamondCount(){

    }
}

export function startEditor() {

}
export function stopEditor() {

}

