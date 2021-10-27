import { ThemeIcon, workspace } from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';

import { symbolArrow } from './symbol';
import { fileNode, filePipe } from './file';
import { diamondIndex, cycleIndex} from './workspace';

import {folderMediator, icon } from '../../mediators/folder'

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
    icon: icon;
    children: Array<folderNode | fileNode> ;
    isOpen: boolean ;
    
    constructor(children: Array<folderNode | fileNode>, icon: icon){
        this.children = children ; this.icon = icon; this.isOpen = false;
        
    }
    public getChildren(){
        return this.children ;
    }


}
export class folderChannel {
    diamondFlag: number ;
    cycleFlag: number;
    source: | undefined;
    dest: | undefined;
    directed: boolean;
    constructor(diamondFlag: number , cycleFlag:number , source: |undefined, dest: |undefined, directed: boolean) {
        this.diamondFlag = diamondFlag;
        this.cycleFlag = cycleFlag;
        this.source = source;
        this.dest = dest;
        this.directed = directed;

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
    public detectDiamonds(){

    }
    public detectCycles(){

    }
    public diamondModifier() {
    }
    public cycleModifier() {
    }

}
