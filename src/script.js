var Game = {}

function SETUP_Game()
{
	//setip game object

	Game.name = "Game Name"
	Game.version = '1.0.0'
	Game.images = new Array(255)

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

	background(0)
}
