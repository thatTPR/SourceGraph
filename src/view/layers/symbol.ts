import {SymbolKind, ThemeIcon, } from 'vscode';
import {} from '../../mediators/symbol'
// Contains both icons and Code symbols (if applicable)


class d3SymbolNode {
    type: SymbolInformation;
}
class d3SymbolArrow {
    cycleFlag: Boolean;
    diamondFlag: Boolean;
    constructor() {
        this.cycleFlag = false;
        this.diamondFlag = false;
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
