/*the value of drumButtons is all element's with class drum*/
let drumButtons = document.querySelectorAll(".drum");
/*i to 0 to current lenght of  array numberOfDrumButtons and it grows with each iteration by 1
* select all elements with class drum and save the calculated i at the i index, and add an event listener
* anonymous function will work, when the button with class drum on the screen is clicked, and the execution of the function body will be called,
* specifically, when equal a text value of carent element to variable buttonTextContent, and called function makeSound and
* equal key text content of current element*/
let textContent = "";
for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        let buttonTextContent = this.textContent;
        makeSound(buttonTextContent);
        buttonAnimation(buttonTextContent);
        }
    );
}
/*adding event listener to all elements in the document keydown type, waiting for a pressed from the keyboard, and execute anonymous function, when a key is pressed,
which has a parameter е, and execute the function body, and it calls another function makeSound and value of parameter
now give a object(which browser creates and save it on argument е) and apply to the object property key,
in this way we get the letter or word of key that the user pressed on the keyboard*/
document.addEventListener("keydown", function(e) {
    let key = e.key.toLowerCase();
    makeSound(key);
    buttonAnimation(key);
});
/*creating a function makeSound, that accepts parameter key, it can be, or the lines 9-12, or the lines 19-21, depending on which
key they user pressed on the keyboard or the screen, and the browser processes this and writes the parameter value into the switch,
the same key, the same as in makeSound, it takes value from key and perform cases, for example, if it is a w, created new object tom1,
using the new operator and the Audio constructor function, specify the file path, and we call the created object tom1 with method play()*/
function makeSound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "l":
            let kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;

        default:
            console.log("This isn't a button");
    }
}
/*in the currentKey saves the text value of the button, which we got it from the loop for, or from event listener, when pressed the key from keyboard
* in the variable activeButton assigns the  selected current class using "." + currentKey, this is why the switch isn't needed,
* adding class of css pressed with the styles already defined, and applying method setTimeout, which takes 2 parameters, specifically the number of seconds
* which it is will be executed 1 parameter - anonymous function, which remove css class pressed*/
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}