import {fileMediator} from "./file";
import { workspace, Uri, ThemeIcon, WorkspaceFolder, WorkspaceFoldersChangeEvent} from "vscode";
import { workspaceMediator } from "./workspace";

export class folderIconMediator {
    
    constructor(uri: Uri){

    }
    public getSVG(){

    }
}
export class folderMediator {
    // iconMediator: folderIconMediator;
    uri: Uri ;
    folderchildren: Array<folderMediator> ;
    filechildren: Array<fileMediator>
    parent: folderMediator | workspaceMediator ;
    workspace: workspaceMediator ;
    // Constructed by another folder mediator
    constructor(Uri: Uri, parent: folderMediator | workspaceMediator, folderchildren: Array<folderMediator>,
        filechildren: Array<fileMediator>, workspace: workspaceMediator ){
        this.uri = Uri ;
        // this.iconMediator = new folderIconMediator(this.uri);
        this.folderchildren = folderchildren ;
        this.filechildren = filechildren ;
        this.parent = parent ;
        this.workspace = workspace ;
        this.provideChildren() ;
    } 
    public provideChildren(){ // Called when constructed
    }
    public getChildren(){ // Called when another class requests a child
        return this.filechildren ,this.folderchildren ; 

    }
    public addChildren(){
        
    }
    public createChildrenAction(){ // Called when user create a new file or folder

    }
    
}
