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
import { Uri, workspace, TextDocument, FileSystemWatcher } from 'vscode';


class handler {
    
    sysWatch: FileSystemWatcher ; 
    uriThens: Thenable<Uri[]> ;
    
    constructor() {
        this.sysWatch = workspace.createFileSystemWatcher('*', false, false, false) ;
        this.uriThens = workspace.findFiles('*', null, ) ;
        
    }
    
    // Event Handlers
    // workspace.onDidChangeWorkspaceFolders
    // onDidChangeWorkspaceFolders()
    function changeWorkspace(){
        sysWatch.onDidChange()
    }
    
    

    
}

class EditorHandler {
    private name() {
        
    }
}

class folderincludeGraph { // First build tree ( simple graph connection ) than than let the file includes replace with flow where appropiate and add where appropiate 

}
class fileincludeGraph { 

}
/*
class symbolincludeGraph {

}
*/





class renderer {
    public addFile(){

    }
    public addFolder(){

    }
    /*
    public addSymbol(){

    }
    */
    public addHtml()
}
export function startRenderer(){

}
export function stoprenderer() {
    
}

// Executing everything

