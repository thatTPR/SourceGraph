import { ThemeIcon, workspace } from 'vscode';
import { workspaceHandler, folderHandler } from '../../handlers/handlers';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';
import './symbol';

import {} from '../../mediators/file'

class embeddedEditor {
    

    
    workspaceHandler: workspaceHandler;
    folderIncludeGraph: folderincludeGraph;
    fileIncludeGraph: fileincludeGraph;
    symbolIncludeGraph: symbolincludeGraph;

    constructor() {
        this.fileHandler =
            this.uriThens = workspace.findFiles('*', null);

    }
    public renderWorkspace() {

    }
    public addFile() {
    }
    public addFolder() {
    }
}



class d3FileNode {
    zoomThresh: 

}
class d3FilePipe {
    cycleFlag: Boolean;
    diamondFlag: Boolean;
    constructor() {
        this.cycleFlag = false;
        this.diamondFlag = false;
    }
}

class fileincludeGraph {

    nodes: Array<d3FileNode>;
    pipes: Array<d3FilePipe>;
    constructor(nodes: Array<d3FileNode>, pipes: Array<d3FilePipe>) {
        this.nodes = nodes; this.pipes = pipes;
    }
}
