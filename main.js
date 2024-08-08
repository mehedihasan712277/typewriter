const texts = ["first text", "second text", "third text"];
const speed = 100; // typing speed in milliseconds
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const typewriterText = document.getElementById("typewriter-text");
    const currentText = texts[textIndex];

    if (!isDeleting && charIndex < currentText.length) {
        typewriterText.innerHTML += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
    } else if (isDeleting && charIndex > 0) {
        typewriterText.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, speed);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            textIndex = (textIndex + 1) % texts.length;
        }
        setTimeout(type, speed);
    }
}

window.onload = type;
