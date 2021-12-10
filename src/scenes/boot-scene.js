class BootScene extends Phaser.Scene {
    constructor()
    {
        super("BootScene")
    }

    preload()
    {
        this.load.spritesheet("player", "assets/player.png", {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.image("newspaper-icon", "assets/newspaper-icon.png")
        this.load.image("newspaper", "assets/newspaper.png")
        this.load.image("tileset_img", "assets/world_tileset.png")
        this.load.tilemapTiledJSON("tilemap1data", "assets/tilemap1.json")
        //this.load.image("player", "assets/tank1.png")
    }

    create()
    {
        this.anims.create({
            key: "player-brake",
            frames: this.anims.generateFrameNumbers("player",
            {
                start: 1,
                end: 1
            }),
            frameRate: 16
        })
        this.anims.create({
            key: "player-bike",
            frames: this.anims.generateFrameNumbers("player",
            {
                start: 0,
                end: 1
            }),
            repeat: -1,
            frameRate: 16
        })
        this.anims.create({
            key: "player-throw",
            frames: this.anims.generateFrameNumbers("player",
            /*{
                start: 2,
                end: 2
            }),*/
            [2, 2, 2, 2, 2]),
            //repeat: 5,
            frameRate: 16
        })
        this.scene.start("GameScene")
    }
}
