import { ThemeIcon, workspace } from 'vscode';
import {
    Axis, brush, chord, color, Contours, Delaunay, Dispatch, drag, DSV, easeBack, easeBackInOut, easeBackOut,
    Force, forceCenter, ForceLink, forceSimulation, format, Path, Quadtree, RandomGeometric, scaleBand, ScalePower, Selection, SymbolType, timeDay, Timer, Transition,
    ZoomBehavior, ZoomInterpolator, ZoomScale
} from 'd3';

import { } from './symbol';
import { file, } from './file';
import { } from './workspace';

import '../../mediator';
import { } from '../../mediators/folder'


export class folderNode {

    nodes: workspace.workspaceFolders;


}
export class folderChannel {
    diamondFlag: diamondIndex;
    cycleFlag: cycleIndex;
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
    private animation(source: , dest: ) {

    }
    private renderFilePipe() {

    }
    private async
}
class treeLink {
    childIndex: nodeIndex; // NodeUri
    parentIndex: nodeIndex; // NodeUri
    constructor(childIndex: nodeIndex, parentIndex: nodeIndex) {
        this.childIndex = childIndex; this.parentIndex = parentIndex;
    }
}
export class folderHierarchy {
    tree: Tree<folderNode>;
    eventListener:
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
