import { TextEditor, CustomTextEditorProvider, CustomDocument, NotebookDocument, CustomEditorProvider } from "vscode";

export class icon{

}
class diamonds {

}
class cycles {

}
enum editorType{
    classic,
    graph,
    notebook,
    notebookgraph,
    custom,
    crossgraph,
    
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
class customClassicEditorProvider extends Document {

}
class graphEditorProvider extends CustomTextEditorProvider {

}
class customNotebookEditorProvider extends notebookEditorProvider {

}
class graphNotebookEditorProvider extends customEditorProvider {

}
export class fileMediator {
    editor: graphEditorProvider;
    symbolMediator: Array<symbolMediator>; // What would normally be in the outline.

    constructor(editorProvider: CustomTextEditorProvider, symMediator: Array<symbolMediator>) {
        this.editor = editorProvider;
        this.symbolMediator = symMediator;
    }
}



