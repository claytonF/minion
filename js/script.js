// what do I want to do
// 1. Identify the area that will track mouse movement
// 2. Identify area that will constrain movement (eye)
// 3. identify the element that I want to move (pupil)
// 4. do some maths to link the top and left positions of the pupil to the mouse position
//$(document).on("ready", function(){

//(function(){

var mouseTrack = {
	init: function(){
		this.cacheDom();
		this.trackMouse();
	},
	cacheDom: function() {
		this.$container = $(".container");
		this.$eye = $(".eye");
		this.$pupil = $(".pupil")
	},
	trackMouse: function(){
		var pupil = this.$pupil;
		var width = this.$container.width();
		var height = this.$container.height();
		var pupilTop = this.$pupil.css("top");
		var pupilLeft = this.$pupil.css("left");
		this.$container.mousemove(function(event){
			var x = event.clientX;
			var y = event.clientY;
			xPos = Math.min(Math.max(20, Math.round((x / width)*100)),80),
			yPos = Math.min(Math.max(20, Math.round((y / height)*100)),80);
			for (i = 0; i<pupil.length; i ++) {
				$(pupil[i]).css({"top": yPos + "%"});
				$(pupil[i]).css({"left": xPos + "%"});
			}					
		});
		
	},
};
mouseTrack.init();
//})();

//})



