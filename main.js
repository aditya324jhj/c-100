var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

console.log(event);

var Content = event.results[0][0].transcript;
console.log(Content);

document.getElementById("textbox").innerHTML = Content;

if(Content =="take my selfie")
{
    console.log("taking selfie --- ");
    speak();

}
else {
    read();
}
}
function speak(){
    var synth = window.speechSynthesis;
   
    speak_data = "Taking your selfie in 5 seconds";
    
    var utterThis =new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
        Webcam.attach(camera);

        setTimeout(function()
        {
            take_snapshot();
save();
        }, 5000);
}
function save()
{
    link =document.getElementById("link");
    image =document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}
Webcam.set({
    width:360,
    height:250,
    image_format : 'txt',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    }
    )
}
function read() {
    read2 = document.getElementById("textbox").value;
    console.log("read2");
    var synth = window.speechSynthesis;
    var utterThis =new SpeechSynthesisUtterance(read2);
    synth.speak(utterThis);
}