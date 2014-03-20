(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      this.titleTxt = this.add.bitmapText(x, y, 'minecraftia', 'Otro texto', 16);
      
      

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, 'minecraftia', 'START', 16);
      

      this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['corazon'] = window['corazon'] || {};
  window['corazon'].Menu = Menu;

}());
