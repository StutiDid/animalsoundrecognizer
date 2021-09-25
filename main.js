function Start(){
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/smyECHIzq/model.json', { probabilityThreshold: 0.7 } ,modelReady);
    
}
function modelReady() {
    classifier.classify(gotResults);
}
var dog=0;
var cat=0;
var lion=0;
var owl=0;
function gotResults(error, results)  {
    if(error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1 ;
        random_number_g = Math.floor(Math.random()* 255) + 1 ;
        random_number_b = Math.floor(Math.random() *255) + 1 ; 


        document.getElementById("result-label").innerHTML ='I can hear - '+ results[0].label;
        document.getElementById("result-count").innerHTML = 'Accuracy - '+(results[0].confidence*100) .toFixed(2)+ "%";
        document.getElementById("result-count").style.color ="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result-label").style.color ="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
     
        
        img= document.getElementById('animal-image');
    if (results[0].label=="barking"){
        img.src='dog.gif';
        dog= dog+1;
    }

    else if(results[0].label=="meowing"){
        img.src='cat.gif';
        cat= cat+1;
    }

    else if(results[0].label=="roaring"){
        img.src='lion.gif';
        lion= lion+1;
    }
    else if(results[0].label=="owling"){
        img.src='owl.gif';
        owl= owl+1;
    }
    else {
        img.src= '123.gif';
    }
}

}