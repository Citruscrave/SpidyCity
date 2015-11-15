#pragma strict

var music : AudioSource;

function QuitGame(){
	Debug.Log ("Game is exiting...");
	Application.Quit();
}

function StartGame(){
	Application.LoadLevel ("DarkCity");
}

function SetGameVolume (vol : float){
	music.volume = vol;
}