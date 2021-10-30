
import { symbolNode, symbolDiamond, symbolCycle, symbolArrow, symbolGraph } from './symbol';
import { fileNode, fileDiamond, fileCycle, filePipe , fileGraph} from './file';
import { folderGraph, treeLink,folderChannel, folderDiamond, folderCycle, folderNode, } from './folder';

import {/* editorType,  embeddedEditorMediator,*/ workspaceMediator } from '../../mediators/workspace';
import { folderMediator } from '../../mediators/folder';

import {scaleLinear} from 'd3-scale' ; 
import { easeQuadIn } from 'd3-ease';


// export interface graphIt extends Set<any>{
//     Symbol.iterator
// }
export interface diamond{
    start: any ; 
    intPaths: Set<any>;
    end: any ;

}
export interface cycle{
    content: Set<any> ;
}
export interface path{
    content: Set<any>;
}

export class diamondIndex {
    isSorted: boolean;
    symbol : Set<symbolDiamond>;
    file : Set<fileDiamond>;
    folder : Set<folderDiamond>;
    constructor(symbol: Set<symbolDiamond>,
        file: Set<fileDiamond>,
        folder: Set<folderDiamond>) {
        this.symbol  = symbol;
        this.file = file;
        this.folder = folder;
        this.isSorted = false ;
    }
    public sort(){
        this.isSorted = true
    }
    private comapareSize(diamond1:symbolDiamond | fileDiamond | folderDiamond, diamond2:symbolDiamond | fileDiamond | folderDiamond){
        let place1 = this.getPlace(diamond1) ;
        let place2 = this.getPlace(diamond2) ;
        if (place1 != place2){
            throw new Error("Size compare failed, Diamonds not of the same type")
        }
        else{
            if(diamond1 > diamond2){return 1 ;}
            
            if(diamond1 == diamond2){  return 0 ;}
            
            if(diamond1 < diamond2 ){return -1 ;}
            }
        
    }
    private sortBySize(diamonds: Set<symbolDiamond> | Set<fileDiamond> | Set<folderDiamond> ){
        
    }
    private removeDuplicatesSymbol(){
        for ( var i in this.symbol )
        {
            for(var j in this.symbol){
                if(this.equivalent(i,j) == true){
                    this.symbol.delete(j) ;
                }
            }
        }
    }
    public equivalent(diamond1: diamond , diamond2: diamond){
        if(diamond1 == diamond2){
            return true;
        } // Extra check needed in  cycle for rotational duplicates
        return false ;
            

    }

    public checkExists(diamond:  fileDiamond | folderDiamond | symbolDiamond){
        var place = this.getPlace(diamond);
       
  
        return false ;
    }
    
    public getPlaceinSet(diamond: fileDiamond | folderDiamond | symbolDiamond ){
        var place = this.getPlace(diamond) ;
        for (var i in place){
            if (this.comapareSize(i, diamond) == 1){
                
            }
            else{
                continue 
                
            }
        }
    }
    private getPlace(diamond: fileDiamond | folderDiamond | symbolDiamond ){
        if(typeof(diamond) == typeof(symbolDiamond)){
            return this.symbol;
        }
        if(typeof(diamond) == typeof(fileDiamond)){
            return this.file;
        }
        if(typeof(diamond) == typeof(folderDiamond)){
            return this.folder;
        }
    } 
    // private checkExists(diamond: fileDiamond | folderDiamond | symbolDiamond, 
    //     place: Set<symbolDiamond> | Set<fileDiamond> | Set<folderDiamond> ){
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
    isSorted: boolean ;
    symbol: Set<symbolCycle>;
    file: Set<fileCycle>;
    folder: Set<folderCycle>;
    constructor(symbolCycles: Set<symbolCycle>,
        fileCycles: Set<fileCycle>,
        folderCycles: Set<folderCycle>) {
        this.symbol = symbolCycles;
        this.file = fileCycles;
        this.folder = folderCycles;
        this.isSorted = false ;
    }
    
    public sort(){
        this.isSorted = true ;
    }

}

export class cycleScale {
    symbol: Set<folderNode> ;
    file: Set<fileNode> ;
    folder: Set<symbolNode>;
    
    constructor(cycleIndex: cycleIndex) {
        this.symbol = this.getSortedSymbol(cycleIndex)  ;        
        this.file = this.getSortedFile(cycleIndex)     ;   
        this.folder = this.getSortedFolder(cycleIndex);  
        
        
    }
    private renderMultiLevalScaleGraph(){
        

    }
    private getSortedSymbol(index: cycleIndex){
        return cycleIndex
    }
    private getSortedFile(index: cycleIndex){

    }
    private getSortedFolder(index: cycleIndex){

    }
}
export class diamondScale {
    symbol: Set<symbolNode> ;
    file: Set<fileNode> ;
    folder: Set<folderNode>
    constructor(diamondIndex: diamondIndex) {
        this.symbol = (diamondIndex.symbol)  ;        
        this.file = (diamondIndex.file)     ;   
        this.folder = getSorted(diamondIndex.folder);  
    }
    

     
}
// If i finsh this down it should be pretty much done. Yay
// export class embeddedView {
//     workspace: workspaceGraph | undefined; // 
//     parent: fileNode | Set<fileNode>| undefined;
//     view: embeddedEditorMediator;

//     constructor(view: embeddedEditorMediator, workspace: workspaceGraph| undefined, parent: fileNode | Set<fileNode> | undefined) {
//         this.view = view;
//         this.workspace = workspace ;
//         this.parent = parent;
//         this.provideView(view.provideEditor);
//     }
//     public provideView(anchor: fileNode ) {
       
//     }
  
//     public renderWorkspace(workspace: workspaceGraph) {

//     }
    

// }


export class workspaceGraph {
    folderGraph: folderGraph;
    fileGraph: fileGraph ;
    symbolGraph: symbolGraph ;

    workspaceMediator: workspaceMediator;

    diamondIndex: diamondIndex;  cycleIndex: cycleIndex;
    diamondScale: diamondScale;  cycleScale: cycleScale;

    // embeddedView: Set<embeddedView> | undefined;
    constructor() {
        // this.embeddedView  = undefined // For now no support for opening embedded views on boot up 
        // builds workspace tree from root recursively 
        this.workspaceMediator = new workspaceMediator;

        var folderMediators:Set<folderMediator>  = this.workspaceMediator.getFolders()

        // Build Link tree

        // buildChannelGraph

        // buildPipeGraph
        // buildSymbolGraph
        // builds graph and checks for diamonds and cycles returning information where appropiate
        
        this.folderGraph = new folderGraph()
        this.symbolGraph = new symbolGraph()
        this.fileGraph = new fileGraph()

        this.workspaceMediator.detectDiamonds();
        this.workspaceMediator.detectCycles();
        this.diamondIndex = new diamondIndex();
        this.cycleIndex = new cycleIndex();
        
        this.cycleScale = new cycleScale();
        this.diamondScale = new diamondScale();
        

    }
    
    private refreshLinkTree() {

    }
    private refreshChannelGraph() {

    }
    private refreshPipeGraph() {

    }
    private refreshSymbolGraph() {

    }
    private addLink() {
        
    }
    private removeLink() {

    }
    private openEmbeddedView() {

    }
    private closeEmbeddedView() {

    }
    private openTransition() {

    }
    private closeTransition() {

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