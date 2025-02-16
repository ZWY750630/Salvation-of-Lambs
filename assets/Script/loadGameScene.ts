import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('loadGameScene')
export class loadGameScene extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
    public onStartButtonClick()
    {
        director.loadScene("GameScene");
    }
}


