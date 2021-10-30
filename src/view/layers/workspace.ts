
import { symbolNode, symbolDiamond, symbolCycle, symbolArrow, symbolGraph } from './symbol';
import { fileNode, fileDiamond, fileCycle, filePipe , fileGraph} from './file';
import { folderGraph, treeBranch,folderChannel, folderDiamond, folderCycle, folderNode, } from './folder';

import {/* editorType,  embeddedEditorMediator,*/ workspaceMediator } from '../../mediators/workspace';
import { folderMediator } from '../../mediators/folder';

import {scaleLinear} from 'd3-scale' ; 
import { easeQuadIn } from 'd3-ease';
import { EventEmitter } from 'stream';
import { eventNames } from 'process';


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
    isSorted: boolean | undefined;
    symbol : Set<symbolDiamond> | undefined;
    file : Set<fileDiamond> | undefined;
    folder : Set<folderDiamond> | undefined;
    constructor(symbol: Set<symbolDiamond> | undefined,
        file: Set<fileDiamond> | undefined,
        folder: Set<folderDiamond> | undefined) {
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
        for ( var i:symbolDiamond in this.symbol )
        {
            for(let j:symbolDiamond in this.symbol){
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
    isSorted: boolean | undefined;
    symbol : Set<symbolDiamond> | undefined;
    file : Set<fileDiamond> | undefined;
    folder : Set<folderDiamond> | undefined;
    constructor(symbol: Set<symbolDiamond> | undefined,
        file: Set<fileDiamond> | undefined,
        folder: Set<folderDiamond> | undefined) {
        this.symbol  = symbol;
        this.file = file;
        this.folder = folder;
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
    scope: folderNode | undefined ; // If set undefined defaults to entire project
    constructor(cycleIndex: cycleIndex) {
        this.symbol = this.getSortedSymbol(cycleIndex)  ;        
        this.file = this.getSortedFile(cycleIndex)     ;   
        this.folder = this.getSortedFolder(cycleIndex);  
        
        
    }
    private renderMultiLevelChart(){
        

    }
    private getSortedAll(){

    }
    private getSortedSymbol(index: cycleIndex){
        for (let i in index.symbol){
            for(let j in i)
        }
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
    scope: folderNode | undefined ; // If set undefined defaults to entire project
    constructor(diamondIndex: diamondIndex) {
        this.symbol = (diamondIndex.symbol)  ;        
        this.file = (diamondIndex.file)     ;   
        this.folder = getSorted(diamondIndex.folder);  
    }
    public setScope(folderNode: folderNode){
        this.symbol = get
    }
    
    

     
}
// If i finsh this down it should be pretty much done. Yay
// export class embeddedView {
//     workspace: workspaceGraph | undefined; // 
//     parent: fileNode | Set<fileNode>| undefined;
//      
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
    

    diamondIndex: diamondIndex;  cycleIndex: cycleIndex;
    diamondScale: diamondScale;  cycleScale: cycleScale;

    // embeddedView: Set<embeddedView> | undefined;
    constructor() {
        // this.embeddedView  = undefined // For now no support for opening embedded views on boot up 
        // builds workspace tree from root recursively 
        // Build Link tree
 // IdDFS here  https://en.wikipedia.org/wiki/Iterative_deepening_depth-first_search
        // buildChannelGraph

        // buildPipeGraph
        // buildSymbolGraph
        // builds graph and checks for diamonds and cycles returning information where appropiate
        
        this.diamondIndex = new diamondIndex(undefined, undefined, undefined);
        this.cycleIndex = new cycleIndex(undefined ,undefined ,undefined );
        this.cycleScale = new cycleScale(this.cycleIndex);
        this.diamondScale = new diamondScale(this.diamondIndex);
        this.folderGraph = new folderGraph()
        this.fileGraph =  this.folderGraph.filegraph
        this.symbolGraph = new symbolGraph()

        
        
        
        

    }
    private refreshLinkTree() {

    }
    private refreshChannelGraph() {

    }
    private refreshPipeGraph() {

    }
    private refreshSymbolGraph() {

    }
    private openEmbeddedView() {

    }
    private closeEmbeddedView() {

    }
    private zoomLink() {

    }
    private zoomNode() {

    }
    private symbolLinkOrganise() {
        console.log("symbol link organising") ;
    }
    private fileLinkOrganise() {
        console.log("file link organising") ;
    }
    private folderLinkOrganise() {
        console.log("folder organising") ;
    }
    private fileOrganise() {
        console.log("file organising") ;
    }
    private organise() {
        console.log("organising") ;
    }
}

