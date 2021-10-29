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
    children: Set<fileMediator | folderMediator> ;
    parent: folderMediator | workspaceMediator ;
    // Constructed by another folder mediator
    constructor(Uri: Uri, parent: folderMediator | workspaceMediator, children: Set<fileMediator | folderMediator>  ){
        this.uri = Uri ;
        // this.iconMediator = new folderIconMediator(this.uri);
        this.children = children
        this.parent = parent ;
    } 
    public provideChildren(){ // Called when constructed
        
    }
    public getChildren(){ // Called when another class requests a child

    }
    public createChildren(){ // Called when user create a new file or folder

    }
    
}
