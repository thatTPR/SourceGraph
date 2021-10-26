import {workspaceMediator} from '../../mediators/workspace';
import "fs" ;
import {symbolNode} from './symbol';
import {fileNode} from './file';
import {folderNode} from './folder';

import { folderMediator } from '../../mediators/folder';
import { type } from 'os';
class nodeIndex {
   
    type: 
}
type path = Array<symbolNode>;
type cycle = Array<symbolNode>;
class diamond{
    start:symbolNode;
    intPaths: Array<path>;
    end:symbolNode;
    constructor(start:symbolNode, intPaths: Array<path>, end:symbolNode){
        this.start = start; this.intPaths = intPaths ; this.end = end ;
    }
} 
class diamondIndex {

}
class cycleIndex {
}

class cycleScale { 

}
class diamondScale{

}

class workspaceGraph {
    nodes: Array<folderNode | fileNode>;
    links: Array<treeLink>;
    openNodes: Array<folderNode | fileNode>;
    constructor(){ 
        // builds workspace tree from root recursively 
        // builds graph and checks for diamonds and cycles returning information where appropiate
    }
    private addnode(node: folderNode | fileNode){

    }
    private removeNode(){

    }
    private addLink(link: ){

    }
    private removeLink(){

    }
    private provideEmbeddedEditor(editor: ){

    }
    private closeEmbeddedEditor(){

    }
    private openTransition(){

    }
    private closeTransition(){ // When all 

    }
    private zoomLink(){

    }
    private zoomNode(){

    }
    private resizeNode(){
        // Always done by absolute values. (adding and subtracting would either introduce to many bugs or require to much constant checking<< the absolute values are relative to screen size and resolution>> )
    }
    private symbolLinkOrganise(){

    }
    private fileLinkOrganise(){

    }
    private folderLinkOrganise(){

    }
    private fileOrganise(){

    }
    private organise(){

    }
}