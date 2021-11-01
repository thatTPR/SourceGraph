import { workspace, WorkspaceConfiguration, FileSystemProvider, commands, Disposable } from 'vscode';
import { fileMediator ,/* notebookMediator*/} from './file';
import { folderMediator } from './folder';
import 'fs';

// export enum editorType{
//     classic = 0,
//     graph = 1,
//     notebook = 2,
//     notebookgraph = 3,
//     custom = 4,
//     crossFileGraph = 5,
//     crossNotebookGraph = 6,
//     agnosticCrossGraph = 7,
// }

// export interface embeddedEditorMediator{
//     editorType: editorType ;
//     resources: fileMediator | notebookMediator | Array<fileMediator> | Array<notebookMediator> ;
//     public provideEditor(){

//     }

// }

export class commandDisposable extends Disposable{

}
export class workspaceMediator {
    public rootfolders: Array<folderMediator>; // Array of folders opened by editor

    constructor() {        
        for(let index in workspace.workspaceFolders){
            this.rootfolders =        
        
    }
    public getFolders(){

    }
    public lspCOmmand(){
        commands.registerCommand()
    }

          
}


