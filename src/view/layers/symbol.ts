import {SymbolKind, ThemeIcon, SymbolInformation} from 'vscode';
import {} from '../../mediators/symbol'
// Contains both icons and Code symbols (if applicable)
import {fileIncludeGraph, fileNode, filePipe} from './file';
import {folderChannel, folderGraph, folderNode} from './folder';
import {} from './workspace';

class d3SymbolNode {
    type: SymbolInformation;
}
class d3SymbolArrow {
    cycleFlag: Boolean;
    diamondFlag: Boolean;
    rendered: Boolean;
    constructor() {
        this.cycleFlag = false;
        this.diamondFlag = false;
        this.rendered = false ;
    }
    private async animation(source: , dest:){
        while(this.rendered){

        }
    }
    private embed(container: filePipe | folderChannel ){
        container.IncludeSymbolArrow(this)
    }
    private renderArrow(){
        // Render code
        this.animation
    }
}
class symbolincludeGraph {

    symbolNodes: Array<d3SymbolArrow>;
    symbolArrows: Array<d3SymbolNode>;

    constructor(symbolNodes: Array<d3SymbolNode>, symbolArrows: Array<d3SymbolArrow>) {
        this.symbolArrows = symbolArrows; this.symbolNodes = symbolNodes;
    }
    // This applies modification to arrow cycles and / or diamonds  // Cycles pink, diamonds light blue
    public diamondModifier() {
    }
    public cycleModifier() {
    }

}
