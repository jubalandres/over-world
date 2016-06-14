var UP = 0;
var DOWN = 1;
var UP_LEFT = 2;
var DOWN_LEFT = 3;
var DOWN_RIGHT = 4;
var UP_RIGHT = 5;
var LEFT = 6;
var RIGHT = 7;

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


var Player = function() {
	this.image = document.createElement("img");
	this.sprite = new Sprite("saxon_swordsman.png");
	this.sprite.buildAnimation(5, 12, 68, 66, 0.05,
			[4]); this.sprite.setAnimationOffset(0,-52,-33);
	this.sprite.buildAnimation(5, 12, 68, 66, 0.05,
			[4]); this.sprite.setAnimationOffset(0,-52,-33);
	

	this.position = new Vector2();
	this.position.set( 35*TILE, 56*TILE );
	 
	
	this.width = 76;
	this.height = 88;
	
	this.offset = new Vector2();
	this.offset.set(34,33);
	
	this.velocity = new Vector2();
	
	SetupImageEvents(this, this.image);
};

Player.prototype.update = function(deltaTime)
{
	this.sprite.update(deltaTime);
	
	if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
	{
		this.position.y -= 2;
	}
	if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
	{
		this.position.y += 2;
	}
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
	{
		this.position.x -= 2;
	}
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
	{
		this.position.x += 2;
	}

}

Player.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x, this.position.y);
}