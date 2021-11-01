import { ThemeIcon, TextEditor, CustomTextEditorProvider, CustomDocument, NotebookDocument, CustomEditorProvider, Uri, DocumentSymbolProvider } from "vscode";

import {/* editorType, embeddedEditorMediator */ } from './workspace';
import { symbolIconMediator, symbolMediator } from './symbol';
import { folderMediator } from './folder';



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
//     public ArrayEditorType(editorType: documentEditorType) {
//         this.editorType = editorType;
//     }
//     public getEditorType() {
//         return this.editorType;
//     }

// }

// export class multifileEditorMediator{
//     files: Array<fileMediator>;
//     constructor(files: Array<fileMediator>){
//         this.files = files ;
//     }
// }
// export class notebookEditorMediator{
//     notebook
// }
export class fileMediator {
    Uri: Uri;
    children: symbolMediator;
    
    parent: folderMediator;
    themeIcon: ThemeIcon ;
    constructor(parent: folderMediator, Uri: Uri) {
        this.children = new symbolMediator( symbol, this, new symbolIconMediator());
        this.Uri = Uri;
        this.parent = parent;

    }
    private providerResultConvert(ProviderResult: ProviderResult){
        return
    }
    public getChildren() {

    }
    public getReferences() {
        providerResult 
    }
    public getUses() {

    }

    public readRange(range:DocumentSymbolProvider.ranges ; content: string) {

    }
    public getSVGIcon() {
        this.
    }

    public getReferences() {
        throw new Error("Function not implemented.");
    }
}



