console.log("Hello world");

const btn = document.getElementsByClassName("team__btn");

// Function assigning click events to buttons on about page
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    let front = e.target.closest("div").firstElementChild;
    let back = e.target.closest("div").children[1];

    // Assign Image Variable
    if (e.target.nodeName !== "IMG") {
      img = e.target.firstElementChild;
    } else {
      img = e.target;
    }

    // Flip Card
    front.classList.toggle("hide");
    back.classList.toggle("hide");

    // Change Button Image
    if (front.classList.contains("hide")) {
      img.src = "./assets/icon-close.svg";
    } else {
      img.src = "./assets/icon-cross.svg";
    }
  });
}
