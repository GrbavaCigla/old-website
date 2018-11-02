var states=[];
for (i = 0; i < document.getElementsByClassName('checkbox').length; i++) {
	//#region Adding Circle
	var div = document.getElementsByClassName('checkbox');
	var child = document.createElement("div");
	child.className += "circle";
	div[i].appendChild(child);
	//#endregion

	//#region Adding Text
	// var pleft = document.createElement("p");
	// pleft.append(document.createTextNode("ON"));
	// var pright = document.createElement("p");
	// pright.append(document.createTextNode("OFF"));
	

	// pleft.className = "text-left";
	// pright.className = "text-right";
	// div[i].appendChild(pleft);
	// div[i].appendChild(pright);
	//#endregion

	//#region onClickConf
	var event = document.createAttribute("onClick");
	event.value = "toggle("+i+");";
	div[i].setAttributeNode(event);
	states.push(0);
	//#endregion

	//#region Styling
	div[i].setAttribute("style","height:"+div[i].clientWidth/2+"px;"+"border-radius:"+div[i].clientWidth/4+"px");
	//#endregion
}
var c = document.getElementsByClassName('checkbox')[i].children[0];
function toggle(i){
	
	if(states[i]==0){
		c.style.left="50%";
		c.style.backgroundImage="linear-gradient(45deg,#82b74b,#405d27)";
		states[i]=1;
	}else{
		c.style.left="0%";
		c.style.backgroundImage="linear-gradient(45deg,#008EDC,#D30F64)";
		states[i]=0;
	}
}