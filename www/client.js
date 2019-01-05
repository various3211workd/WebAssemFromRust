
//イベントとコールバックの定義
var socket = io.connect("http://localhost:30000");

socket.on("connected", function(name){});
socket.on("publish", function(data){ addMessage(data.value);});
socket.on("add", function(num){ add(num); });
socket.on("disconnect", function(){});

var msgArea = document.querySelector("#msg");
var myName = Math.floor(Math.random()*100) + "さん";
addMessage("貴方は" + myName + "として入室しました");
start(myName);

// チャットアプリのサーバ側に接続する
function start(name){
	socket.emit("connected", name);
}

// メッセージの送信
function publishMessage(){
	var textInput = document.querySelector("#msg_input");
	var msg = "[" + myName + "] " + textInput.value;
	socket.emit("publish", {value: msg});
	textInput.value = "";
}

// 自身の送信時やサーバ側から受信した際のメッセージを表示する
function addMessage(msg){
	var domMsg = document.createElement("div");
	domMsg.innerHTML = new Date().toLocaleTimeString() + " " + msg;
	msgArea.appendChild(domMsg);
}
