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

    }

    public detectCycle() {

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

