import { ThemeIcon, workspace } from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';
import {d3File, } from './symbol';
import {} from './file';
import {} from './workspace';

import * as meds from '../../mediators/file';

class embeddedEditor {
    
    type: meds.documentEditorType ;
    workspaceMed: workspaceMediator;
    folderIncludeGraph: folderIncludeGraph;
    fileIncludeGraph: fileincludeGraph;
    symbolIncludeGraph: symbolincludeGraph;

    constructor(type: meds.documentEditorType) {
       this.type = type;

    }
    public renderWorkspace() {

    }
    public addFile() {
    }
    public addFolder() {
    }
}



class FileNode {
    zoomThresh: number ;
    constructor(zoomThresh: number ){
        this.zoomThresh = zoomThresh ;
    } 
    public ()

}
class FilePipe {
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

class fileincludeGraph {
    
    nodes: Array<FileNode>;
    pipes: Array<FilePipe>;
    constructor(nodes: Array<FileNode>, pipes: Array<FilePipe>) {
        this.nodes = nodes; this.pipes = pipes;
    }
    public detectDiamonds(){

    }
    public detectCycles(){

    }
}
