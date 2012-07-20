var MovableImage = function(controller){
	this.myImage = Titanium.UI.createImageView({
		height:200,
		width:200,
		zIndex: 1
	});

	var matrix = Titanium.UI.create2DMatrix(), curX, curY, tempmatrix, touchStart;
	var thisImageView = this.myImage;
	var pinching = false;
	tempmatrix = Ti.UI.create2DMatrix();

	this.myImage.addEventListener('touchstart', function(e){
	    curX = e.x;
	    curY = e.y;
	    
	    controller.setStackingOrder(thisImageView);
	});

	 this.myImage.addEventListener('touchend', function(e){
		pinching = false;
	});


	this.myImage.addEventListener('touchmove', function(e){

		if(pinching === false){
		    var deltaX = e.x - curX
		    var deltaY = e.y - curY;
		    matrix = matrix.translate(deltaX, deltaY);

		    thisImageView.animate({
		         transform : matrix,
		        duration : 10
	    	})
	    }
	});
	this.myImage.addEventListener('pinch', function(e){
		pinching = true;
		matrix = tempmatrix.scale(e.scale);
		thisImageView.animate({
			 transform: matrix, 
			 duration: 125
		 });
	});

}
MovableImage.prototype.getMyImage=function(){
	return this.myImage;
}
MovableImage.prototype.setMyImage=function(animage){
	this.myImage.image = animage;
}

module.exports = MovableImage;