
var CanvasController = function(win){
	this.imagearray=[];
	var thisimagearray = this.imagearray;
	var maxZ = 10;
	this.win = win;
	var importbutton = Ti.UI.createButton(
	{
		title: 'import',
		bottom: 0,
		height: 45,
		width: Ti.UI.SIZE,
		style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
		zindex: 2000
	}
);
importbutton.addEventListener('click', function(e){ Titanium.Media.openPhotoGallery({

	success:function(event)
	{
		var cropRect = event.cropRect;
		var image = event.media;
		var tempmovableimage = new app.MovableImage(tempcanvascontroller);

		// set image view
		Ti.API.debug('Our type was: '+event.mediaType);
		if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
		{
			
			tempmovableimage.setMyImage(image);
			
			tempcanvascontroller.addImage(tempmovableimage.getMyImage());
			mainwin.add(tempmovableimage.getMyImage());
			tempmovableimage.getMyImage().animate({zIndex: maxZ});
		}
		else
		{
			// is this necessary?
		}

		Titanium.API.info('PHOTO GALLERY SUCCESS cropRect.x ' + cropRect.x + ' cropRect.y ' + cropRect.y  + ' cropRect.height ' + cropRect.height + ' cropRect.width ' + cropRect.width);

	},
	cancel:function()
	{

	},
	error:function(error)
	{
	},
	allowEditing:true,

	mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
});
});



win.add(importbutton);

	
	this.addImage = function(img){
		this.imagearray.push(img);
		
	}
	this.getImageArray = function(){
		
		return this.imagearray;
	}
	
	this.printStuff=function(imgview){
		Ti.API.info('src ' + imgview);
		Ti.API.info('ary ' + thisimagearray[0]	);
		Ti.API.info('ary ' + Object(thisimagearray[0])	);
		Ti.API.info(thisimagearray[0] === imgview);
		Ti.API.info(thisimagearray[0] == imgview);
		Ti.API.info('dat ' + e.data	);
	};
	this.setStackingOrder=function(imgview){

		maxZ+=2;
		imgview.animate({zIndex: (maxZ-1)});
		importbutton.animate({zIndex: maxZ});
		
	};
	
	
}


module.exports = CanvasController;