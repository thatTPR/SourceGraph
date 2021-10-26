
import "fs";
import { symbolNode, symbolDiamond, symbolCycle } from './symbol';
import { fileNode, fileDiamond, fileCycle } from './file';
import { folderNode, treeLink, folderDiamond, folderCycle } from './folder';

import { workspaceMediator } from '../../mediators/workspace';
import { type } from 'os';


export class diamondIndex {
    symbolDiamonds: Array<symbolDiamond>;
    fileDiamonds: Array<fileDiamond>;
    folderDiamonds: Array<folderDiamond>;
    constructor(symbolDiamonds: Array<symbolDiamond>,
        fileDiamonds: Array<fileDiamond>,
        folderDiamonds: Array<folderDiamond>) {
        this.symbolDiamonds = symbolDiamonds;
        this.fileDiamonds = fileDiamonds;
        this.folderDiamonds = folderDiamonds;
    }
}
export class cycleIndex {
    symbolCycles: Array<symbolCycle>;
    fileCycles: Array<fileCycle>;
    folderCycles: Array<folderCycle>;
    constructor(symbolCycles: Array<symbolCycle>,
        fileCycles: Array<fileCycle>,
        folderCycles: Array<folderCycle>) {
        this.symbolCycles = symbolCycles;
        this.fileCycles = fileCycles;
        this.folderCycles = folderCycles;
    }


}
// It is possible for scales and diamonds to literally be on top of each other so this is 
// handling for that
class cycleScale {
    minValue: Number;
    maxValue: Number;
    constructor(minValue: Number, maxValue:Number){
        this.maxValue = maxValue ; this.minValue = minValue;
    }

}
class diamondScale {
    minValue: Number;
    maxValue: Number;
    constructor(minValue: Number, maxValue:Number){
        this.maxValue = maxValue ; this.minValue = minValue;
    }
}
 // If i finsh this down it should be pretty much done. Yay
export class embeddedView {

    type: editorType;
    constructor(type: editorType) {
        this.type = type;

    }
    public renderWorkspace() {

    }
    public addFile() {
    }
    public addFolder() {
    }
}


class workspaceGraph {
    nodes: Array<folderNode | fileNode>;
    links: Array<treeLink>;
    openNodes: Array<folderNode | fileNode>;
    constructor() {
        // builds workspace tree from root recursively 
        
        // builds graph and checks for diamonds and cycles returning information where appropiate
    }
    private addnode(node: folderNode | fileNode) {

    }
    private removeNode() {

    }
    private addLink(link: ) {

    }
    private removeLink() {

    }
    private provideEmbeddedEditor(editor: ) {

    }
    private closeEmbeddedEditor() {

    }
    private openTransition() {

    }
    private closeTransition() { // When all 

    }
    private zoomLink() {

    }
    private zoomNode() {

    }
    private resizeNode() {
        // Always done by absolute values. (adding and subtracting would either introduce to many bugs or require to much constant checking<< the absolute values are relative to screen size and resolution>> )
    }
    private symbolLinkOrganise() {

    }
    private fileLinkOrganise() {

    }
    private folderLinkOrganise() {

    }
    private fileOrganise() {

    }
    private organise() {

    }
}