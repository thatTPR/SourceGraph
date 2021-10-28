import { ThemeIcon, workspace , Uri} from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';

import { symbolArrow } from './symbol';
import { fileIncludeGraph, fileNode, filePipe } from './file';
import { diamondIndex, cycleIndex, workspaceGraph} from './workspace';

import {folderMediator, folderIconMediator} from '../../mediators/folder'

export type folderPath = Array<folderNode>;
export type folderCycle = Array<folderNode>;
export class folderDiamond {
    start:folderNode;
    intPaths: Array<folderPath>;
    end:folderNode;
    constructor(start:folderNode, intPaths: Array<folderPath>, end:folderNode){
        this.start = start; this.intPaths = intPaths ; this.end = end ;
    }
   
} 
export class folderNode {
    children: Array<folderNode | fileNode> ;
    isOpen: boolean ;
    folderMediator: folderMediator ;
    Uri: Uri ;
    workspace: workspaceGraph ;
    constructor(children: Array<folderNode | fileNode>, Uri: Uri, workspace: workspaceGraph){
        this.children = children ; this.isOpen = false; this.Uri = Uri ; this.workspace = workspace ;
        this.folderMediator = new folderMediator(this.Uri);        
    }
    public getChildren(){
        return this.children ;
    }


}
export class folderChannel { 
    diamondFlag: number ;
    cycleFlag: number;
    source: folderNode | undefined;
    dest: folderNode | undefined;
    directed: boolean;
    zoomThresh: number ;
    embeddedFilePipes: Array<filePipe> ;

    constructor(diamondFlag: number , cycleFlag:number , source: folderNode |undefined, dest: folderNode |undefined, zoomThresh: number , embeddedFilePipes:Array<filePipe>) {
        this.diamondFlag = diamondFlag;
        this.cycleFlag = cycleFlag;
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
export class treeLink {
    parentNode: folderNode; 
    childNode: fileNode | folderNode; 
    constructor(childNode: fileNode | folderNode, parentNode: folderNode) {
        this.childNode = childNode; this.parentNode = parentNode;
    }
}

export class folderGraph {
    nodes: Array<folderNode>;
    channels: Array<folderChannel>;
    tree: Array<treeLink>;

    constructor(nodes: Array<folderNode>, channels:Array<folderChannel>, tree: Array<treeLink>) {

        this.nodes = nodes; this.channels = channels;this.tree = tree;
    }

    public buildHierarchy() {
    }
    public addLink(){

    }
    public addChannel(src: folderNode, dest: folderNode) {
        this.nodes;
        this.channels.push();
    }
   
    public diamondModifier() {
    }
    public cycleModifier() {
    }

}
