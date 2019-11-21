var myVideo = document.getElementById("video");

console.log(myVideo);

function play(){
	myVideo.play();
}
function pause(){
	myVideo.pause();
}

function stop(){
	myVideo.pause();
	myVideo.currentTime = 0;
	
}

