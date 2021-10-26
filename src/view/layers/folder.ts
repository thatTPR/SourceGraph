import { ThemeIcon, workspace } from 'vscode';
import { Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut ,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer,  Transition, 
    ZoomBehavior, ZoomInterpolator,  ZoomScale } from 'd3';
import './symbol' ;
import '../../mediator' ;
import {} from '../../mediators/folder'

class folderTree { 
    
    
}

class d3FolderContainer {

    nodes: workspace.workspaceFolders;


}
class d3FolderChannel {
    diamondFlag: diamondIndex ; 
    cycleFlag: cycleIndex ; 
    constructor(){
        this.diamondFlag = false;
        this.cycleFlag = false;
    }
    
}
class d3FolderHierarchy  {
    tree: Tree<d3FolderNode> ;
    eventListener:
    nodes: Array<d3FolderNode>;
    constructor(){
        this.tree = eventListener ;
        this.eventListener = 
        this.nodes = workspace.workspaceFolders();
    }
}
class folderGraph {
    hierarchy: d3FolderHierarchy ;
    nodes: Array<d3FolderNode>;
    channels: Array<d3FolderChannel>;
    constructor(nodes: Array<d3FolderNode>) {

        this.nodes = nodes; this.channel(this.nodes.);
    }

    public buildHierarchy() {
    }
    public addCrossInclude(Index1: d3FolderNode, Index2: d3FolderNode) {
        this.nodes;
        this.channel.push();
    }

}


function ForceGraph() {

    
}