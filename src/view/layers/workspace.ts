
import { symbolNode, symbolDiamond, symbolCycle, symbolArrow } from './symbol';
import { fileNode, fileDiamond, fileCycle, filePipe } from './file';
import { folderGraph, treeLink, folderDiamond, folderCycle, folderChannel } from './folder';

import { editorType, workspaceMediator,  embeddedEditorMediator } from '../../mediators/workspace';
import { workspace } from 'vscode';

import {scaleLinear} from 'd3-scale' ; 


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
    public getMaxSymbol() {
        return 
    }
    public getMaxFile() {
        return
    }
    public getMaxFolder() {
        return
    }
    public getMinSymbol() {
        return
    }
    public getMinFile() {
        return
    }
    public getMinFolder() {
        return
    }
    public getMax() {
        this.getMaxFile();
        this.getMaxFolder();
        this.getMaxSymbol();
    }
    public getMin() {
        this.getMinFile();
        this.getMinFolder();
        this.getMinSymbol();
    }
    public checkExists(){

    }
    private getPlace(diamond: fileDiamond | folderDiamond | symbolDiamond ) {
        if(typeof(diamond) == typeof(symbolDiamond)){
            return this.symbolDiamonds;
        }
        if(typeof(diamond) == typeof(fileDiamond)){
            return this.fileDiamonds;
        }
        if(typeof(diamond) == typeof(folderDiamond)){
            return this.folderDiamonds;
        }
    } 
    // private checkExists(diamond: fileDiamond | folderDiamond | symbolDiamond, 
    //     place: Array<symbolDiamond> | Array<fileDiamond> | Array<folderDiamond> ){
    //     place.find
    // }
    public add(diamond: fileDiamond | folderDiamond | symbolDiamond){
        let temp = this.getPlace(diamond);

    }
    public remove(diamond: fileDiamond | folderDiamond | symbolDiamond){
        let temp = this.getPlace(diamond);
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
    public getMaxSymbol() {

    }
    public getMaxFile() {

    }
    public getMaxFolder() {

    }
    public getMinSymbol() {

    }
    public getMinFile() {

    }
    public getMinFolder() {

    }
    public getMax() {
        this.getMaxFile();
        this.getMaxFolder();
        this.getMaxSymbol();
    }
    public getMin() {
        this.getMinFile();
        this.getMinFolder();
        this.getMinSymbol();
    }

}
// It is possible for scales and diamonds to literally be on top of each other so this is 
// handling for that
import {sourceGraphActivity} from  '../../Renderer' ;
export class cycleScale {
    sourceGraphActivity: sourceGraphActivity ;
    minValue: Number;
    maxValue: Number;
    constructor(minValue: Number, maxValue: Number, sourceGraphActivity: sourceGraphActivity ) {
        this.maxValue = maxValue; this.minValue = minValue;
        this.sourceGraphActivity = sourceGraphActivity.getCycleScale(this);
        
    }


}
export class diamondScale {
    sourceGraphActivity: sourceGraphActivity ;
    minValue: Number;
    maxValue: Number;
    constructor(minValue: Number, maxValue: Number, sourceGraphActivity: sourceGraphActivity ) {
        this.maxValue = maxValue; this.minValue = minValue;
        this.sourceGraphActivity = sourceGraphActivity.getDiamondScale(this);
        
    }
}
// If i finsh this down it should be pretty much done. Yay
export class embeddedView {
    workspace: workspaceGraph;
    parent: fileNode | Array<fileNode>;
    view: embeddedEditorMediator;
    constructor(view: embeddedEditorMediator, workspace: workspaceGraph, parent: fileNode | Array<fileNode>) {
        this.view = view;
        this.provideView(view);
        this.workspace = workspace ;
        this.parent = parent;
    }
    public provideView(view: embeddedEditorMediator ) {
       view.provideEditor()
    }
  
    public renderWorkspace(workspace: workspaceGraph) {

    }
    

}


export class workspaceGraph {
    folderGraph: Array<folderGraph>;
    workspaceMediator: workspaceMediator;
    diamondIndex: diamondIndex;
    cycleIndex: cycleIndex;
    sourceGraphActivity: sourceGraphActivity ;
    constructor() {
        // builds workspace tree from root recursively 
        this.workspaceMediator = new workspaceMediator;
        // Build Link tree

        // buildChannelGraph

        // buildPipeGraph
        // buildSymbolGraph
        // builds graph and checks for diamonds and cycles returning information where appropiate
        
        this.diamondIndex = new diamondIndex();
        this.cycleIndex = new cycleIndex();
        
        this.workspaceMediator.detectDiamond();
        this.workspaceMediator.detectCycle();

    }

    private refreshLinkTree() {

    }
    private refreshChannelGraph() {

    }
    private refreshPipeGraph() {

    }
    private refreshSymbolGraph() {

    }
    private addnode(node: folderNode | fileNode | symbolNode) {

    }
    private removeNode(node: folderNode | fileNode | symbolNode) {

    }
    private addLink(link: treeLink) {

    }
    private removeLink(link: treeLink) {

    }
    private provideEmbeddedView() {

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