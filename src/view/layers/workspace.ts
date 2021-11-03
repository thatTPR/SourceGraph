
import { symbolNode, symbolDiamond, symbolCycle, symbolArrow, symbolGraph } from './symbol';
import { fileNode, fileDiamond, fileCycle, filePipe , fileGraph} from './file';
import { folderGraph, treeBranch,folderChannel, folderDiamond, folderCycle, folderNode, } from './folder';

import {/* editorType,  embeddedEditorMediator,*/ workspaceMediator } from '../../mediators/workspace';
import { folderMediator } from '../../mediators/folder';

import 'd3' ;
import d3 = require('d3');



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

export class diamondIndex { // Maybe use observables
    symbol : Array<symbolDiamond> | undefined;
    file : Array<fileDiamond> | undefined;
    folder : Array<folderDiamond> | undefined;
    isSorted: boolean ;
    constructor(symbol: Array<symbolDiamond> | undefined,
        file: Array<fileDiamond> | undefined,
        folder: Array<folderDiamond> | undefined) {
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
    private sortBySize(diamonds: Array<symbolDiamond> | Array<fileDiamond> | Array<folderDiamond> ){
        
    }
    private removeDuplicatesSymbol(){
        for ( var i=0 ; i < this.symbol.length ; i++ )
        {
            for(let j in this.symbol){
                if(this.equivalent(i,j) == true){
                    this.symbol.splice(j) ;
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
    
    public getPlaceinArray(diamond: fileDiamond | folderDiamond | symbolDiamond ){
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
        if(typeof(diamond) === typeof(symbolDiamond)){
            return this.symbol;
        }
        if(typeof(diamond) === typeof(fileDiamond)){
            return this.file;
        }
        if(typeof(diamond) === typeof(folderDiamond)){
            return this.folder;
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
    isSorted: boolean | undefined;
    symbol : Array<symbolCycle> | undefined;
    file : Array<fileCycle> | undefined;
    folder : Array<folderCycle> | undefined;
    constructor(symbol: Array<symbolCycle> | undefined,
        file: Array<fileCycle> | undefined,
        folder: Array<folderCycle> | undefined) {
        this.symbol  = symbol;
        this.file = file;
        this.folder = folder;
        this.isSorted = false ;
    }
    private revealCycle(cycle: symbolCycle | fileCycle | folderCycle){

    }
    public sort(){
        this.isSorted = true ;
    }

}

export class cycleScale {
    cycleIndex: cycleIndex ;
    symbol: Array<symbolNode> | undefined ;
    file: Array<fileNode>  | undefined;
    folder: Array<folderNode> | undefined ;
    renderScope: folderNode | fileNode | Array<folderNode> | Array<fileNode> | undefined ; // If Array undefined defaults to entire project
    constructor(root: Array<folderNode>) {
        this.symbol = undefined ;      
        this.file = undefined   ;
        this.folder = undefined ;
        this.renderScope = root ;
    }

    private zoomNode(node: folderNode | fileNode | symbolNode){

    }
    private renderMultiLevelChart(){
        d3.Adder        

    }
    private cmpSymbol(){
            if(typeof(this.symbol) !== typeof(undefined) ){
                let aOccur:number = 0 ; let bOccur:number ;
                for( let i ; i < this.cycleIndex.symbol.length ; i++){
        
                }
                
                return n ;
            }
            else {
                throw new Error("symbol is undefined")
                
            }
        }
    }
   
    private cmpFile(){
        
    }
    private cmpFolder(){
        
    }
    private sortAll(){
        if (this.symbol === undefined){
            throw new Error("Symbol array undefined");
        }
        else{
            this.symbol.sort

        }
    }
    
}
export class diamondScale { 

    symbol: Array<symbolNode> | undefined ;
    file: Array<fileNode>  | undefined;
    folder: Array<folderNode> | undefined ;
    renderScope: folderNode | fileNode | Array<folderNode> | Array<fileNode> | undefined ; // If Array undefined defaults to entire project
    constructor(root: Array<folderNode>) {
        this.symbol = undefined ;      
        this.file = undefined   ;
        this.folder = undefined ;
        this.renderScope = root ;
    }
    
    
    

     
}

// export class editorBinding{ // Node(s) opens a context menu-like view for the 

// }
// If i finsh this down it should be pretty much done. Yay
// export class embeddedView {
//     workspace: workspaceGraph | undefined; // 
//     parent: fileNode | Array<fileNode>| undefined;
//      
//     view: embeddedEditorMediator;

//     constructor(view: embeddedEditorMediator, workspace: workspaceGraph| undefined, parent: fileNode | Array<fileNode> | undefined) {
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
    workspaceMediator: workspaceMediator ;

    diamondIndex: diamondIndex;  cycleIndex: cycleIndex;
    diamondScale: diamondScale;  cycleScale: cycleScale;

    // embeddedView: Array<embeddedView> | undefined;
    constructor() {
        // this.embeddedView  = undefined // For now no support for opening embedded views 
        // builds workspace tree from root recursively 
        // Build Link tree
 // IdDFS here  https://en.wikipedia.org/wiki/Iterative_deepening_depth-first_search
        
        this.workspaceMediator = new workspaceMediator ;
        

        this.folderGraph = new folderGraph(this, undefined, undefined, undefined)
        this.fileGraph =  new fileGraph(this, this.folderGraph, undefined, undefined)
        this.symbolGraph = new symbolGraph(this, undefined, undefined, undefined , undefined, undefined)
        
        this.diamondIndex = new diamondIndex(undefined, undefined, undefined);
        this.cycleIndex = new cycleIndex(undefined ,undefined ,undefined );
        
        this.cycleScale = new cycleScale(this.cycleIndex);
        this.diamondScale = new diamondScale(this.diamondIndex);
        
        
        

    }
    public forceGraph(){
        d3.scale()
    }
    private refreshLinkTree() {

    }
    private refreshChannelGraph() {

    }
    private refreshPipeGraph() {

    }
    private refreshSymbolGraph() {

    }
    private zoomLink() {

    }
    
    private symbolLinkOrganise(center: fileNode | folderNode | symbolNode | undefined , cycle: symbolCycle| fileCycle| folderCycle | undefined ) {
        console.log("symbol link organising") ;  // Update on sidebar
    }
    private fileLinkOrganise() {
        console.log("file link organising") ; // Update on sidebar
    }
    private folderLinkOrganise() {
        console.log("folder organising") ; // Update on sidebar
    }
    private fileOrganise() {
        console.log("file organising") ; // Update on sidebar
    }
    private organise() {
        console.log("organising") ; // Update on sidebar
    }
}

