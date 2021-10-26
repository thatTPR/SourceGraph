import {workspaceMediator} from '../../mediators/workspace';
import "fs" ;
import {} from './symbol';
import {} from './file';
import {} from './folder';

import { folderMediator } from '../../mediators/folder';
class nodeIndex {
    type: 
}
class treeLink {
    childIndex: nodeIndex ; // NodeUri
    parentIndex: nodeIndex; // NodeUri
    constructor(childIndex: nodeIndex, parentIndex: nodeIndex){
        this.childIndex = childIndex ; this.parentIndex = parentIndex;
    }
}
class graphLink {
    
}
class diamondIndex {
    symbolTag: 
}
class cycleIndex {
    symbolTag:
}

class cycleScale { 

}
class diamondScale{

}

class workspaceGraph {
    nodes: Array<Folder.folderNode | File.fileNode>;
    inks: Array<treeLink>;

    constructor(){ 
        // builds workspace tree from root recursively
        // builds graph
    }
    private addnode(node: d3Folder.d3FolderContainer | d3File.d3File){

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
    private fileOrganise(){

    }
    private organise(){

    }
}