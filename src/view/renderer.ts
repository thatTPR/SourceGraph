// This display the directory structure as a graph of includes and class views Fol
// By default this should be a hierarchy view but some systems do have cycles in them as a feature( these are very prone to bugs so i really should impement them)
// Important to note the difference between a cycle and a diamond (Diamond is when A calls B and C , and both B and C call D)
// (Cycle is when A calls B calls C calls A)
// Includes are pipes that flow to the including file (same with modules)
// Classes , overkill would be to use d3 force.

// The visualization is alway built from the main out and 
import * as de from 'd3';
import "../directoryparser.ts";
import "../LSPFileHandler";
import * as path from 'path';
import * as vscode from 'vscode';
import * as d3 from 'd3' ;



class filehandler {

    constructor(path: path.ParsedPath) {

    }

}

class folderContainer {
    constructor(path: path.ParsedPath) {
        
    }

}



class folderincludeflow { // A big pipe that shows relations between modules 
    constructor(includingFolder: folderContainer, includedFodlers: Array<folderContainer>){
        
    }
}

// If file is not in same directory than pipe will be rendered inside a folder include flow
class fileincludePipe {
    constructor(includingFile: filehandler, includedFiles: Array<filehandler>) {

    }
}

export function startrender() {
    const panel = vscode.window.createWebviewPanel(
        'Source Graph', // Identifies the type of the webview. Used internally
        'Source Graph', // Title of the panel displayed to the user
        vscode.ViewColumn.One,
        {}
    );
   
    panel.webview.html =  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cat Coding</title>
</head>
<body>
<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
P
</html>`
    
}

export function stoprenderer() {
    
}