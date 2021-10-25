import { ThemeIcon, workspace } from 'vscode';
import { workspaceHandler, folderHandler } from './handlers';
import { Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut ,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer,  Transition, 
    ZoomBehavior, ZoomInterpolator,  ZoomScale } from 'd3';
// This is the renderer

    // Renders Basic folder tree

class folderTree { 
    
    
}

class d3FolderNode {

    nodes: workspace.workspaceFolders;


}
class d3FolderChannel {
    diamondFlag: Boolean ; 
    cycleFlag: Boolean ; 
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
class d3fileNode{
    
}
class d3FileNode {
}
class d3FilePipe {
    cycleFlag: Boolean;
    diamondFlag: Boolean;
    constructor(){
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
class d3SymbolNode {
    type: SymbolInformation;
}
class d3SymbolArrow {
    cycleFlag: Boolean;
    diamondFlag: Boolean;
    constructor(){
        this.cycleFlag = false;
        this.diamondFlag = false;
    }
}
class symbolincludeGraph {

    symbolNodes: Array<d3SymbolArrow>;
    symbolArrows: Array<d3SymbolNode>;

    constructor(symbolNodes: Array<d3SymbolNode>, symbolArrows: Array<d3SymbolArrow>) {
        this.symbolArrows = symbolArrows; this.symbolNodes = symbolNodes;
    }
    // This applies modification to arrow cycles and / or diamonds  // Cycles pink, diamonds light blue
    public diamondModifier() {
    }
    public cycleModifier() {
    }

}
enum documenteditorType {
    classic = 0,
    class_hieracrchy = 1

}
class documentEditorHandler {
    editorType: editorType;

}
enum workspaceEditorType {
}
class workspaceEditor {


    workspaceHandler: workspaceHandler;
    folderIncludeGraph: folderincludeGraph;
    fileIncludeGraph: fileincludeGraph;
    symbolIncludeGraph: symbolincludeGraph;

    constructor() {
        this.fileHandler =
            this.uriThens = workspace.findFiles('*', null);

    }
    public renderWorkspace(){
        
    }
    public addFile() {
    }
    public addFolder() {
    }
}

