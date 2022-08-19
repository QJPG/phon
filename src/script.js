var Game = {}

function SetupGame()
{
	//setip game object

	Game.ESTATE_SPLASH = 0
	Game.ESTATE_MENU = 1

	Game.name = "Game Name"
	Game.version = "0.0.1"
	Game.author = "asciidea"
	Game.images = new Array(255)

	Game.estate = Game.ESTATE_SPLASH
	Game.framesPerSecs = 128.0
	Game.fadeScale = 0.0
	Game.splashTime = 3

	setTimeout(function(){
		Game.fadeScale = 1.0
		Game.estate = Game.ESTATE_MENU
	}, 1000 * Game.splashTime)

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

	createCanvas(720, 640)
}

function draw()
{
	//draw func

	if (Game.fadeScale > 0.0)
	{
		Game.fadeScale -= 0.05
	}

	background(0)

	if (Game.estate === Game.ESTATE_SPLASH)
	{
		//On Estate Splash
	}

	push()
	fill(255, 255, 255, 255 * Game.fadeScale)
	rect(0, 0, width, height)
	pop()

	push()
	fill(255)
	text(getFrameRate().toString(), 10, 10)
	pop()
}
