import { ThemeIcon, workspace } from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';
import {d3File, } from './symbol';
import {folder} from './folder';
import {} from './workspace';

import {editorMediator, editorType} from '../../mediators/file';

export class embeddedView {
    
    type: editorType ;
    constructor(type: editorType) {
       this.type = type;

    }
    public renderWorkspace() {

    }
    public addFile() {
    }
    public addFolder() {
    }
}



export class fileNode {
    zoomThresh: number ;
    constructor(zoomThresh: number ){
        this.zoomThresh = zoomThresh ;
    } 
    public ()

}
export class filePipe {
    zoomThresh: 
    cycleFlag: cycleIndex;
    diamondFlag: diamondIndex;
    embeddedSymbolArrows: 
    constructor(cycleFlag: cycleIndex, diamondFlag: diamondIndex) {
        this.cycleFlag = cycleIndex;
        this.diamondFlag = diamondIndex;
    }
    private animation(source: , dest:){

    }
    private includeSymbolArrow(){

    }
    render symbolArrow(){

    }
    private embed(folderChannel:){

    }
}

export class fileincludeGraph {
    
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
