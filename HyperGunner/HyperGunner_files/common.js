var NativeMsg = {
	gameOver : 2
}

// send message to webiew.
var sendToNative = function(msgType, jsonObj){
	var msg = msgType.toString(); 
	if (jsonObj != "" && typeof jsonObj != "undefined" && jsonObj != null){
		msg += "#" + JSON.stringify(jsonObj); 
	}
	console.log("msg:" + msg);
	alert(msg);
}

var sendGameOverToNative = function(jsonObj){
	sendToNative(NativeMsg.gameOver, jsonObj);
}

var gameObserver = {
	onGameStart : function(f, v){
		f(v);
	}, 
	onGameOver : function(f, v){
		f(v);
	}
};
