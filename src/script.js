var Game = {}

function SetupGame()
{
	//setip game object

	Game.ESTATE_SPLASH = 0

	Game.name = "Game Name"
	Game.version = "0.0.1"
	Game.author = "asciidea"
	Game.images = new Array(255)

	Game.estate = Game.ESTATE_SPLASH
	Game.framesPerSecs = 128.0

	frameRate(Game.framesPerSecs)
}

function preload()
{
	//preload func
}

function setup()
{
	//setup func

	SetupGame()

	createCanvas(windowWidth, windowHeight - 8)
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
