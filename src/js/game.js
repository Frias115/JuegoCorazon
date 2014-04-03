  (function() {
    'use strict';

    function Game() {
      this.player = null;
      this.jumpTimer = 0;
      this.bulletTimer = 0;
      this.layer;
    }

    Game.prototype = {

      create: function () {
        var x = this.game.width / 2
        , y = this.game.height / 2;

        this.physics.startSystem(Phaser.Physics.P2JS);

        this.game.add.sprite(0, 0,'background');

        this.map = this.game.add.tilemap('map');
        this.map.addTilesetImage('pared');
        this.map.addTilesetImage('paredv');
        this.map.addTilesetImage('paredv2');

        this.layer = this.map.createLayer('Tile Layer 1');
        this.layer.resizeWorld();

        this.physics.p2.convertTilemap(this.map, this.layer);


        this.bullets = this.add.group();
        this.bullets.createMultiple(10, 'bullet');
        this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet){bullet.kill()}, this);

        this.heart = this.game.add.sprite(330, 90, 'paredinv')

        

        //this.heart.body.immovable = true;

        //this.heart.body.collideWorldBounds = true;



        this.game.physics.p2.gravity.y = 250;

        this.player = this.add.sprite(x,y, 'player');

        this.game.physics.p2.enable(this.player);

        this.player.body.fixedRotation = true;

        this.camera.follow(this.player);

        //this.player.body.collideWorldBounds = true;




      },

      update: function () {
  
    if (this.input.keyboard.isDown(Phaser.Keyboard.A))
    {
      this.player.body.x -= 6;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.D))
    {
      this.player.body.moveRight(200);
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.W) && this.game.time.now > this.jumpTimer)
    {
      this.player.body.moveUp(400);
      this.jumpTimer = this.game.time.now + 500;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
      if (this.time.now > this.bulletTimer) {
      this.bullet = this.bullets.getFirstExists(false);
      if (this.bullet) {
        this.bullet.reset(this.player.x + 35, this.player.y + 15);
        this.bullet.velocity.y = -400;
        this.bulletTimer = this.time.now + 300;
      }
      }
    }

    if (this.player.body.y > 800){
      this.player.body.x = 500;
      this.player.body.y = 10;
    }

    





  },

  render: function() {

  }


};

window['corazon'] = window['corazon'] || {};
window['corazon'].Game = Game;

}());
