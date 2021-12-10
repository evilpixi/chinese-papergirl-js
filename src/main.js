var gWidth = 320
var gHeight = 192

var gameconfig = {
    type: Phaser.WEBGL,
    scale: {
        parent: 'gamediv',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_VERTICALLY,
        width: gWidth,
        height: gHeight,
        zoom: 4,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: 0,
            debug: false
        }
    },
    pixelArt: true,
    scene: [
        BootScene,
        MenuScene,
        GameScene,
        EndScene,
    ]
}

var game = new Phaser.Game(gameconfig)