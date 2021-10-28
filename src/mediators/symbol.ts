import {SymbolInformation, SymbolKind, SymbolTag, DocumentSymbol, DocumentSymbolProvider, DocumentSymbolProviderMetadata, 
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
    symbols: Array<DocumentSymbol> ;
    parent: fileMediator ;
    iconMediator: symbolIconMediator ;
    location: SymbolInformation;
    icon: ; // The icon is and 

    constructor(){

    }
}
