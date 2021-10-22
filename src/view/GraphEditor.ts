// This display the directory structure as a graph of includes and class views Fol
// By default this should be a hierarchy view but some systems do have cycles in them as a feature( these are very prone to bugs so i really should impement them)
// Important to note the difference between a cycle and a diamond (Diamond is when A calls B and C , and both B and C call D)
// (Cycle is when A calls B calls C calls A)
// Includes are pipes that flow to the including file (same with modules)
// Classes , overkill would be to use d3 force.
// The visualization is alway built from the main out and 
import { Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut ,
         Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, timeDay, Timer,  Transition, 
         ZoomBehavior, ZoomInterpolator,  ZoomScale } from 'd3';
import { Uri, workspace, TextDocument, FileSystemWatcher, CustomTextEditorProvider } from 'vscode';


class fileHandler {
    editor: CustomTextEditorProvider ;
    symbolHandler: Array<symbolHandler>;
    constructor(editorProvider: CustomTextEditorProvider, symHandler: Array<symbolHandler>){
        this.editor = editorProvider ; 
        this.symbolHandler = symHandler ;
    }
}
class symbolHandler {
    
    
}
class folderHandler {
    files: Array<FileHandler>;
    folders: Array<folderHandler> ;
}
class workspaceHandler {
    files: Array<fileHandler>
    symbolHandler
    diamondDetector: diamondDetector ;
    cycleDetector: cycleDetector ; 
    
}

class editorHandler {
    Edit
}
class folderTree {

}

class d3FolderNode {
    
    nodes: workspace.workspaceFolders()


}
class d3FolderChannel {
    public addChannel(){

    }
}
class d3FolderHierArchy {
    nodes: Array<d3FolderNode> ;
    constructor(){
        this.nodes = workspace.workspaceFolders()
    }
}
class folderincludeGraph {
    nodes: Array<d3FolderNode> ;
    channel: Array<d3FolderChannel> ;
    constructor(nodes: Array<d3FolderNode>)
    {

        this.nodes = nodes ; this.channel(this.nodes.)
    }
    
    public buildHierarchy(){ // Builds faded channel of stuff

    }
    public addCrossInclude(Index1: d3FolderNode, Index2: d3FolderNode){
        this.nodes
        this.channel.push()
    }

}

class d3FileNode {
    constt
}
class d3FilePipe {

}
class fileincludeGraph { 
    nodes: Array<d3FileNode>
    pipes: Array<d3FilePipe>
    constructor(nodes: Array<d3FileNode>, pipes: Array<d3FilePipe>)
    {
        this.nodes = nodes ; this.pipes = pipes ;
    }
}
class d3SymbolNode {
    type: 
    // Gets all relevant type definition, implementation and definition document providers and handles them. 
}
class d3SymbolArrow {
    type: 
}
class symbolincludeGraph { // Arrow include Types : References( red ), Implmentation (yellow ) , Definition ( denim ) , 
    
    symbolNodes: Array<d3SymbolArrow> ;
    symbolArrows: Array<d3SymbolNode> ;
        
    constructor(symbolNodes: Array<d3SymbolNode> , symbolArrows: Array<d3SymbolArrow>){
        this.symbolArrows = symbolArrows ; this.symbolNodes = symbolNodes ;
    }
    public diamondDetector(){               

    }
    public cycleDetector (){   
    }
    
}





class workspaceEditor {
    
     
    workspaceHandler: workspaceHandler ;
    folderHandler: folderHandler ;
    editorHandler: editorHandler ;
    folderIncludeGraph: folderincludeGraph;
    fileIncludeGraph: fileincludeGraph;
    symbolIncludeGraph: symbolincludeGraph;
    
    constructor() {
        this.fileHandler = 
        this.uriThens = workspace.findFiles('*', null, ) ;
        
    }
    public addFile(){

    }
    public addFolder(){

    }
    /*
    public addSymbol(){

    }
    */
    
    // Event Handlers
    // workspace.onDidChangeWorkspaceFolders
    // onDidChangeWorkspaceFolders()
   
    

    
}


export function startEditor(){

}
export function stopEditor() {
    
}

// Executing everything

