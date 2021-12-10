class Player extends Phaser.Physics.Arcade.Sprite 
{
    constructor(scene) 
    {
        super(scene, 
            cfg.playerX0,
            cfg.playerY0, 
            "player", 0)
        scene.add.existing(this)
        scene.physics.add.existing(this);
        
        
        this.anims.play("player-bike")

        this.setMaxVelocity(cfg.maxspeed, 0)
        this.setAccelerationX(cfg.accel)
    }

    upt()
    {
        if (this.body.velocity.x <= 0) this.setVelocityX(5)

        let minY = cfg.playerY0 - cfg.playerMaxY
        let maxY = cfg.playerY0 + cfg.playerMaxY

        if (this.y <= minY) this.y = minY
        if (this.y >= maxY) this.y = maxY

        this.updateAnimation()
    }

    setBrake(isStopping)
    {
        this.stopping = isStopping
        this.setAccelerationX(isStopping? cfg.brake : cfg.accel)
    }

    moveVertically(side)
    {
        const cam = this.scene.cameras.main
        let mov = side * cfg.playerMovY
        
        /*let currentScroll = cam.getScroll(this.x, this.y)
        console.log(currentScroll)
        cam.setScroll(currentScroll.y - mov)*/
        
        this.y += mov
    }

    throw()
    {
        let paper = new Paper(this.scene)

        this.throwing = true
        
        this.anims.play("player-throw", 1)
        .on("animationcomplete", ()=>{
            this.throwing = false
        })
    }
    
    updateAnimation()
    {
        
        if (this.throwing) return
        
        if (this.stopping) this.anims.play("player-brake", 1)
        else this.anims.play("player-bike", 1)
    }
}