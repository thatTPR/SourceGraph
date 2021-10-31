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
    content: Set<folderNode>;
    constructor(content: Set<folderNode>){
        this.content = content;
    }
}
export class folderDiamond implements diamond {

    start:folderNode;
    intPaths: Set<Set<folderNode>>;
    end:folderNode;
    constructor(start:folderNode, intPaths: Set<Set<folderNode>>, end:folderNode){
        this.start = start; this.intPaths = intPaths ; this.end = end ;
    }
    
   
} 
export class folderNode {
    children: Set<folderNode | fileNode> ;
    isOpen: boolean ;
    folderMediator: folderMediator ;
    workspace: workspaceGraph ;
    parentFolder : folderNode ;
    
    constructor(parentFolder: folderNode,children: Set<folderNode | fileNode>,folderMediator: folderMediator , workspace: workspaceGraph){
        this.children = children ; this.isOpen = false; this.workspace = workspace ;
        this.folderMediator = folderMediator ;      
        this.parentFolder = parentFolder ;  
    }   
    
    public getChildren(){
        return this.children ;
    }
    

}
export class folderChannel { 
    inCycles: Set<folderCycle>;
    inDiamonds: Set<folderDiamond>;
    source: folderNode | undefined;
    dest: folderNode | undefined;
    directed: boolean;
    zoomThresh: number ;
    embeddedFilePipes: Set<filePipe> ;

    constructor(inCycles: Set<folderCycle>, inDiamonds: Set<folderDiamond> , source: folderNode |undefined, dest: folderNode |undefined, zoomThresh: number , embeddedFilePipes:Set<filePipe>) {
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
    workspaceGraph: workspaceGraph ;
    

    nodes: Set<folderNode> | undefined;
    channels: Set<folderChannel> | undefined;
    tree: Set<treeBranch> | undefined;

    constructor(workspaceGraph: workspaceGraph | undefined,nodes: Set<folderNode> | undefined, channels:Set<folderChannel> | undefined, tree: Set<treeBranch> | undefined) {
        this.workspaceGraph = workspaceGraph ; 
        this.nodes = nodes; this.channels = channels;this.tree = tree;
    }
   
    public removeLink(parent: folderNode, child: folderNode){
        this.tree.delete
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
