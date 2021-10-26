import * as fileMed from "./file"
import { workspace} from "vscode";
export class icon{

}
export class folderMediator {
    icon:
    files: Array<fileMediator> ;
    folders: Array<folderMediator> ;
    constructor(){
        workspace.workspaceFolders ; // This is wrong
        this.files = {}
        this.folders = 
    }
}
