import {SymbolKind, ThemeIcon, SymbolInformation, SaveDialogOptions} from 'vscode';
import {} from '../../mediators/symbol'
// Contains both icons and Code symbols (if applicable)
import {fileIncludeGraph, fileNode, filePipe} from './file';
import {} from './folder';
import {} from './workspace';

export class symbolNode {
    type: SymbolInformation;
    icon: 
    constructor(type: SymbolInformation){
        this.type = type;
    }
}

enum arrowType{
    impl = 0,
    ref = 1,
    def = 2,
    typedef = 3
}
export class symbolArrow {
    cycleFlag: Boolean;
    diamondFlag: Boolean;
    type: arrowType;
    rendered: Boolean;
    constructor() {
        this.cycleFlag = false;
        this.diamondFlag = false;
        this.rendered = false ;
        this.type = ;
    }
    private async animation(source: , dest:){
        while(this.rendered){

        }
    }
    private embed(container: filePipe | folderChannel ){
        container.IncludeSymbolArrow(this)
    }
    private renderArrow(){
        // Render code
        this.animation
    }
}
export class symbolincludeGraph {

    symbolNodes: Array<symbolArrow>;
    symbolArrows: Array<symbolNode>;

    constructor(symbolNodes: Array<symbolNode>, symbolArrows: Array<symbolArrow>) {
        this.symbolArrows = symbolArrows; this.symbolNodes = symbolNodes;
    }
    // This applies modification to arrow cycles and / or diamonds  // Cycles pink, diamonds light blue
    public diamondModifier() {
    }
    public cycleModifier() {
    }

}
