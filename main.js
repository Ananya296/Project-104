Webcam.set({
  height : 300,
  width : 350,
  image_format : 'png',
  png_quality : 1000
})

camera = document.getElementById("camera");
 
Webcam.attach( '#camera' );

function captureImg()
{
    Webcam.snap(function(data_uri){
        document.getElementById("captured_image").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zfBdtuoyr/model.json", modelLoaded);

function modelLoaded()
{
    console.log("model Loaded");
}