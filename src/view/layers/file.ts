import { ThemeIcon, workspace } from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';
import { symbolArrow } from './symbol';
import {folderChannel} from './folder';
import {} from './workspace';

import {fileMediator} from '../../mediators/file';
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
    icon: ;
    zoomThresh: number ;
    constructor(zoomThresh: number, icon: ){
        this.zoomThresh = zoomThresh ;
        this.icon = icon;
    } 
    

}
export class filePipe {
    zoomThresh: number ;
    cycleFlag: cycleIndex | null; 
    diamondFlag: diamondIndex | null ;
    embeddedSymbolArrows: Array<symbolArrow>
    constructor(cycleFlag: cycleIndex | null, diamondFlag: diamondIndex | null, zoomThresh: number) {
        this.cycleFlag = cycleIndex;
        this.diamondFlag = diamondIndex;
        this.zoomThresh = zoomThresh ;
    }
    private animation(source: fileNode, dest:fileNode){

    }
    private includeSymbolArrow(){

    }
    private renderSymbolArrow(){

    }
    private embed(folderChannel: folderChannel){
        
    }
}

export class fileIncludeGraph {
    
    nodes: Array<fileNode>;
    pipes: Array<filePipe>;
    constructor(nodes: Array<fileNode>, pipes: Array<filePipe>) {
        this.nodes = nodes; this.pipes = pipes;
    }
    public detectDiamonds(){

    }
    public detectCycles(){

    }
}
