import { ThemeIcon, workspace } from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';

import { } from './symbol';
import { fileNode } from './file';
import { diamondIndex, cycleIndex} from './workspace';

import '../../mediator';
import {folderMediator } from '../../mediators/folder'

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
    constructor(children: Array<folderNode | fileNode>){
        this.children = children ;
        
    }

}
export class folderChannel {
    diamondFlag: diamondIndex | null ;
    cycleFlag: cycleIndex | null;
    source: | undefined;
    dest: | undefined;
    directed: boolean;
    constructor(diamondFlag: diamondIndex , cycleFlag: cycleIndex , source: |undefined, dest: |undefined, directed: boolean) {
        this.diamondFlag = diamondFlag;
        this.cycleFlag = cycleFlag;
        this.source = source;
        this.dest = dest;
        this.directed = directed;

    }
    private animation(source: ; dest: ) {

    }
    private renderFilePipe() {

    }
    
}
export class treeLink {
    parentNode: folderNode; 
    childNode: fileNode | folderNode; 
    constructor(childNode: fileNode | folderNode, parentNode: folderNode) {
        this.childNode = childNode; this.parentNode = parentNode;
    }
}
export class folderHierarchy {
    tree: 
    treeLink
        nodes: Array<folderNode>;
    constructor() {
        this.tree = eventListener;
        this.eventListener =
            this.nodes = workspace.workspaceFolders();
    }
}
export class folderGraph {
    nodes: Array<folderNode>;
    channels: Array<folderChannel>;
    constructor(nodes: Array<folderNode>, channels:Array<folderChannel>) {

        this.nodes = nodes; this.channels = channels;
    }

    public buildHierarchy() {
    }
    public addCrossInclude(Index1: folderNode, Index2: folderNode) {
        this.nodes;
        this.channel.push();
    }

}
