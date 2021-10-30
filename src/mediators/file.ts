import { ThemeIcon,TextEditor, CustomTextEditorProvider, CustomDocument, NotebookDocument, CustomEditorProvider, Uri } from "vscode";

import {/* editorType, embeddedEditorMediator */} from './workspace';
import { symbolMediator } from './symbol';
import { folderMediator} from './folder';


export class fileIconMediator {
   
}
// class classicEditorMediator implements embeddedEditorMediator{
//     editorType: editorType;
//     constructor(){
//         this.editorType = 0 ;
//     }
// }


// class documentEditor {
//     editorType: CustomEditorProvider;
//     constructor(editorType: documentEditorType) {
//         this.editorType = editorType;
//     }
//     public setEditorType(editorType: documentEditorType) {
//         this.editorType = editorType;
//     }
//     public getEditorType() {
//         return this.editorType;
//     }
   
// }

// export class multifileEditorMediator{
//     files: Set<fileMediator>;
//     constructor(files: Set<fileMediator>){
//         this.files = files ;
//     }
// }
// export class notebookEditorMediator{
//     notebook
// }
export class fileMediator {
    Uri: Uri ;
    children: symbolMediator ;
    parent: folderMediator ;
    
    constructor(parent: folderMediator, Uri: Uri){
        this.children = 
        this.Uri = 
        this.parent = parent ;
          
    } 
   
    public getReferences(){

    }
    public getUses(){

    }
    public editRange(range: ; content: string){

    }
    public readRange(range: ; content: string){

    }
    public getSVGIcon(){
        this.
    }
}



function getReferences() {
    throw new Error("Function not implemented.");
}

