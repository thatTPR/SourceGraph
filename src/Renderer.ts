import {StatusBarItem, StatusBarAlignment} from 'vscode' ;
import {cycleScale, diamondScale} from './view/layers/workspace';
class sourceGraphActivity  {
    cycleScale: cycleScale;
    diamondScale: diamondScale;
    public setDiamondScale(diamondScale: diamondScale){
        this.diamondScale = diamondScale ;
    }
    public setCycleScale(cycleScale: cycleScale){
        this.cycleScale = cycleScale ;
    }
    
}



class sourceGraphStatusBarItem implements StatusBarItem {
    StatusBarAlignment: StatusBarAlignment ;
    constructor(){
        this.StatusBarAlignment = 1 ;
        
    }
    
}
