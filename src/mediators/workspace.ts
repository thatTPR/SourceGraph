import { workspace, WorkspaceConfiguration, FileSystemProvider } from 'vscode';
import { fileMediator ,/* notebookMediator*/} from './file';
import { folderMediator } from './folder';


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
//     resources: fileMediator | notebookMediator | Set<fileMediator> | Set<notebookMediator> ;
//     public provideEditor(){

//     }

// }


export class workspaceMediator {
    
    public folders: Set<folderMediator>;
    constructor() {        
        for(let index in workspace.workspaceFolders){
            this.folders =        
        
    }
    public getFolders(){

    }
          
}


