import {TextEditor, CustomTextEditorProvider, CustomDocument, NotebookDocument , CustomEditorProvider} from "vscode";

    enum documentEditorType {
        classic = 0,
        graph = 1,
        notebook = 2,
        graphnotebook = 3
    }
    class diamonds{
    
    }
    class cycles {
    
    }
    class documentEditorMediator {
        editorType: documentEditorType;
        constructor(editorType: documentEditorType) {
            this.editorType = editorType;
        }
        public setEditorType(editorType: documentEditorType){
            this.editorType = editorType ;
        }
        public getEditorType(){
            return this.editorType;
        }
        public diamondDetector(){
            
        }
    }
    class customClassicEditorProvider extends Document{
        
    }
    class graphEditorProvider extends CustomTextEditorProvider {
    
    }
    class customNotebookEditorProvider extends notebookEditorProvider {
    
    }
    class graphNotebookEditorProvider extends customEditorProvider {
    
    }
    class fileMediator {
        editor: graphEditorProvider;
        symbolMediator: Array<symbolMediator>;
        constructor(editorProvider: CustomTextEditorProvider, symMediator: Array<symbolMediator>) {
            this.editor = editorProvider;
            this.symbolMediator = symMediator;
        }
    }
    


