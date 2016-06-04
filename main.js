var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();
var MAXDX = METER * 10;
var MAXDY = METER * 15;

function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	

	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}
var keyboard = new Keyboard();
var player = new Player();

function run()
{
	player.update(deltaTime);
	player.draw();
	context.fillStyle = "blue";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

(function() {
  var onEachFrame;
  if (window.requestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    }
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);