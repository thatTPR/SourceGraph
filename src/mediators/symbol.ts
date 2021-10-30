import { SymbolInformation, SymbolKind, SymbolTag, DocumentSymbol, DocumentSymbolProvider, DocumentSymbolProviderMetadata, 
WorkspaceSymbolProvider,
CancellationToken,
ProviderResult} from 'vscode';

import {fileMediator } from './file';
export class symbolIconMediator{

   
    public getSVG(symbol: symbolMediator){

    }
}
export class queryWorkspace implements WorkspaceSymbolProvider {
    provideWorkspaceSymbols(query: string, token: CancellationToken): ProviderResult<SymbolInformation[]> {
        throw new Error('Method not implemented.');
    }

}

export class symbolMediator { // A kind of outline manager
    symbols: Set<DocumentSymbol> ;
    parent: fileMediator ;
    iconMediator: symbolIconMediator ;
    location: SymbolInformation;
    

    constructor(symbols: Set<DocumentSymbol> , parent: fileMediator, iconMediator:symbolIconMediator,){
        this.symbols = symbols ; this.parent = parent ;
        this.
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
    public provideImplementations(symbol: DocumentSymbol){
     
    }
    public provideDefinitions(symbol: DocumentSymbol){
     
    }
    public provideTypeDefinitions(symbol: DocumentSymbol){
     
    }
}
