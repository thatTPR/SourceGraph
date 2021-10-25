enum documenteditorType {
    classic = 0,
    graph = 1,
    notebook = 2 ,
    graphnotebook = 3    
}
class documentEditorMediator {
    editorType: documenteditorType;
    constructor(editorType: documenteditorType){
        this.editorType = editorType ;
    }

}
class symbolMediator { // Manages extension provider for the workspace
    
    
}

}
class editorProvider extends CustomTextEditorProvider {
    EditorType: EditorType// 0 is classic 1 is class hierarchy interconnect
    super (EditorType: EditorType){
        this.EditorType= EditorType;
    }


}



class fileMediator {
editor: graphEditorProvider ;
symbolMediator: Array<symbolMediator>;
    constructor(editorProvider: CustomTextEditorProvider, symMediator: Array<symbolMediator>){
        this.editor = editorProvider ; 
        this.symbolMediator = symMediator ;
    }
}


