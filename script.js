/* Iteration 4: Make the Everything Work */
//<!-- Ironman - background, helmet, eyes, face-plate  -->
const background =document.getElementById("background");
const buttonbackground =document.getElementById("button-background");

buttonbackground.oninput=()=>{
 background.style.fill=buttonbackground.value;
}
const helmet =document.getElementById("helmet");
const buttonhelmet =document.getElementById("buttonhelmet");

buttonhelmet.oninput=()=>{
  helmet.style.fill=buttonhelmet.value;
}
const eyes =document.getElementById("eyes");
const buttoneyes =document.getElementById("buttoneyes");

buttoneyes.oninput=()=>{
  eyes.style.fill=buttoneyes.value;
}
const faceplate =document.getElementById("face-plate");
const buttonfaceplate =document.getElementById("buttonfaceplate");

buttonfaceplate.oninput=()=>{
  faceplate.style.fill=buttonfaceplate.value;
}



