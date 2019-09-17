
//changes picture when clicked
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

// pop up message when h2 is clicked
let header = document.querySelector('h2');
header.textContent = "Click me!"
header.onclick = function() {
    alert("Mozilla is cool")
} 

// displays user name in h1
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Welcome, ' + myName + '!';
    }
  }

  myButton.onclick = function() {
    setUserName();
  }

