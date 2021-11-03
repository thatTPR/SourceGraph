import { exists } from 'fs';
import {
    SymbolInformation, SymbolKind, SymbolTag, DocumentSymbol, DocumentSymbolProvider, DocumentSymbolProviderMetadata,
    WorkspaceSymbolProvider,
    CancellationToken,
    ProviderResult,
    ThemeIcon,
    Range, TextDocument, ReferenceProvider, TypeDefinitionProvider, ImplementationProvider, DefinitionProvider, Definition, LocationLink, Position, Location, ReferenceContext
} from 'vscode';

import { fileMediator } from './file';

// export class queryWorkspace implements WorkspaceSymbolProvider {
//     provideWorkspacedoc(query: string, token: CancellationToken): ProviderResult<SymbolInformation[]> {
//         throw new Error('Method not implemented.');
//     }



// }


class referenceMediator implements ReferenceProvider {
    provideReferences(document: TextDocument, position: Position, context: ReferenceContext, token: CancellationToken): ProviderResult<Location[]> {
        throw new Error('Method not implemented.');
    }

}
// class definitionMediator implements DefinitionProvider {
//     provideDefinition(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Definition | LocationLink[]> {
//         throw new Error('Method not implemented.');
//     }

// }
// class typeDefintionMediator implements TypeDefinitionProvider {
//     provideTypeDefinition(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Definition | LocationLink[]> {
//         throw new Error('Method not implemented.');
//     }

// }
// class implmentationMediator implements ImplementationProvider {
//     provideImplementation(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Definition | LocationLink[]> {
//         throw new Error('Method not implemented.');
//     }

// }
class parentMediator {

    provideParent() {
        let parent: symbolMediator ;
        let exists: boolean ;


        if(checkExists()){



            return parent ;
        }
        else{
            parent = new symbolMediator() ;
            return parent ;
        }

    }
}
class childMediator {
    checkExists(){

    }
    provideChild(parentFile: fileMediator) {

        let child: symbolMediator ;
        
        if(checkExists()){



            return child ;
        }
        else{
            child = new symbolMediator() ;
            return child;
        }
        
    }
}

export class symbolMediator { // A kind of outline manager
    doc: DocumentSymbol;
    owner: symbolNode ;

    parent: fileMediator;

    symbolParent: parentMediator;
    symbolChild: childMediator;

    ref: referenceMediator;
    def: definitionMediator;
    typedef: typeDefintionMediator;
    impl: implmentationMediator;


    public provideDocumentSymbols(document: TextDocument, token: CancellationToken): Promise<vscode.DocumentSymbol[]> {
        this.doc.

    }
    constructor(doc: Array<DocumentSymbol>, parent: fileMediator, iconMediator: symbolIconMediator,) {
        this.doc = doc; this.parent = parent;
        
    }
    
}
