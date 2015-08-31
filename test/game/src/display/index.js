th.describe("display.Label", function() {

  th.it('init', function() {
    var app = phina.display.CanvasApp({
      query:'#world',
    });
    var scene = app.currentScene;
    var label = phina.display.Label('Hello, world!').addChildTo(scene);
    label.position.set(app.gridX.center(), app.gridY.center());
    app.run();
  });

  th.it('hoge', function() {
    var label = phina.display.Label('Hello, world!').addChildTo(this);
    label.position.set(640/2, 960/2);
  });

});