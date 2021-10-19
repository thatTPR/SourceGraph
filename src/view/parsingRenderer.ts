// This display the directory structure as a graph of includes and class views Fol
// By default this should be a hierarchy view but some systems do have cycles in them as a feature( these are very prone to bugs so i really should impement them)
// Important to note the difference between a cycle and a diamond (Diamond is when A calls B and C , and both B and C call D)
// (Cycle is when A calls B calls C calls A)
// Includes are pipes that flow to the including file (same with modules)
// Classes , overkill would be to use d3 force.

// The visualization is alway built from the main out and 
import * as de from 'd3';
import "../parser";
import * as d3 from 'd3' ;

// Uses the parser api

class filehandler {
    
    problem: Boolean ;
    path: path.ParsedPath ;
    
    
    constructor(path: path.ParsedPath) {
        this.problem = false ;
        this.path = path ;
    }
    
    public checkProblems() {
        if (/* Check file diagnostics */) {
            this.problem = true ;
        } else {
            this.problem = false ;
        }
        
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

class renderer {
    public addFile
}
export function stoprenderer() {
    
}