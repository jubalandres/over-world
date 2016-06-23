var UP = 0;
var UP_LEFT = 1;
var UP_RIGHT = 2;
var LEFT = 3;
var RIGHT = 4;
var DOWN = 5;
var DOWN_LEFT = 6;
var DOWN_RIGHT = 7;



var ANIM_IDLE_UP = 0;
var ANIM_WALK_UP = 1;
var ANIM_ATTACK_UP = 2;
var ANIM_DIE_UP = 3;

var ANIM_IDLE_UP_LEFT = 4;
var ANIM_WALK_UP_LEFT = 5;
var ANIM_ATTACK_UP_LEFT = 6;
var ANIM_DIE_UP_LEFT = 7;

var ANIM_IDLE_UP_RIGHT = 8;
var ANIM_WALK_UP_RIGHT = 9;
var ANIM_ATTACK_UP_RIGHT = 10;
var ANIM_DIE_UP_RIGHT = 11;

var ANIM_IDLE_LEFT = 12;
var ANIM_WALK_LEFT = 13;
var ANIM_ATTACK_LEFT = 14;
var ANIM_DIE_LEFT = 15;

var ANIM_IDLE_RIGHT = 16;
var ANIM_WALK_RIGHT = 17;
var ANIM_ATTACK_RIGHT = 18;
var ANIM_DIE_RIGHT = 19;

var ANIM_IDLE_DOWN = 20;
var ANIM_WALK_DOWN = 21;
var ANIM_ATTACK_DOWN = 22;
var ANIM_DIE_DOWN = 23;

var ANIM_IDLE_DOWN_LEFT = 24;
var ANIM_WALK_DOWN_LEFT = 25;
var ANIM_ATTACK_DOWN_LEFT = 26;
var ANIM_DIE_DOWN_LEFT = 27;

var ANIM_IDLE_DOWN_RIGHT = 28;
var ANIM_WALK_DOWN_RIGHT = 29;
var ANIM_ATTACK_DOWN_RIGHT = 30;
var ANIM_DIE_DOWN_RIGHT = 31;


var Enemy = function() {
	this.image = document.createElement("img");
	this.sprite = new Sprite("enemy.png");
//UP
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[0]); this.sprite.setAnimationOffset(0,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[5, 5, 10, 10, 15, 15, 20 ,20]); this.sprite.setAnimationOffset(1,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[25, 25 , 30 , 30, 35, 35, 40, 40]); this.sprite.setAnimationOffset(2,-52,-33);		
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[45, 50, 55]); this.sprite.setAnimationOffset(3,-52,-33);	
//UP LEFT		
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[63]); this.sprite.setAnimationOffset(4,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[68, 73, 78, 83]); this.sprite.setAnimationOffset(5,-52,-33);			
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[88, 93, 98, 103]); this.sprite.setAnimationOffset(6,-52,-33);			
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[108, 113, 118]); this.sprite.setAnimationOffset(7,-52,-33);	
//UP RIGHT	
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[1]); this.sprite.setAnimationOffset(8,-52,-33);			
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[6, 11, 16, 21]); this.sprite.setAnimationOffset(9,-52,-33);			
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[26, 31, 36, 41]); this.sprite.setAnimationOffset(10,-52,-33);			
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[46, 51, 56]); this.sprite.setAnimationOffset(11,-52,-33);	
//LEFT	
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[62]); this.sprite.setAnimationOffset(12,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[67, 67, 72, 72, 77, 77, 82, 82]); this.sprite.setAnimationOffset(13,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[87 ,87,92 , 92,97, 97,102, 102]); this.sprite.setAnimationOffset(14,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[107, 112, 117]); this.sprite.setAnimationOffset(15,-52,-33);	
//RIGHT
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[2]); this.sprite.setAnimationOffset(16,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[7 , 7, 12, 12, 17, 17, 22, 22]); this.sprite.setAnimationOffset(17,-52,-33);			
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[27, 27, 32, 32,37, 37,42, 42]); this.sprite.setAnimationOffset(18,-52,-33);			
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[47, 52, 57]); this.sprite.setAnimationOffset(19,-52,-33);
//DOWN
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[4]); this.sprite.setAnimationOffset(20,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[9, 9, 14, 14, 19, 19, 24,24]); this.sprite.setAnimationOffset(21,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[29, 29 , 34, 34, 39, 39, 44, 44]); this.sprite.setAnimationOffset(22,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[49, 54, 59]); this.sprite.setAnimationOffset(23,-52,-33);
//DOWN LEFT
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[61]); this.sprite.setAnimationOffset(24,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[66, 71, 76, 81]); this.sprite.setAnimationOffset(25,-52,-33);			
	this.sprite.buildAnimation(5, 24, 73, 73,0.05,
			[86, 91, 96, 101]); this.sprite.setAnimationOffset(26,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[106, 111, 116]); this.sprite.setAnimationOffset(27,-52,-33);
			
//DOWN RIGHT
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[3]); this.sprite.setAnimationOffset(28,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[8, 13, 18, 23]); this.sprite.setAnimationOffset(29,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[28, 33, 38, 43]); this.sprite.setAnimationOffset(30,-52,-33);
	this.sprite.buildAnimation(5, 24, 73, 73, 0.05,
			[48, 53, 58]); this.sprite.setAnimationOffset(31,-52,-33);


			
//UP = 0;
// UP_LEFT = 1;
// UP_RIGHT = 2;
// LEFT = 3;
// RIGHT = 4;
// DOWN = 5;
// DOWN_LEFT = 6;
// DOWN_RIGHT = 7;
			
	this.direction = UP;
	
	this.position = new Vector2();
	this.position.set( 35*TILE, 56*TILE );
	 
	
	this.width = 76;
	this.height = 88;
	
	this.offset = new Vector2();
	this.offset.set(34,33);
	
	this.velocity = new Vector2();
	
	this.attacking = false;
	
	SetupImageEvents(this, this.image);
};

Enemy.prototype.update = function(dt)
{
	this.sprite.update(dt);
	if(this.pause > 0)
	{
		this.pause -= dt;
	}
	else
	{
		var ddx = 0; // acceleration
		
		var tx = pixelToTile(this.position.x);
		var ty = pixelToTile(this.position.y);
		var nx = (this.position.x)%TILE; // true if enemy overlaps right
		var ny = (this.position.y)%TILE; // true if enemy overlaps below
		var cell = cellAtTileCoord(LAYER_PLATFORMS, tx, ty);
		var cellright = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty);
		var celldown = cellAtTileCoord(LAYER_PLATFORMS, tx, ty + 1);
		var celldiag = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty + 1);
	if(this.moveRight)
		{
			if(celldiag && !cellright) {
			ddx = ddx + ENEMY_ACCEL; // enemy wants to go right
		}
	else 
		{
			this.velocity.x = 0;
			this.moveRight = false;
			this.pause = 0.5;
		}
	}
	if(!this.moveRight)
	{
	if(celldown && !cell) {
		ddx = ddx - ENEMY_ACCEL; // enemy wants to go left
	}
	else 
	{
		this.velocity.x = 0;
		this.moveRight = true;
		this.pause = 0.5;
	}
	}
		this.position.x = Math.floor(this.position.x + (dt * this.velocity.x));
		this.velocity.x = bound(this.velocity.x + (dt * ddx),
-		ENEMY_MAXDX, ENEMY_MAXDX);
	}
}

Enemy.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x, this.position.y);
}
