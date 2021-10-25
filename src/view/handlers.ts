
import { Uri, TextDocument, FileSystemWatcher, CustomTextEditorProvider, WorkspaceSymbolProvider , SymbolKind} from 'vscode';
    // This the backend of the extension . . It parses LSP extension results on all the files and the entire workspace. Still a lot of kinks to be figured out
    // For now it will remain in one file since I am looking for way to keep it simple the entire point of this thing is to give visualization tools to the user. That being said this is an interactive tool 
    // and if it proves that the interactive part of this tool is going to increase the codebase I shall separate it out.

// This file handles all the logic to be rended by d3. this is just the internal Backend. All it handles is the workspace and files along with symbol hierarchys and passes the data to the d3Renderer.
// It has methods for analysis of the workspace tree inclduing diamond and cycle detectors for better system understanding all of which are parsed into d3 

class extensionDocumentHandler {
    // handles all extension messages on document open and ensures that all messages are fed to  filehandler
    
}
class symbolHandler {
    
    
}

class editorProvider extends CustomTextEditorProvider {
    type: Boolean // 0 is classic 1 is class hierarchy interconnect
    constructor

}

class fileHandler {
editor: graphEditorProvider ;
symbolHandler: Array<symbolHandler>;
    constructor(editorProvider: CustomTextEditorProvider, symHandler: Array<symbolHandler>){
        this.editor = editorProvider ; 
        this.symbolHandler = symHandler ;
    }
}


export class folderHandler {
    files: Array<fileHandler> ;
    folders: Array<folderHandler> ;
    constructor(){
        this.files = {}
        this.folders = 
    }
}
export class workspaceHandler {
    folder: Array<folderHandler>
   
    

    public detectDiamond(){

    }
    public detectCycle(){

    }
}

export function startEditor(){

}
export function stopEditor() {
    
}

// Executing everything

