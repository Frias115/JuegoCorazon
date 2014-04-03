window.onload = function () {
  'use strict';

  var game
    , ns = window['corazon'];

  game = new Phaser.Game(960, 800, Phaser.AUTO, 'corazon-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);

  game.state.start('boot');
};
