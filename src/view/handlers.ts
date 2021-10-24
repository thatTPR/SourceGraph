
import { Uri, TextDocument, FileSystemWatcher, CustomTextEditorProvider, WorkspaceSymbolProvider , SymbolKind} from 'vscode';
    // This the backend of the extension . . It parses LSP extension results on all the files and the entire workspace. Still a lot of kinks to be figured out
    // For now it will remain in one file since I am looking for way to keep it simple the entire point of this thing is to give visualization tools to the user. That being said this is an interactive tool 
    // and if it proves that the interactive part of this tool is going to increase the codebase I shall separate it out.



class extensionDocumentHandler {
    // handles all extension messages on document open and ensures that all messages are fed to  filehandler
    
}
class fileHandler {
editor: CustomTextEditorProvider ;
symbolHandler: Array<symbolHandler>;
constructor(editorProvider: CustomTextEditorProvider, symHandler: Array<symbolHandler>){
        this.editor = editorProvider ; 
        this.symbolHandler = symHandler ;
    }
}
class symbolHandler {
    
    
}
// Layer Architescture 
// 1. Editor
// 2. 


export class folderHandler {
    files: Array<FileHandler>;
    folders: Array<folderHandler> ;
}
export class workspaceHandler {
    files: Array<fileHandler>
    symbolHandler: 
    public lsp

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

