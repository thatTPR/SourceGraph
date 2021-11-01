import { ThemeIcon, workspace , Uri} from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';

import { symbolArrow } from './symbol';
import { fileGraph, fileNode, filePipe } from './file';
import {diamond, cycle, path, workspaceGraph} from './workspace';

import {folderMediator, folderIconMediator} from '../../mediators/folder'


export class folderCycle implements cycle {
    content: Array<folderNode>;
    constructor(content: Array<folderNode>){
        this.content = content;
    }
}
export class folderDiamond implements diamond {

    start:folderNode;
    intPaths: Array<Array<folderNode>>;
    end:folderNode;
    constructor(start:folderNode, intPaths: Array<Array<folderNode>>, end:folderNode){
        this.start = start; this.intPaths = intPaths ; this.end = end ;
    }
    
   
} 
export class folderNode {
    folderMediator: folderMediator ;
    workspace: workspaceGraph ;
    
    
    children: Array<folderNode | fileNode> ;
    isOpen: boolean ;
    parentFolder : folderNode ;
    constructor(parentFolder: folderNode,children: Array<folderNode | fileNode>,folderMediator: folderMediator , workspace: workspaceGraph){
        this.children = children ; this.isOpen = false; this.workspace = workspace ;
        this.folderMediator = folderMediator ;      
        this.parentFolder = parentFolder ;  
    }   
    
    public getChildren(){
        return this.children ;
    }
    

}
export class folderChannel { 
    inCycles: Array<folderCycle>;
    inDiamonds: Array<folderDiamond>;
    source: folderNode | undefined;
    dest: folderNode | undefined;
    directed: boolean;
    zoomThresh: number ;
    embeddedFilePipes: Array<filePipe> ;

    constructor(inCycles: Array<folderCycle>, inDiamonds: Array<folderDiamond> , source: folderNode |undefined, dest: folderNode |undefined, zoomThresh: number , embeddedFilePipes:Array<filePipe>) {
        this.inCycles =  inCycles; this.inDiamonds  = inDiamonds;
        this.source = source;
        this.dest = dest;
        this.zoomThresh = zoomThresh ;
        this.embeddedFilePipes = embeddedFilePipes;
        if (this.source=== undefined && this.dest === undefined){
            this.directed = true ;
        }
        else {this.directed = false ;}

    }

    private animation(source: folderNode, dest: folderNode ) {

    }
    private renderFilePipe() {

    }
    public include(component: symbolArrow | filePipe){
        if (typeof(component) == typeof(symbolArrow)){
            
        }
        if( typeof(component) == typeof(filePipe)){

        }
    
        
        
    }    
}
export class treeBranch {
    parentNode: folderNode; 
    childNode: fileNode | folderNode; 
    constructor(childNode: fileNode | folderNode, parentNode: folderNode) {
        this.childNode = childNode; this.parentNode = parentNode;
    }
}

export class folderGraph {
    workspaceGraph: workspaceGraph  ;
    

    nodes: Array<folderNode> | undefined;
    channels: Array<folderChannel> | undefined;
    tree: Array<treeBranch> | undefined;

    constructor(workspaceGraph: workspaceGraph ,nodes: Array<folderNode> | undefined, channels:Array<folderChannel> | undefined, tree: Array<treeBranch> | undefined) {
        this.workspaceGraph = workspaceGraph ; 
        this.nodes = nodes; this.channels = channels;this.tree = tree;
        
    }
   
    public removeLink(parent: folderNode, child: folderNode){
        for( let i in this.tree ){
            if i.parentNode.
        }
    }
    
    public addLink(link: treeBranch){
        this.tree.add(link)
    }
    public addChannel(folderChannel: folderChannel) {
       this.channels?.add(folderChannel)
    }
    
    public diamondModifier() {
    }
    public cycleModifier() {
    }

}
