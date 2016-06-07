var Player = function() {
	this.image = document.createElement("img");
	this.sprite = new Sprite("hero1.png");
	this.sprite.buildAnimation(16, 3, 76, 88, 0.05,
			[41]);
	this.sprite.buildAnimation(16, 3, 76, 88, 0.05,
			[43]);
	this.sprite.buildAnimation(16, 3, 76, 88, 0.05,
			[16,17,18,19,20,21,22,23]);
	this.sprite.buildAnimation(16, 3, 76, 88, 0.05,
			[36]);
	this.sprite.buildAnimation(16, 3, 76, 88, 0.05,
			[42]);
	this.sprite.buildAnimation(16, 3, 76, 88, 0.05,
			[0,1,2,3,4,5,6,7]);
	

	this.position = new Vector2();
	this.position.set( 1*TILE, 9*TILE );
	 
	
	this.width = 76;
	this.height = 88;
	
	this.offset = new Vector2();
	this.offset.set(10,-35);
	
	this.velocity = new Vector2();
	
	SetupImageEvents(this, this.image);
};

Player.prototype.update = function(deltaTime)
{
	this.sprite.update(deltaTime);
	
	if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
	{
		this.position.y -= 1;
	}
	if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
	{
		this.position.y += 1;
	}
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
	{
		this.position.x -= 1;
	}
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
	{
		this.position.x += 1;
	}

}

Player.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x, this.position.y);
}