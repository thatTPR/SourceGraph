
import { symbolNode, symbolDiamond, symbolCycle, symbolArrow } from './symbol';
import { fileNode, fileDiamond, fileCycle, filePipe } from './file';
import { folderGraph, treeLink, folderDiamond, folderCycle, folderChannel } from './folder';

import { editorType, workspaceMediator,  embeddedEditorMediator } from '../../mediators/workspace';

import {scaleLinear} from 'd3-scale' ; 
import { index, sort } from 'd3-array';
import { folderMediator } from '../../mediators/folder';

export interface diamond{
    start: any ;
    intPaths: Array<any>;
    end: any ;
}
export interface cycle{
    content: Array<any> ;
}
export interface path{
    content: Array<any>;
}

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
    
    public equivalent(diamond1: diamond , diamond2: diamond){
        if(diamond1 == diamond2){
            return true;
        }
        return false ;

    }
    public removeDuplicates(diamonds: Array<diamond>){
        for ( let i = 0 ; i < diamonds.length ; i++){
            for ( let j = i+1 ; j < diamonds.length - i ; i++){
                if ( this.equivalent(diamonds[i], diamonds[j])){
                    diamonds
                }
            }
        }
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
    symbol: Array<symbolCycle>;
    file: Array<fileCycle>;
    folder: Array<folderCycle>;
    constructor(symbolCycles: Array<symbolCycle>,
        fileCycles: Array<fileCycle>,
        folderCycles: Array<folderCycle>) {
        this.symbol = symbolCycles;
        this.file = fileCycles;
        this.folder = folderCycles;
    }
    
    

}


export class cycleScale {
    


}
export class diamondScale {
    symbol: 
    file:
    folder:
    constructor(diamondIndex: diamondIndex) {
        symbol = getSorted(diamondIndex.symbol)  ;        
        file = getSorted(diamondIndex.file)     ;   
        folder = getSorted(diamondIndex.folder);  
        
        
     }
}
// If i finsh this down it should be pretty much done. Yay
export class embeddedView {
    workspace: workspaceGraph | undefined; // 
    parent: fileNode | Array<fileNode>| undefined;
    view: embeddedEditorMediator;

    constructor(view: embeddedEditorMediator, workspace: workspaceGraph| undefined, parent: fileNode | Array<fileNode> | undefined) {
        this.view = view;
        this.workspace = workspace ;
        this.parent = parent;
        this.provideView(view.provideEditor);
    }
    public provideView(anchor: fileNode ) {
       
    }
  
    public renderWorkspace(workspace: workspaceGraph) {

    }
    

}


export class workspaceGraph {
    folderGraphs: Array<folderGraph>;
    workspaceMediator: workspaceMediator;
    diamondIndex: diamondIndex;
    cycleIndex: cycleIndex;
    cycleScale: cycleScale;
    diamondScale: diamondScale;

    embeddedView: Array<embeddedView> | undefined;
    constructor() {
        this.embeddedView  = undefined // For now no support for opening embedded views on boot up 
        // builds workspace tree from root recursively 
        this.workspaceMediator = new workspaceMediator;

        var folderMediators:Array<folderMediator>  = this.workspaceMediator.getFolders()

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
    public update(any: any){

    }
    private refreshLinkTree() {

    }
    private refreshChannelGraph() {

    }
    private refreshPipeGraph() {

    }
    private refreshSymbolGraph() {

    }
    private addFolderGraph(fodlerGraph: folderGraph) {
        this.folderGraphs.push(folderGraph)
    }
    private removeFolderGraph(folderGraph: folderGraph) {
        this.
    }
    private addLink(link: treeLink, index: number) {
        this.folderGraphs[index].addLink()
    }
    private removeLink(link: treeLink) {

    }
    private openEmbeddedView() {

    }
    private closeEmbeddedView() {

    }
    private openTransition() {

    }
    private closeTransition() { // When all 

    }
    private zoomLink() {

    }
    private zoomNode() {

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