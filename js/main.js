var pictureSource;
var destinationType;

// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

//Capture Photo
function takePhoto(){
    navigator.camera.getPicture(onPhotoDataSuccess,onError,{
        quality:50,
        destinationType: destinationType.DATA_URL
    });
}



//If we capture a photo
function onPhotoDataSuccess(imageData){
    var dataImage = document.getElementById('dataImage');
    dataImage.style.display = 'block';

    dataImage.src= "data:image/jpeg;base64," + imageData;
}



