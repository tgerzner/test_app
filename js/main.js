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

//Get Photo
function getPhoto(source){
    navigator.camera.getPicture(onPhotoURISuccess,onError,{
        quality:50,
        destinationType: destinationType.FILE_URL,
        sourceType: source
    });
}

//If we capture a photo
function onPhotoDataSuccess(imageData){
    var dataImage = document.getElementById('dataImage');
    dataImage.style.display = 'block';

    dataImage.src= "data:image/jpeg;base64," + imageData;
}

//If we get an image
function onPhotoURISuccess(imageURI){
    var uriImage = document.getElementById('dataImage');
    uriImage.style.display = 'block';

    uriImage.src= imageURI;
}

//Handle Errors
function onError(error){
    alert("Error: " + error);
}