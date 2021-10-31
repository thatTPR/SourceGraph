import { SymbolKind, ThemeIcon, SymbolInformation, SaveDialogOptions } from 'vscode';
import { symbolIconMediator, symbolMediator } from '../../mediators/symbol'

import { fileGraph, fileNode, filePipe } from './file';
import { folderChannel } from './folder';
import { cycleIndex , diamond, cycle, path, workspaceGraph} from './workspace';


export class symbolCycle implements cycle {
    content: Set<symbolNode>;
    constructor(content: Set<symbolNode>){
        this.content = content ;
    }
}
export class symbolDiamond implements diamond{
    start: symbolNode;
    intPaths: Set<Set<symbolNode>>;
    end: symbolNode;
    constructor(start: symbolNode, intPaths: Set<Set<symbolNode>>, end: symbolNode) {
        this.start = start; this.intPaths = intPaths; this.end = end;
    }

}

export class symbolNode {
    parentMediator: symbolMediator;
    // symbolIconMediator: symbolIconMediator ;
    parentFile: fileNode;
    parentSymbol: symbolNode | undefined;
    child: symbolNode | undefined ;
    constructor(type: SymbolInformation, parentMediator: symbolMediator, parentFile: fileNode) {
        this.parentMediator = parentMediator;
        this.parentFile = parentFile;
        this.child = undefined ;
        // this.symbolIconMediator =  ;
    }
    public render(){

    }
    public modify(){

    }
    public getChildren(){

    }
}


export class symbolArrow {
    incycles: Set<symbolCycle>;
    indiamonds: Set<symbolDiamond>;
    rendered: Boolean;
    source: symbolNode;
    dest: symbolNode;
    includedIn: filePipe | fileNode;
    constructor(incycles: Set<symbolCycle>,
        indiamonds: Set<symbolDiamond>,
        rendered: Boolean,
        source: symbolNode,
        dest: symbolNode,
        includedIn: filePipe | fileNode) {
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
        includedIn: filePipe | fileNode ) {
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
class merged extends symbolArrow{

}
// This is never a graph of the full workspace. 
// Instead child instances get added and removed dynamically using the index.
export class symbolGraph {
    workspaceGraph: workspaceGraph ;

    nodes: Set<symbolNode> | undefined;
    implArrows: Set<implArrow> | undefined;
    refArrows: Set<refArrow> | undefined ;
    defArrows: Set<defArrow> | undefined ;
    typedefArrows: Set<typedefArrow> | undefined;
   
   
    constructor(workspaceGraph: workspaceGraph ,symbolNodes: Set<symbolNode> | undefined, implArrows: Set<implArrow> | undefined,
        refArrows: Set<refArrow> | undefined ,
        defArrows: Set<defArrow> | undefined ,
        typedefArrows: Set<typedefArrow> | undefined, 
        ) {
            this.workspaceGraph = workspaceGraph ;
        this.implArrows = implArrows; this.nodes = symbolNodes;
        this.refArrows = refArrows; 
        this.defArrows = defArrows ;
        this.typedefArrows = typedefArrows ;
        
    }
    public addRefArrow(src: symbolNode, dest: symbolNode) {
       
    }
    public addImplArrow(src: symbolNode, dest: symbolNode){

    }
    public addTypeDefArrow(src: symbolNode, dest: symbolNode) {
       
        
    }
    public addDefArrow(src: symbolNode, dest: symbolNode){
        
    }
    public mergeDups(){
        for( let i in this.refArrows){
            for(let j in this.defArrows){
                if(i.source == j.des){
                    
                }
            }
            for(let k in this.typedefArrows) {

            }
        }

    }
    public arrowsContructor(){
        
    }
    public refArrowsConstructor(){

    }
    public defArrowsConstructor(){

    }
    public implArrowsConstructor(){

    }
    public typedefArrowsConstructor(){

    }
    public arrowsConstructor(){

    }
    public removeArrow() {

    }
    public diamondModifier() {
    }
    public cycleModifier(cycleIndex: cycleIndex) {
        
    }

}
