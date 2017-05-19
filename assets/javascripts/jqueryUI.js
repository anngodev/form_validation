$("#draggable").draggable({axis: "y"});
$( "span" ).draggable({ containment: "parent" });
$("#resizable").resizable({
	grid: 50,
	alsoResize: "#also",
	resize: function(event, ui) {
		if ($("#resizable").width() > 300) {
			alert("big enough");
		}
	}

});
	$("#also").resizable();