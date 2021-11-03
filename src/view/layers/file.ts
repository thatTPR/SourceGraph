import { ThemeIcon, workspace } from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';
import { symbolArrow , symbolNode} from './symbol';
import {folderChannel, folderGraph, folderNode} from './folder';
import {cycleIndex, diamondIndex, /*embeddedView,*/ workspaceGraph , cycle , path} from './workspace';

import {fileMediator} from '../../mediators/file';
import { symbolMediator } from '../../mediators/symbol';

export class fileCycle implements cycle {
    content: Array<fileNode>;
    constructor(content: Array<fileNode>){
        this.content = content ;
    }
}
export class fileDiamond{
    start:fileNode;
    intPaths: Array<Array<fileNode>>;
    end:fileNode;
    constructor(start:fileNode, intPaths: Array<Array<fileNode>>, end:fileNode){
        this.start = start; this.intPaths = intPaths ; this.end = end ;
    }
   
} 

export class fileNode {
    
    fileMediator: fileMediator ;
    

    zoomThresh: number ;
    isOpen: boolean ;
    children : Array<symbolNode>;
    parentFolder: folderNode ;
    // New workspace contstructor
    constructor(parentFolder:folderNode , zoomThresh: number, children : Array<symbolNode>, fileMediator: fileMediator ){
        this.zoomThresh = zoomThresh ;
        this.isOpen = false ;
        this.children = children ;
        this.parentFolder = parentFolder; 
        this.fileMediator = fileMediator;      
        
    }
    private zoomIn() {

    }

}
export class filePipe {
    zoomThresh: number ;
    incycles: Array<fileCycle> ; 
    indiamonds: Array<fileDiamond> ;
    embeddedSymbolArrows: Array<symbolArrow>;
    includedIn: folderChannel ;
    constructor(incycles: Array<fileCycle>, indiamonds: Array<fileDiamond>, zoomThresh: number, includedIn: folderChannel, embeddedSymbolArrows: Array<symbolArrow>) {
        this.incycles = incycles ; this.indiamonds = indiamonds;
        this.zoomThresh = zoomThresh ;
        this.includedIn = includedIn;
        this.embeddedSymbolArrows = embeddedSymbolArrows;
    }
    private zoomIn(){
        
    }
    private animation(source: fileNode, dest:fileNode){

    }
   
    private renderSymbolArrow(){

    }
    private embed(folderChannel: folderChannel){
        folderChannel.include(this);
    }
    public include(symbolArrow: symbolArrow){

    }
    
}

export class fileGraph {
    workspaceGraph: workspaceGraph ;
    folderGraph: folderGraph | undefined ;
    nodes: Array<fileNode> | undefined;
    pipes: Array<filePipe> | undefined;
    constructor(workspaceGraph: workspaceGraph ,folderGraph: folderGraph| undefined ,nodes: Array<fileNode>| undefined, pipes: Array<filePipe>| undefined) {
        this.workspaceGraph = workspaceGraph ;
        this.folderGraph = folderGraph ;
        this.nodes = nodes; this.pipes = pipes;
    }
    public addPipe(src: fileNode, dest: fileNode) {
        this.pipes
    }
    public removePipe(){

    }
    public detectDiamonds(){

    }
    public detectCycles(){

    }

    public diamondModifier() {
    }
    public cycleModifier() {
    }

   
}
