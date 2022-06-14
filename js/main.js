	// // Page loading animation
    // $(window).on('load', function() {

    //     $('#js-preloader').addClass('loaded');

    // });

// let preloader = document.querySelector(js-preloader);
//     window.onload = function(){
//         preloader.addClass(loaded)
//     };

    // let words = ["Website", "Applacition", "System"];
    // let theWord = document.querySelector["em"]

    // // function random(){
    // //     // randomWord.Math.random(word);
    // //     let randomWord = words[Math.floor(Math.random() * words.length)];
    // // }

    // function geWords(){
    //     // Get Random Word From Array
    //     let randomWord = words[Math.floor(Math.random() * words.length)];
    //    // Get Word Index
    //     let wordIndex = words.indexOf(randomWord);
    //     // Show The Random Word
    //     theWord.innerHTML = randomWord;
    // }

    // function startPlay() {
    //     let start = setInterval(() => {
    //         geWords
    //     },1000)
    // }

    // window.onload = () => {
    //     startPlay()
    // }

    let head = document.getElementById("header");

window.onscroll = function () {
  if (window.scrollY >= 300) {
     head.style.position ="fixed";
     head.style.zIndex ="99";
     head.style.boxShadow ="0px 0px 15px var(--black)";
     head.style.height ="80px";
     head.style.backgroundColor ="var(--white)";
  }else{
      head.style.position ="relative";
      head.style.boxShadow ="0 0 0 0";
      head.style.height ="100px";
      head.style.backgroundColor ="var(--white)";
  }
};

// btn.onclick = function () {
//   window.scrollTo(0, 0, "smooth")
// };

let icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("thame-dark");
    if(document.body.classList.contains("thame-dark")){
        icon.src = "images/sun-icon.png"
    }else{
        icon.src = "images/moon-icon.png"
    }
}

let menu = document.getElementById("menu");
let header = document.getElementById("header");
let navbar = document.getElementById("main-nav");

menu.onclick = function () {
    header.classList.toggle("head");
    if(header.classList.contains("head")){
        menu.src = "images/close_icon.png";
        navbar.style.display ="block"
    }else{
        menu.src = "images/menu.png"
        navbar.style.display ="none"
    }
}