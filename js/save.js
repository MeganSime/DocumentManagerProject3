function loadSettings(){	
	$("#name").val(localStorage.name);
	$("#email").val(localStorage.email);
	$("#telephone").val(localStorage.telephone);
	$("#other").val(localStorage.other)
}

function saveSettings(){
	localStorage.name = $('#name').val();	
	localStorage.email = $("#email").val();
	localStorage.telephone = $("#telephone").val();
	localStorage.other = $("#other").val();
	
	return false;
}

document.addEventListener("DOMContentLoaded",function(){
	var t = document.getElementById("job");
	if (localStorage["job"]) {
		t.value = localStorage["job"]
	}
	t.onchange = function() {
		localStorage["job"] = this.value
	}
});

document.addEventListener("DOMContentLoaded", function() {
	$.jStorage.set("notifications",$(".notifications").prop("checked")).value;
	$(".notifications").prop("checked",$.jStorage.get("notifications").value)
});

$(document).ready( function() {
	$('settings.html form[name = "MainForm"]').submit(saveSettings);
	$("settings.html").bind("pageAnimationStart",loadSettings)
});

$( function() {
	function t(e){$(e).attr("checked",true);
		$(e).css("left","0")
	}
	function n(e){
		$(e).attr("checked",false);
		$(e).css("left","-55px")
	}
	$("span.toggle input").toggle(function(){
		localStorage.checkboxIsOn="true";
		t(this)},function(){
			localStorage.checkboxIsOn="false";
			n(this)
		});

		var e=localStorage.checkboxIsOn;

		if(e=="true"){
			t("span.toggle input")
		}else if(e=="false"){
			n("span.toggle input")

		}
})
