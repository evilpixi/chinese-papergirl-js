class Paper extends Phaser.Physics.Arcade.Sprite 
{
    constructor(scene) 
    {
        super(scene, 
            scene.player.x, 
            scene.player.y, 
            "newspaper", 0)
        scene.add.existing(this)
        scene.physics.add.existing(this);

        //this.setScale(0.4)
        this.rotationSpeed = Phaser.Math.Between(4, 8)

        this.setVelocityX(cfg.paperX)
        this.setVelocityY(-cfg.paperY - scene.player.y + cfg.playerY0)
        this.setAccelerationX(-cfg.paperBrake)
    }

    preUpdate()
    {
        super.preUpdate()

        this.angle += this.rotationSpeed

        if (this.body.velocity.x < 10) {
            
            this.setAccelerationX(0)
            this.setVelocityX(0)
            this.setVelocityY(0)
            this.rotationSpeed = 0
        }
    }
}