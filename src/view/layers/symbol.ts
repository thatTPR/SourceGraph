import { SymbolKind, ThemeIcon, SymbolInformation, SaveDialogOptions } from 'vscode';
import { symbolMediator } from '../../mediators/symbol'
// Contains both icons and Code symbols (if applicable)
import { fileGraph, fileNode, filePipe } from './file';
import { folderChannel } from './folder';
import { cycleIndex , diamond, cycle, path} from './workspace';

export class symbolPath implements path {
    content: Set<symbolNode>;
    constructor(content: Set<symbolNode>){
        this.content = content ;
    }
}
export class symbolCycle implements cycle {
    content: Set<symbolNode>;
    constructor(content: Set<symbolNode>){
        this.content = content ;
    }
}
export class symbolDiamond implements diamond{
    start: symbolNode;
    intPaths: Set<symbolPath>;
    end: symbolNode;
    constructor(start: symbolNode, intPaths: Set<symbolPath>, end: symbolNode) {
        this.start = start; this.intPaths = intPaths; this.end = end;
    }

}

export class symbolNode {
    type: SymbolInformation;
    symbolMediator: symbolMediator;
    parentFile: fileNode;
    parentSymbol: symbolNode | undefined;
    constructor(type: SymbolInformation, symbolMediator: symbolMediator, parentFile: fileNode) {
        this.type = type;
        this.symbolMediator = symbolMediator;
        this.parentFile = parentFile;
    }
}


export class symbolArrow {
    incycles: Set<symbolCycle>;
    indiamonds: Set<symbolDiamond>;
    rendered: Boolean;
    source: symbolNode;
    dest: symbolNode;
    includedIn: filePipe;
    constructor(incycles: Set<symbolCycle>,
        indiamonds: Set<symbolDiamond>,
        rendered: Boolean,
        source: symbolNode,
        dest: symbolNode,
        includedIn: filePipe) {
        this.incycles = incycles;this.indiamonds = indiamonds ;
        this.rendered = false;
        this.source = source;
        this.dest = dest;
        this.includedIn = includedIn;
    }
    set(incycles: Set<symbolCycle>,
        indiamonds: Set<symbolDiamond>,
        rendered: Boolean,
        source: symbolNode,
        dest: symbolNode,
        includedIn: filePipe) {
        this.incycles = incycles;this.indiamonds = indiamonds ;
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
export class symbolGraph {

    nodes: Set<symbolNode>;
    implArrows: Set<implArrow> | undefined;
    refArrows: Set<refArrow> | undefined ;
    defArrows: Set<defArrow> | undefined ;
    typedefArrows: Set<typedefArrow> | undefined;
    parentArrow: parentArrow | undefined;

    constructor(symbolNodes: Set<symbolNode>, implArrows: Set<implArrow>,
        refArrows: Set<refArrow> | undefined ,
        defArrows: Set<defArrow> | undefined ,
        typedefArrows: Set<typedefArrow> | undefined,
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
