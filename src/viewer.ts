// This display the directory structure as a graph of includes and class views Fol
// By default this should be a hierarchy view but some systems do have cycles in them as a feature( these are very prone to bugs so i really should impement them)
// Important to note the difference between a cycle and a diamond (Diamond is when A calls B and C , and both B and C call D)
                                                                // (Cycle is when A calls B calls C calls A)
// 
import * as de from 'd3';
import "./directoryparser.ts";
import * as path from 'path';
class file {
    constructor(parameters) {
        
    }
    let imports: 
}

class folderContainer {
    constructor(parameters) {
        
    }
    
}
