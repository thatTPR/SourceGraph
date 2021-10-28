import { ThemeIcon, workspace } from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';
import { symbolArrow , symbolNode} from './symbol';
import {folderChannel} from './folder';
import {cycleIndex, diamondIndex, embeddedView, workspaceGraph} from './workspace';

import {fileMediator, fileIconMediator} from '../../mediators/file';
export type filePath = Array<fileNode>;
export type fileCycle = Array<fileNode>;
export class fileDiamond{
    start:fileNode;
    intPaths: Array<filePath>;
    end:fileNode;
    constructor(start:fileNode, intPaths: Array<filePath>, end:fileNode){
        this.start = start; this.intPaths = intPaths ; this.end = end ;
    }
   
} 

export class fileNode {
    zoomThresh: number ;
    isOpen: boolean ;
    children : Array<symbolNode>;
    fileMediator: fileMediator ;
    workspace: workspaceGraph ;
    // New workspace contstructor
    constructor(zoomThresh: number, children : Array<symbolNode>, fileMediator: fileMediator, workspace: workspaceGraph ){
        this.zoomThresh = zoomThresh ;
        this.isOpen = false ;
        this.children = children ;
        this.fileMediator = fileMediator ;        
        this.workspace = workspace ;
    } 
    public openView(embeddedView: embeddedView ){
        embeddedView.provideView(this);
        this.workspace.update(this);
    }
    
    

}
export class filePipe {
    zoomThresh: number ;
    cycleFlag: number ; 
    diamondFlag: number  ;
    embeddedSymbolArrows: Array<symbolArrow>;
    includedIn: folderChannel ;
    constructor(cycleFlag: number, diamondFlag: number, zoomThresh: number, includedIn: folderChannel, embeddedSymbolArrows: Array<symbolArrow>) {
        this.cycleFlag = cycleFlag;
        this.diamondFlag = diamondFlag;
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
    
    nodes: Array<fileNode>;
    pipes: Array<filePipe>;
    constructor(nodes: Array<fileNode>, pipes: Array<filePipe>) {
        this.nodes = nodes; this.pipes = pipes;
    }
    public addPipe(src: fileNode, dest: fileNode) {
        this.nodes;
        this.pipes.push();
    }
    public removePipe(){

    }
    public detectDiamonds(){

    }
    public detectCycles(){

    }
   
}
