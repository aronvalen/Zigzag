let passcode = "120123"; // Replace with your passcode
let slideIndex = 0;
let slides = ["img1.jpg", "img2.jpg", "img3.jpg"]; // Add paths to your images
let slideshowInterval;

function unlock() {
  const input = document.getElementById("passcode").value;
  if (input === passcode) {
    document.getElementById("passcode-lock").style.display = "none";
    document.getElementById("content").style.display = "block";
    startSlideshow();
  } else {
    alert("Wrong passcode!");
  }
}

function startSlideshow() {
  slideshowInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    document.getElementById("slide").src = slides[slideIndex];
  }, 3000); // Change slide every 3 seconds
}

function sayNo() {
  document.getElementById("no").style.display = "none";
  document.getElementById("yes").style.transform = "scale(1.5)";
}

function sayYes() {
  document.getElementById("invitation").style.display = "none";
  document.getElementById("final-message").style.display = "block";
}
