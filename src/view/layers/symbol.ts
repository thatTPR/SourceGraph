import {SymbolKind, ThemeIcon, SymbolInformation, SaveDialogOptions} from 'vscode';
import {symbolMediator} from '../../mediators/symbol'
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
    symbolMediator: symbolMediator;
    fileNode: fileNode ;
    constructor(type: SymbolInformation, symbolMediator: symbolMediator, fileNode: fileNode){
        this.type = type;
        this.symbolMediator = symbolMediator ;
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
    includedIn: filePipe ;
    constructor( cycleFlag: number,
        diamondFlag: number,
        type: arrowType,
        rendered: Boolean,
        source: symbolNode,
        dest: symbolNode, 
        includedIn: filePipe) {
        this.cycleFlag = cycleFlag;
        this.diamondFlag = diamondFlag;
        this.rendered = false ;
        this.type = type;
        this.source = source;
        this.dest = dest;
        this.includedIn = includedIn;
    }
    set( cycleFlag: number,
        diamondFlag: number,
        type: arrowType,
        rendered: Boolean,
        source: symbolNode,
        dest: symbolNode,
        includedIn: filePipe ) {
        this.cycleFlag = cycleFlag;
        this.diamondFlag = diamondFlag;
        this.rendered = false ;
        this.type = type;
        this.source = source;
        this.dest = dest;
        this.includedIn= includedIn;
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
export class symbolIncludeGraph {

    nodes: Array<symbolNode>;
    arrows: Array<symbolArrow>;
    
    constructor(symbolNodes: Array<symbolNode>, symbolArrows: Array<symbolArrow>) {
        this.arrows = symbolArrows; this.nodes = symbolNodes;
    }
    public addArrow(src: symbolNode, dest: symbolNode) {
        this.nodes;
        this.arrows.push();
    }
    public removeArrow(){
        
    }
    public diamondModifier() {
    }
    public cycleModifier() {
    }

}
