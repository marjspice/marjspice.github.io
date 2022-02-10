// When the page is loaded, a "Hello" message is alerted on screen

function alertUser(msg) {alert(msg);
}

// A "learn more" button, when clicked shows a paragraph of text

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Learn Less") {
    readMoreBtn.innerText = "Learn More";
  } else {
    readMoreBtn.innerText = "Learn Less";
  }
});


// Moving an element fom one side of the screen to the other

let circle = document.querySelector('.circle');
let moveBy = 30;
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 25;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
    }
});

// An input box which asks for a name and prints out "Greetings,____ where the ____ is the inputed name"

document.querySelector("input[type='button']").addEventListener("click", greeting);

let input = document.querySelector("input");
let output = document.querySelector("h4");

function greeting() {
    output.textContent = "Greetings," + input.value ;
}

// Changing the color of text on the screen every 30 seconds

var j=0;

function divchange ()
{ var divtag=document.getElementById("div1");
  var txtcolor= ["pink", "#E6D8D6", "#e2abf0"];
  divtag.style.color=txtcolor[j];
  j=(j+1) % txtcolor.length;
  }
setInterval(divchange,30000);

var j=0;



