let btn = document.getElementById('cat')
let modalPic = document.getElementById('modal_pic')
let modal = document.getElementById('myModal')
let span = document.getElementsByClassName('close')[0]
let catAudio = new Audio('audio/meow.wav')


function getRandomNumberForKittenAPI() {
  let suitableNumber = Math.floor(Math.random() * 15) + 1;
  return suitableNumber;
}


function displayKitten() {
  catAudio.currentTime = 0;
  
  catAudio.play()

  modalPic.innerHTML = ''
  const catPic = document.getElementById('cat-pic')  
  let catImage = document.createElement('img')
  catImage.src = `https://placekitten.com/200/300?image=${getRandomNumberForKittenAPI()}`
  modalPic.appendChild(catImage)

}

btn.onclick = function() {
  modal.style.display = 'block'
  displayKitten()
}

span.onclick = function() {
  modal.style.display = 'none'
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}  

let audio = new Audio("resources/ohh.mp4") 
audio.volume = 0.02 

insult = async () => {    
  document.getElementById("insultDiv").innerHTML = "" 

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";
  fetch(proxyurl + url)
      .then(response => response.json())
      .then(contents => { 
          h5 = document.createElement("H5");
          pText = document.createTextNode(decodeHtml(contents.insult))  
          h5.appendChild(pText)  

          h5.style.padding = "1.2rem"

          document.getElementById("insultDiv").appendChild(h5)   
          
          audio.play() 

          setTimeout(function(){
              document.getElementById("insultDiv").innerHTML = "";
      },5000); 
      })
      .catch(() => { 
          h5 = document.createElement("H5");
          pText = document.createTextNode("You've been insulted enough")  
          h5.appendChild(pText)  

          h5.style.padding = "1.2rem"

          document.getElementById("insultDiv").appendChild(h5)  
          
          audio.play() 

          setTimeout(function(){
              document.getElementById("insultDiv").innerHTML = "";
      },5000); 
  }) 
}  

document.getElementById("insult").addEventListener("click",insult) 