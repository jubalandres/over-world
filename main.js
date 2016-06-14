var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();
var TILE = 0;
var METER = TILE;
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

var cells = [];
function initialize() {
	for(var layerIdx = 0; layerIdx < LAYER_COUNT; layerIdx++) {
		cells[layerIdx] = [];
	var idx = 0;
		for(var y = 0; y < TileMaps["draft"].layers[layerIdx].height; y++) {
			cells[layerIdx][y] = [];
		for(var x = 0; x < TileMaps["draft"].layers[layerIdx].width; x++) {
			if(TileMaps["draft"].layers[layerIdx].data[idx] != 0) {

			cells[layerIdx][y][x] = 1;
		}
		else if(cells[layerIdx][y][x] != 1) {

		cells[layerIdx][y][x] = 0;
	}
		idx++;
		}
	} 
		idx = 0;
			 
	}
}

var LAYER_COUNT = TileMaps["draft"].layers.length;
var MAP = {tw: TileMaps["draft"].width, th: TileMaps["draft"].height};
var TILE = TileMaps["draft"].tilewidth;
var TILESET_TILE = TileMaps["draft"].tilesets[0].tilewidth;
var TILESET_PADDING = TileMaps["draft"].tilesets[0].margin;
var TILESET_SPACING = TileMaps["draft"].tilesets[0].spacing;
var TILESET_COUNT_X = TileMaps["draft"].tilesets[0].columns;
var TILESET_COUNT_Y = TileMaps["draft"].tilesets[0].tilecount
						/ TILESET_COUNT_X;
						


						
var tileset = document.createElement("img");
tileset.src = TileMaps["draft"].tilesets[0].image;

function cellAtPixelCoord(layer, x,y)
{
	if(x<0 || x>SCREEN_WIDTH)
		return 1;
	if(y>SCREEN_HEIGHT)
		return 0;
	return cellAtTileCoord(layer, p2t(x), p2t(y));
};

function cellAtTileCoord(layer, tx, ty)
{
	if(tx<0 || tx>=MAP.tw)
		return 1;
	if(ty<0 || ty>=MAP.th)
		return 0;
	return cells[layer][ty][tx];
};

function tileToPixel(tile)
{
	return tile * TILE;
};

function pixelToTile(pixel)
{
	return Math.floor(pixel/TILE);
};
function bound(value, min, max)
{
	if(value < min)
		return min;
	if(value > max)
		return max;
	return value;
}

function drawMap()
{
	for(var layeridx=0;layeridx<LAYER_COUNT;layeridx++)
	{
		if (TileMaps["draft"].layers[layeridx].visible == false) continue;
		var idx=0;
		for( var y = 0;y < TileMaps["draft"].layers[layeridx].height; y++)
		{
			for( var x = 0;x < TileMaps["draft"].layers[layeridx].width; x++)
			{
				if(TileMaps["draft"].layers[layeridx].data[idx] != 0)
				{
					var tileindex = TileMaps["draft"].layers[layeridx].data[idx] - 1;
					var sx = TILESET_PADDING + (tileindex % TILESET_COUNT_X)*(TILESET_TILE + TILESET_SPACING);
					var sy = TILESET_PADDING + (Math.floor(tileindex/TILESET_COUNT_X))*(TILESET_TILE + TILESET_SPACING);
					context.drawImage(tileset,sx,sy, TILESET_TILE,TILESET_TILE,x*TILE,y*TILE, TILESET_TILE +1,TILESET_TILE+1);
				}
				idx++;
			}
		} 
	}
}

var keyboard = new Keyboard();
var player = new Player();
var viewoffset = new Vector2();

function run()
{
	context.fillStyle = "blue";
	context.fillRect(0, 0, canvas.width, canvas.height);
	var deltaTime = getDeltaTime();
	context.save();
	viewoffset.x = player.position.x - canvas.width/4;
	viewoffset.y = player.position.y - canvas.height/4;
	context.scale(2,2);
	context.translate(-viewoffset.x, -viewoffset.y);
	drawMap();
	
	
	
	player.update(deltaTime);
	player.draw();
	
	
	context.restore();
	
	
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