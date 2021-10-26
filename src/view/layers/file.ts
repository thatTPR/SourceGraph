import { ThemeIcon, workspace } from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';

import * as workspaceLayer from './workspace';
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



class d3FileNode {
    zoomThresh: number ;
    constructor(zoomThresh: number ){
        this.zoomThresh = zoomThresh ;
    } 
    public ()

}
class d3FilePipe {
    zoomThresh: 
    cycleFlag: cycleIndex;
    diamondFlag: diamondIndex; 
    constructor(cycleFlag: cycleIndex, diamondFlag: diamondIndex) {
        this.cycleFlag = cycleIndex;
        this.diamondFlag = diamondIndex;
    }
}

class fileincludeGraph {
    
    nodes: Array<d3FileNode>;
    pipes: Array<d3FilePipe>;
    constructor(nodes: Array<d3FileNode>, pipes: Array<d3FilePipe>) {
        this.nodes = nodes; this.pipes = pipes;
    }
    public detectDiamonds(){

    }
    public detectCycles(){

    }
}
