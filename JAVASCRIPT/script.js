//LocalStorage for Feedback page start

function submitted() {
  let name = document.getElementById("_name").value;
  let email = document.getElementById("_email").value;
  let message = document.getElementById("_textarea").value;

  if (name == "" || email == "" || message == "") {
  } else {
    alert("Thanks for your Feeback");
  }

  localStorage.setItem("Name", name);
  localStorage.setItem("Email", email);
  localStorage.setItem("Feedback", message);

  localStorage.getItem("Name");
  localStorage.getItem("Email");
  localStorage.getItem("Feedback");
}

//LocalStorage for Feedback page End

//LocalStorage for Contact us page start

function M_submit() {
  let u_name = document.getElementById("u_name").value;
  let u_email = document.getElementById("u_email").value;
  let u_message = document.getElementById("u_message").value;

  if (u_name == "" || u_email == "" || u_message == "") {
  } else {
    alert("Your message has been recorded, We will get back you soon");
  }

  localStorage.setItem("Name", u_name);
  localStorage.setItem("Email", u_email);
  localStorage.setItem("Message", u_message);

  localStorage.getItem("Name");
  localStorage.getItem("Email");
  localStorage.getItem("Message");
}

//LocalStorage for Contact us page End

//Condition for subscribe code start
function subscribe() {
  let email = document.getElementById("sub_email").value;
  if (email == "") {
  } else {
    alert("Thanks for subscribe!");
    document.getElementById("sub_email").value = "";
  }
}
//Condition for subscribe code End

//ScrolltoTop start

function toggleScrollButton() {
  const ScrolltoTop = document.getElementById("scroll-top");
  if (window.scrollY >= 200) {
    ScrolltoTop.style.display = "block";
    ScrolltoTop.style.transition = " 1s";
  } else {
    ScrolltoTop.style.display = "none";
  }
}
function scrolltop() {
  window.scroll(0, 0);
}

//ScrolltoTop End

// About section Readmore/Readless Start

function show() {
  let para = document.getElementById("about-text2");
  let read = document.getElementById("readmore");
  if (para.style.display == "none") {
    para.style.display = "block";
    read.innerHTML = "Read less";
  } else {
    para.style.display = "none";
    read.innerHTML = "Read More";
  }
}

// About section Readmore/Readless End

// typed js code start

const type = new Typed(".auto-type", {
  strings: ["Monuments"],
  typeSpeed: 150,
  backSpeed: 150,
  smartBackspace: true,
  loop: true,
  showCursor: false,
});

// typed js code End

//User help prompt start

function gethelp() {
  setTimeout(function () {
    let set = prompt("How we can help you, Feel free to ask?");
    if (set) {
      alert("Your message has been recorded, We will get back you soon");
    } else {
    }
    localStorage.setItem("User_Help", set);
    localStorage.getItem("User_Help");
  }, 5000);
}

//User help prompt End

//Navbar Scroll Background Jquery code start
$(window).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $(".container-fluid").css("background", "#0a131d");
      $(".container-fluid").css("transition", "0.40s");
    } else {
      $(".container-fluid").css("background", "transparent");
    }
  });
});
//Navbar Scroll Background Jquery code End

// For searching filter start
function search() {
  let search = document.getElementById("search").value;

  if (search == "east" || search == "East" || search == "EAST") {
    window.location.href = "index.html#explore-history";
    document.getElementById("search").value = "";
  } else if (search == "west" || search == "West" || search == "WEST") {
    window.location.href = "index.html#explore-history";
    document.getElementById("search").value = "";
  } else if (search == "North" || search == "NORTH" || search == "north") {
    window.location.href = "index.html#explore-history";
    document.getElementById("search").value = "";
  } else if (search == "South" || search == "south" || search == "SOUTH") {
    window.location.href = "index.html#mascat";
    document.getElementById("search").value = "";
  } else {
    alert("No historical monument found, please try different search term!");
    document.getElementById("search").value = "";
  }
}

// For searching filter End

// Add like feature in Gallery images start

let icon = document.getElementById("heart");

function showlove() {
  icon.style.opacity = "1";
  icon.style.scale = "1.30";
  icon.style.transition = "0.40s";

  setTimeout(function () {
    icon.style.opacity = "0";
    icon.style.scale = "1";
    icon.style.transition = "1s";
  }, 2000);
}

let icon2 = document.getElementById("heart2");

function showlove2() {
  icon2.style.opacity = "1";
  icon2.style.scale = "1.30";
  icon2.style.transition = "0.40s";

  setTimeout(function () {
    icon2.style.opacity = "0";
    icon2.style.scale = "1";
    icon2.style.transition = "1s";
  }, 2000);
}

let icon3 = document.getElementById("heart3");

function showlove3() {
  icon3.style.opacity = "1";
  icon3.style.scale = "1.30";
  icon3.style.transition = "0.40s";

  setTimeout(function () {
    icon3.style.opacity = "0";
    icon3.style.scale = "1";
    icon3.style.transition = "1s";
  }, 2000);
}

let icon4 = document.getElementById("heart4");

function showlove4() {
  icon4.style.opacity = "1";
  icon4.style.scale = "1.30";
  icon4.style.transition = "0.40s";

  setTimeout(function () {
    icon4.style.opacity = "0";
    icon4.style.scale = "1";
    icon4.style.transition = "1s";
  }, 2000);
}

let icon5 = document.getElementById("heart5");

function showlove5() {
  icon5.style.opacity = "1";
  icon5.style.scale = "1.30";
  icon5.style.transition = "0.40s";

  setTimeout(function () {
    icon5.style.opacity = "0";
    icon5.style.scale = "1";
    icon5.style.transition = "1s";
  }, 2000);
}

let icon6 = document.getElementById("heart6");

function showlove6() {
  icon6.style.opacity = "1";
  icon6.style.scale = "1.30";
  icon6.style.transition = "0.40s";

  setTimeout(function () {
    icon6.style.opacity = "0";
    icon6.style.scale = "1";
    icon6.style.transition = "1s";
  }, 2000);
}

// Add like feature in Gallery images End
