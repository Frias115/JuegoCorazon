(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('player', 'assets/cell.png');
      this.load.image('enemy' , 'assets/virus.png');
      this.load.image('heart', 'assets/heart.png');
      this.load.image('paredinv', 'assets/paredinv.png');
      this.load.image('bullet', 'assets/bullet.png');
      this.load.tilemap('map', 'assets/level.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.image('pared', 'assets/pared.png');
      this.load.image('paredv', 'assets/paredv.png');
      this.load.image('paredv2', 'assets/paredv2.png');
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
      this.load.image('background', 'assets/background.png');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['corazon'] = window['corazon'] || {};
  window['corazon'].Preloader = Preloader;

}());
