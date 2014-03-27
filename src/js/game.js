(function() {
  'use strict';

  function Game() {
    this.player = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;



     this.game.add.sprite(0, 0,'background');

     this.game.add.sprite(0, 0,'paredes');


     
    //var map;
    //var layer;

    //map = this.add.tilemap('mario');
    //map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
    //layer = map.createLayer('World1');
    //layer.resizeWorld();
    

    this.game.physics.arcade.gravity.y = 250;

      /*this.player = this.add.sprite(x, y, 'player');
      this.player.anchor.setTo(0.5, 0.5);
      this.input.onDown.add(this.onInputDown, this);*/

    this.player = this.add.sprite(x,y, 'player')
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

    this.player.body.collideWorldBounds = true;
    this.player.body.setSize(20, 32, 5, 16);

    this.game.camera.follow(this.player);




    },

    update: function () {
      












      /*var x, y, cx, cy, dx, dy, angle, scale;

      x = this.input.position.x;
      y = this.input.position.y;
      cx = this.world.centerX;
      cy = this.world.centerY;

      angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      this.player.angle = angle;

      dx = x - cx;
      dy = y - cy;
      scale = Math.sqrt(dx * dx + dy * dy) / 100;

      this.player.scale.x = scale * 0.6;
      this.player.scale.y = scale * 0.6;*/
    },

    onInputDown: function () {
     
    }

  };

  window['corazon'] = window['corazon'] || {};
  window['corazon'].Game = Game;

}());
