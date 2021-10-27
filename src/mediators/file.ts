import { ThemeIcon,TextEditor, CustomTextEditorProvider, CustomDocument, NotebookDocument, CustomEditorProvider, Uri } from "vscode";
import { editorType, embeddedEditorMediator } from './workspace';
import { symbolMediator , symbolNode} from './symbol';
import {folderChannel} from './folder';


export class fileIconMediator {
   
}
class classicEditorMediator implements embeddedEditorMediator{
    editorType: editorType;
    constructor(){
        this.editorType = 0 ;
    }
}


class documentEditor {
    editorType: CustomEditorProvider;
    constructor(editorType: documentEditorType) {
        this.editorType = editorType;
    }
    public setEditorType(editorType: documentEditorType) {
        this.editorType = editorType;
    }
    public getEditorType() {
        return this.editorType;
    }
   
}

export class notebookMediator{

}
export class fileMediator {
    iconMediator: fileIconMediator;
    Uri: Uri ;
    symbolMediator: symbolMediator ;
    folder: folderMediator ;
    constructor(child: ){
        this.iconMediator = 
        this.Uri = current    
    } 
    public detectDiamonds(){

    }
    public detectCycles(){

    }
    public getReferences(){

    }
    public getUses(){

    }
    public editRange(range: ; content: string){

    }
    public readRange(range: ; content: string){

    }
}



