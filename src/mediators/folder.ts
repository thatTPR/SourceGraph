import {fileMediator} from "./file";
import { workspace, Uri, ThemeIcon} from "vscode";

export class folderIconMediator {
    
    constructor(uri: Uri){

    }
    public getSVG(){

    }
}
export class folderMediator {
    iconMediator: folderIconMediator;
    uri: Uri ;
    children: Set<fileMediator | folderMediator> ;
    folders: Set<folderMediator> ;
    // Constructed by another folder mediator
    constructor(Uri: Uri){
        this.uri = Uri ;
        this.iconMediator = new folderIconMediator(this.uri);
        
    } 
    public provideChildren(){ // Called when constructed

    }
    public getChildren(){ // Called when another class requests a child

    }
    public createChildren(){ // Called when user create a new file or folder

    }
    public detectDiamonds(){

    }
    public detectCycles(){

    }
}
