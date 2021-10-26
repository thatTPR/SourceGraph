import {SymbolKind, ThemeIcon, SymbolInformation, SaveDialogOptions} from 'vscode';
import {} from '../../mediators/symbol'
// Contains both icons and Code symbols (if applicable)
import {fileIncludeGraph, fileNode, filePipe} from './file';
import {} from './folder';
import {} from './workspace';

export type symbolPath = Array<symbolNode>;
export type symbolCycle = Array<symbolNode>;
export class symbolDiamond{
    start:symbolNode;
    intPaths: Array<symbolPath>;
    end:symbolNode;
    constructor(start:symbolNode, intPaths: Array<symbolPath>, end:symbolNode){
        this.start = start; this.intPaths = intPaths ; this.end = end ;
    }
   
} 

export class symbolNode {
    type: SymbolInformation;
    icon: ;
    container: fileNode | ;
    fileNode: fileNode ;
    constructor(type: SymbolInformation){
        this.type = type;
    }
}

enum arrowType{
    impl,
    ref,
    def,
    typedef
}

export class symbolArrow {
    cycleFlag: Boolean;
    diamondFlag: Boolean;
    type: arrowType;
    rendered: Boolean;
    source: symbolNode;
    dest: symbolNode ;

    constructor() {
        this.cycleFlag = false;
        this.diamondFlag = false;
        this.rendered = false ;
        this.type = ;
        this.source = 
        this.dest = 
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

    symbolNodes: Array<symbolNode>;
    symbolArrows: Array<symbolArrow>;

    constructor(symbolNodes: Array<symbolNode>, symbolArrows: Array<symbolArrow>) {
        this.symbolArrows = symbolArrows; this.symbolNodes = symbolNodes;
    }
    // This applies modification to arrow cycles and / or diamonds  // Cycles pink, diamonds light blue
    public diamondModifier() {
    }
    public cycleModifier() {
    }

}
