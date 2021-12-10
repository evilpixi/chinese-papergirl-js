class GameScene extends Phaser.Scene {
    constructor()
    {
        super("GameScene")
    }

    preload()
    {

    }

    create()
    {
        const map = this.make.tilemap({key: "tilemap1data"})
        const tileset = map.addTilesetImage("world_tileset", "tileset_img")

        map.createLayer("layer1", tileset, 0, 0)

        this.papers = 10

        this.player = new Player(this)
        
        this.cameras.main.startFollow(this.player, 1, 1, 1, -128, 32 + 8)
        this.cameras.main.setDeadzone(0, cfg.playerMaxY * 2 + 10)


        

        this.input.keyboard.on("keydown-CTRL", ()=> {
            this.player.setBrake(true)
        })
        this.input.keyboard.on("keyup-CTRL", ()=> {
            this.player.setBrake(false)
        })

        this.input.keyboard.on("keydown-SPACE", ()=> {
            if (this.papers <= 0) return
            if (this.player.throwing) return

            this.papers--
            this.player.throw()
        })
        this.cursorKeys = this.input.keyboard.createCursorKeys()

        this.createUI()
    }

    update(t, d)
    {
        this.updateUI()
        this.player.upt()
        
        if (this.cursorKeys.up.isDown) this.player.moveVertically(-1)
        if (this.cursorKeys.down.isDown) this.player.moveVertically(1)
    }

    createUI()
    {
        this.ui = {
            paperIcon: this.add.image(10, 10, "newspaper-icon"),
            paperText: this.add.text(18, 4, "x")
        }

        for (let i in this.ui)
        {
            this.ui[i].setScrollFactor(0, 0)
        }
    }
    updateUI()
    {
        this.ui.paperText.setText(this.papers)
    }
}