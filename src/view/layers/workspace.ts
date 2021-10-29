
import { symbolNode, symbolDiamond, symbolCycle, symbolArrow, symbolGraph } from './symbol';
import { fileNode, fileDiamond, fileCycle, filePipe , fileGraph} from './file';
import { folderGraph, treeLink,folderChannel, folderDiamond, folderCycle, folderNode, } from './folder';

import { editorType, workspaceMediator,  embeddedEditorMediator } from '../../mediators/workspace';
import { folderMediator } from '../../mediators/folder';

import {scaleLinear} from 'd3-scale' ; 
import { easeQuadIn } from 'd3-ease';

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
    symbolDiamonds: Set<symbolDiamond>;
    fileDiamonds: Set<fileDiamond>;
    folderDiamonds: Set<folderDiamond>;
    constructor(symbolDiamonds: Set<symbolDiamond>,
        fileDiamonds: Set<fileDiamond>,
        folderDiamonds: Set<folderDiamond>) {
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

    public checkExists(diamond:  fileDiamond | folderDiamond | symbolDiamond){
        var place = this.getPlace(diamond);
       
  
        return false ;
    }
    private getPlace(diamond: fileDiamond | folderDiamond | symbolDiamond ){
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
    symbol: Set<symbolCycle>;
    file: Set<fileCycle>;
    folder: Set<folderCycle>;
    constructor(symbolCycles: Set<symbolCycle>,
        fileCycles: Set<fileCycle>,
        folderCycles: Set<folderCycle>) {
        this.symbol = symbolCycles;
        this.file = fileCycles;
        this.folder = folderCycles;
    }
    
    

}

export class scaleFileNode{
    value!: Number;
    ref!: fileNode;
    contructor(value: Number , ref: fileNode){
        this.value = value ; this.ref = ref ;
    }
}
export class scaleFolderNode{
    value!: Number;
    ref!: folderNode;
    contructor(value: Number , ref: folderNode){
        this.value = value ; this.ref = ref ;
    }
}
export class scaleSymbolNode{
    value!: Number;
    ref!: symbolNode;
    contructor(value: Number , ref: symbolNode){
        this.value = value ; this.ref = ref ;
    }
}

export class cycleScale {
    symbol: Set<scaleFolderNode> ;
    file: Set<scaleFileNode> ;
    folder: Set<scaleSymbolNode>;
    constructor(cycleIndex: cycleIndex) {
        this.symbol = this.getSorted(cycleIndex.symbol)  ;        
        this.file = this.getSorted(cycleIndex.file)     ;   
        this.folder = this.getSorted(cycleIndex.folder);  
        
        
     }
    private getSorted(indexMember: cycleIndex.symbol| )
}
export class diamondScale {
    symbol: Set<Number> ;
    file: Set<number> ;
    folder: Set<number>
    constructor(diamondIndex: diamondIndex) {
        this.symbol = getSorted(diamondIndex.symbol)  ;        
        this.file = getSorted(diamondIndex.file)     ;   
        this.folder = getSorted(diamondIndex.folder);  
        
        
     }

     
}
// If i finsh this down it should be pretty much done. Yay
export class embeddedView {
    workspace: workspaceGraph | undefined; // 
    parent: fileNode | Set<fileNode>| undefined;
    view: embeddedEditorMediator;

    constructor(view: embeddedEditorMediator, workspace: workspaceGraph| undefined, parent: fileNode | Set<fileNode> | undefined) {
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
    folderGraph: folderGraph;
    fileGraph: fileGraph ;
    symbolGraph: symbolGraph ;

    workspaceMediator: workspaceMediator;

    diamondIndex: diamondIndex;  cycleIndex: cycleIndex;
    diamondScale: diamondScale;  cycleScale: cycleScale;

    embeddedView: Set<embeddedView> | undefined;
    constructor() {
        this.embeddedView  = undefined // For now no support for opening embedded views on boot up 
        // builds workspace tree from root recursively 
        this.workspaceMediator = new workspaceMediator;

        var folderMediators:Set<folderMediator>  = this.workspaceMediator.getFolders()

        // Build Link tree

        // buildChannelGraph

        // buildPipeGraph
        // buildSymbolGraph
        // builds graph and checks for diamonds and cycles returning information where appropiate
        folderChannels = new 
        folderLinks 
        this.folderGraph = new folderGraph()
        this.symbolGraph = new symbolGraph()
        this.fileGraph = new fileGraph()
        this.diamondIndex = new diamondIndex();
        this.cycleIndex = new cycleIndex();
        this.cycleScale =
        this.diamondScale =
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