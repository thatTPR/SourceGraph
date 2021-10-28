import { SymbolKind, ThemeIcon, SymbolInformation, SaveDialogOptions } from 'vscode';
import { symbolMediator } from '../../mediators/symbol'
// Contains both icons and Code symbols (if applicable)
import { fileIncludeGraph, fileNode, filePipe } from './file';
import { folderChannel } from './folder';
import { cycleIndex } from './workspace';

export type symbolPath = Array<symbolNode>;
export type symbolCycle = Array<symbolNode>;
export class symbolDiamond {
    start: symbolNode;
    intPaths: Array<symbolPath>;
    end: symbolNode;
    constructor(start: symbolNode, intPaths: Array<symbolPath>, end: symbolNode) {
        this.start = start; this.intPaths = intPaths; this.end = end;
    }

}

export class symbolNode {
    type: SymbolInformation;
    symbolMediator: symbolMediator;
    fileNode: fileNode;

    constructor(type: SymbolInformation, symbolMediator: symbolMediator, fileNode: fileNode) {
        this.type = type;
        this.symbolMediator = symbolMediator;
        this.fileNode = fileNode;
    }
}


export class symbolArrow {
    cycleFlag: number;
    diamondFlag: number;
    rendered: Boolean;
    source: symbolNode;
    dest: symbolNode;
    includedIn: filePipe;
    constructor(cycleFlag: number,
        diamondFlag: number,
        rendered: Boolean,
        source: symbolNode,
        dest: symbolNode,
        includedIn: filePipe) {
        this.cycleFlag = cycleFlag;
        this.diamondFlag = diamondFlag;
        this.rendered = false;
        this.source = source;
        this.dest = dest;
        this.includedIn = includedIn;
    }
    set(cycleFlag: number,
        diamondFlag: number,
        rendered: Boolean,
        source: symbolNode,
        dest: symbolNode,
        includedIn: filePipe) {
        this.cycleFlag = cycleFlag;
        this.diamondFlag = diamondFlag;
        this.rendered = false;
        this.source = source;
        this.dest = dest;
        this.includedIn = includedIn;
    }
    private async animation(source: symbolNode, dest: symbolNode) {
        while (this.rendered) {

        }

    }
    public embed(container: filePipe | folderChannel) {
        container.include(this);
    }
    public renderArrow() {

        // Render code
        this.animation
    }
}
class implArrow extends symbolArrow {

}
class refArrow extends symbolArrow{

}
class defArrow extends symbolArrow{

}
class typedefArrow extends symbolArrow{

}
class parentArrow extends symbolArrow{

}
export class symbolIncludeGraph {

    nodes: Array<symbolNode>;
    implArrows: Array<implArrow> | undefined;
    refArrows: Array<refArrow> | undefined ;
    defArrows: Array<defArrow> | undefined ;
    typedefArrows: Array<typedefArrow> | undefined;
    parentArrow: parentArrow | undefined;

    constructor(symbolNodes: Array<symbolNode>, implArrows: Array<implArrow>,
        refArrows: Array<refArrow> | undefined ,
        defArrows: Array<defArrow> | undefined ,
        typedefArrows: Array<typedefArrow> | undefined,
        parentArrow: parentArrow | undefined) {
        this.implArrows = implArrows; this.nodes = symbolNodes;
        this.refArrows = refArrows; 
        this.defArrows = defArrows ;
        this.typedefArrows = typedefArrows ;
        this.parentArrow = parentArrow
    }
    public addArrow(src: symbolNode, dest: symbolNode) {
        this.nodes;
        
    }
    public removeArrow() {

    }
    public diamondModifier() {
    }
    public cycleModifier() {
    }

}
