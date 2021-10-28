import { ThemeIcon, workspace } from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';
import { symbolArrow , symbolNode} from './symbol';
import {folderChannel, folderNode} from './folder';
import {cycleIndex, diamondIndex, embeddedView, workspaceGraph , cycle , path} from './workspace';

import {fileMediator, fileIconMediator} from '../../mediators/file';
export class filePath implements path {
    content: Set<fileNode>;
    constructor( content: Set<fileNode>){
        this.content = content;
    }
}
export class fileCycle implements cycle {
    content: Set<fileNode>;
    constructor(content: Set<fileNode>){
        this.content = content ;
    }
}
export class fileDiamond{
    start:fileNode;
    intPaths: Set<filePath>;
    end:fileNode;
    constructor(start:fileNode, intPaths: Set<filePath>, end:fileNode){
        this.start = start; this.intPaths = intPaths ; this.end = end ;
    }
   
} 

export class fileNode {
    zoomThresh: number ;
    isOpen: boolean ;
    children : Set<symbolNode>;
    fileMediator: fileMediator ;
    workspace: workspaceGraph ;
    parentFolder: folderNode ;
    // New workspace contstructor
    constructor(parentFolder:folderNode , zoomThresh: number, children : Set<symbolNode>, fileMediator: fileMediator, workspace: workspaceGraph ){
        this.zoomThresh = zoomThresh ;
        this.isOpen = false ;
        this.children = children ;
        this.fileMediator = fileMediator ;        
        this.workspace = workspace ;
        this.parentFolder = parentFolder; 
    } 
    public openView(embeddedView: embeddedView ){
        embeddedView.provideView(this);
        this.workspace.update(this);
    }
    
    

}
export class filePipe {
    zoomThresh: number ;
    incycles: Set<fileCycle> ; 
    indiamonds: Set<fileDiamond> ;
    embeddedSymbolArrows: Set<symbolArrow>;
    includedIn: folderChannel ;
    constructor(incycles: Set<fileCycle>, indiamonds: Set<fileDiamond>, zoomThresh: number, includedIn: folderChannel, embeddedSymbolArrows: Set<symbolArrow>) {
        this.incycles = incycles ; this.indiamonds = indiamonds;
        this.zoomThresh = zoomThresh ;
        this.includedIn = includedIn;
        this.embeddedSymbolArrows = embeddedSymbolArrows;
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

export class fileIncludeGraph {
    
    nodes: Set<fileNode>;
    pipes: Set<filePipe>;
    constructor(nodes: Set<fileNode>, pipes: Set<filePipe>) {
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
   
}
