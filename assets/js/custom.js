/*
  ____            _       ____  _                       
 | __ ) _ __ __ _(_)_ __ / ___|| |_ ___  _ __ _ __ ___  
 |  _ \| '__/ _` | | '_ \\___ \| __/ _ \| '__| '_ ` _ \ 
 | |_) | | | (_| | | | | |___) | || (_) | |  | | | | | |
 |____/|_|  \__,_|_|_| |_|____/ \__\___/|_|  |_| |_| |_|
                                                        
*/
// Konami code
const onKonamiCode = (cb) => { //https://stackoverflow.com/a/45576888
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', (e) => {
    input += ("" + e.keyCode);
    if (input === key) return cb();
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

// Easter Egg
onKonamiCode(() => {
  var uwu = new Audio('assets/audio/contra.ogg');
  uwu.play();
  alert("Secret Konami Code Activated, click ok to enable contra mode");
  document.body.style.background = "url('assets/img/contrab.jpg')";
  document.body.style.color = "white";
  document.title = "Konami Code Activated";
  document.getElementById("icon").src = "assets/img/contra.gif";
  document.getElementById("titletext").innerHTML = "Contra :3";
  document.getElementById("e").innerHTML = "Site Made by BrainStorm! Donate to me click <a href='https://paypal.me/brainstorm07' target=_blank'>here</a>!";
  document.getElementById("o").innerHTML = "The page will automatically refresh once the song is over!"
  document.getElementById("uwu").style.display = "none";
  uwu.onended = () => { location.reload(); };
});

// Wallpapers
const getCurrentSeason = () => { 
  var now = new Date();
  var currentYear = now.getFullYear();
  
  if (now < new Date(currentYear, 2, 1))  return 'winter';
  if (now < new Date(currentYear, 5, 1))  return 'spring';
  if (now < new Date(currentYear, 8, 1))  return 'summer';
  if (now < new Date(currentYear, 11, 1)) return 'autumn';
  return 'winter';
}

switch (getCurrentSeason()) { 
  case 'winter':
    document.body.style.background = "url('assets/img/seasons/winter.jpg')";
    break;
  case 'spring':
    document.body.style.background = "url('assets/img/seasons/spring.jpg')";
    break;
  case 'summer':
    document.body.style.background = "url('assets/img/seasons/summer.jpg')";
    break;
  case 'autumn':
    document.body.style.background = "url('assets/img/seasons/autumn.jpg')";
    document.getElementById("titletext").setAttribute("style", "color: white !important;");
    document.getElementById("gang").setAttribute("style", "color: white !important;");
    break;
}
