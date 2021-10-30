import { SymbolInformation, SymbolKind, SymbolTag, DocumentSymbol, DocumentSymbolProvider, DocumentSymbolProviderMetadata, 
WorkspaceSymbolProvider,
CancellationToken,
ProviderResult,
ThemeIcon,
Range, TextDocument} from 'vscode';

import {fileMediator } from './file';
export class symbolIconMediator{
    themeIcon: ThemeIcon
   
    public getSVG(symbol: symbolMediator){

    }
}
export class queryWorkspace implements WorkspaceSymbolProvider {
    provideWorkspaceSymbols(query: string, token: CancellationToken): ProviderResult<SymbolInformation[]> {
        throw new Error('Method not implemented.');
    }

}

export class symbolMediator implements DocumentSymbolProvider{ // A kind of outline manager
    symbols: Set<DocumentSymbol> ;
    parent: fileMediator ;
    location: SymbolInformation;

    public provideDocumentSymbols(document: TextDocument , token: CancellationToken):  Promise<vscode.DocumentSymbol[]> 
    {

    }
    constructor(symbols: Set<DocumentSymbol> , parent: fileMediator, iconMediator:symbolIconMediator,){
        this.symbols = symbols ; this.parent = parent ;
        vscode.reg
    }
    public getChildrenDocument(symbol: DocumentSymbol){
        return symbol.children
    }
    public getChildren(symbol: DocumentSymbol){
        return symbol.children
    }
    public provideReferences(symbol: DocumentSymbol){
        return DocumentSymbol.
    }
    public getRange(symbol: DocumentSymbol){
        return symbol.range;
    }
    public provideImplementations(symbol: DocumentSymbol){
        
    }
    public provideDefinitions(symbol: DocumentSymbol){
     
    }
    public provideTypeDefinitions(symbol: DocumentSymbol){
     
    }
}
