import {workspaceMediator} from '../../mediators/workspace';
import "fs" ;
import * as d3File from './file' ;
import * as d3Folder from './folder';
import * as d3Symbol from './symbol';

class treeLink {
    childIndex: nodeIndex ; // NodeUri
    parentIndex: nodeIndex; // NodeUri
    constructor(childIndex: nodeIndex, parentIndex: nodeIndex){
        this.childIndex = childIndex ; this.parentIndex = parentIndex;
    }
}

class workspaceGraph {
    nodes: Array<d3FolderNode | d3FileNode>
    treeLinks: Array<treeLink>
    constructor(){ 
        // builds workspace tree from root recursively
        // builds graph
    }
    private addnode(node: d3Folder.d3FolderContainer | d3File.d3File){

    }
    private removeNode(){

    }
    private addLink(){

    }
    private removeLink(){

    }
    private provideEmbeddedEditor(editor: ){

    }
    private closeEmbeddedEditor(){

    }
    private openTransition(){

    }
    private closeTransition(){

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
}
class diamondIndex {
    symbolTag: 
}
class cycleIndex {
    symbolTag:
}

