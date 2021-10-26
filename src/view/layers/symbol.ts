import {SymbolKind, ThemeIcon, SymbolInformation, SaveDialogOptions} from 'vscode';
import {} from '../../mediators/symbol'
// Contains both icons and Code symbols (if applicable)
import {fileIncludeGraph, fileNode, filePipe} from './file';
import {folderChannel} from './folder';
import { cycleIndex } from './workspace';

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
    // icon: ;
    fileNode: fileNode ;
    constructor(type: SymbolInformation,/* icon: ThemeIcon,*/ fileNode: fileNode){
        this.type = type;
        // this.icon = icon;
        this.fileNode = fileNode;
    }
}

enum arrowType{
    impl = 0,
    ref = 1,
    def = 2,
    typedef = 3
}

export class symbolArrow {
    cycleFlag: number;
    diamondFlag: number;
    type: arrowType;
    rendered: Boolean;
    source: symbolNode;
    dest: symbolNode ;
    filePipe: filePipe ;
    constructor( cycleFlag: number,
        diamondFlag: number,
        type: arrowType,
        rendered: Boolean,
        source: symbolNode,
        dest: symbolNode, 
        filePipe: filePipe) {
        this.cycleFlag = cycleFlag;
        this.diamondFlag = diamondFlag;
        this.rendered = false ;
        this.type = type;
        this.source = source;
        this.dest = dest;
        this.filePipe = filePipe;
    }
    set( cycleFlag: number,
        diamondFlag: number,
        type: arrowType,
        rendered: Boolean,
        source: symbolNode,
        dest: symbolNode,
        filePipe: filePipe ) {
        this.cycleFlag = cycleFlag;
        this.diamondFlag = diamondFlag;
        this.rendered = false ;
        this.type = type;
        this.source = source;
        this.dest = dest;
        this.filePipe = filePipe;
    }
    private async animation(source: symbolNode , dest: symbolNode){
        while(this.rendered){

        }

    }
    public embed(container: filePipe | folderChannel ){
        container.include(this);
    }
    public renderArrow(){

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
