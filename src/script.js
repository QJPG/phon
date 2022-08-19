var Game = {}

function SETUP_Game()
{
	//setip game object

	Game.ESTATE_SPLASH = 0

	Game.name = "Game Name"
	Game.version = "0.0.1"
	Game.author = "asciidea"
	Game.images = new Array(255)

	Game.estate = Game.ESTATE_SPLASH
	Game.framesPerSecs = 128.0
}

function preload()
{
	//preload func
}

function setup()
{
	//setup func

	SETUP_Game()

	createCanvas(windowWidth, windowHeight)
}

function draw()
{
	//draw func

	background(55)

	if (Game.estate === Game.ESTATE_SPLASH)
	{
		//On Estate Splash
	}

	push()
	fill(255)
	text(getFrameRate().toString(), 10, 10)
	pop()
}
