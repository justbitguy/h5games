var zhLocale = "zh"; 
var enLocale = "en"; 
var zhTitle = "一个都不能死";
var enTitle = "No body Can Die";

// http://hostname/ontheline?lang=en
// http://hostname/ontheline?lang=zh
var QueryString = function() {
	// This function is anonymous, is executed immediately and 
	// the return value is assigned to QueryString!
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		// If first entry with this name
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = decodeURIComponent(pair[1]);
			// If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
			query_string[pair[0]] = arr;
			// If third or later entry with this name
		} else {
			query_string[pair[0]].push(decodeURIComponent(pair[1]));
		}
	}
	return query_string;
}();

var GameLang = function() {
	var language = "en";
	var queryLang = QueryString["lang"];
	if (queryLang != ""){
		language = queryLang; 
	}
	return language;
}();

var isEnLocale = function(){
	return GameLang == enLocale;
}

var isZhLocale = function(){
	return GameLang == zhLocale;
}

var GameConfig = window.GameConfig || {}; 

var GAME_TEXT = {
	startGame : isEnLocale() ? "Start Game" : "开始游戏",
	more      : isEnLocale() ? "" : "",
	returnGame: isEnLocale() ? "Return" : "返回",
	myScore   : isEnLocale() ? "Score"  : "我的成绩",
	bestScore : isEnLocale() ? "Best: "   : "最佳: ",
	seconds   : isEnLocale() ? "s" : "秒",
	newRecord : isEnLocale() ? "New Record" : "新纪录",
	nightmare : isEnLocale() ? "Nightmare"  : "噩梦模式",
	hellMode  : isEnLocale() ? "Hell Mode"  : "地狱模式",
	purgatory : isEnLocale() ? "Purgatory Mode" : "炼狱模式",
	showoff   : isEnLocale() ? "" : ""
};

var POS_OFFSET = {
	startButton : {
		yOffset : 100
	},
	returnButton : {
		xOffset : 70
	}
}; 

var SIZE_DELTA = {
	returnButton : {
		widthDelta : 50
	}
};

document.title = function(){
	if (isZhLocale()){
		return zhTitle;
	} else {
		return enTitle;
	}
}();