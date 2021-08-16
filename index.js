const leadImg = document.querySelector(".lead-img-container");

const imgOptions = Array.from(document.querySelectorAll(".img-option"));

const imgDesc = document.querySelector(".img-description");

const imgHotlink = document.querySelector(".img-hotlink");

const loadBtn = document.querySelector(".load-btn");

const loadDivs = Array.from(document.querySelectorAll(".load-div"));

const endpoint =
  "https://api.unsplash.com/photos/random?query=scenic&orientation=landscape&count=9&client_id=XQ2XIouZEzmYKSTu3s2qk7nLKneUYz6BVl_xq7FrpcI";

let allImages = [];

const getImages = async () => {
  const response = await fetch(endpoint);
  let data;
  try {
    data = await response.json();
    allImages = await data;
  } catch (err) {
    console.log(err);
  }
  return await data;
};

const updateDOM = async () => {
  await getImages().then(() => {
    leadImg.innerHTML = `<div class="load-div"><i class="fas fa-spinner spinner"></i></div>`;

    loadDivs.forEach((el) => (el.style.display = "flex"));

    for (let i = 0; i < imgOptions.length; i++) {
      let image = `<img src=${allImages[i].urls.regular}></img>`;

      imgOptions[i].innerHTML = image;
      //   imgOptions[i].style.backgroundImage = `url('${allImages[i].urls.raw}')`;

      imgOptions[i].children[0].addEventListener("load", () => {
        imgOptions[i].parentElement.children[0].style.display = "none";
      });
    }

    let lead = `<img src="${allImages[0].urls.raw}"/>`;
    leadImg.innerHTML += lead;

    leadImg.children[1].onload = () => {
      leadImg.children[0].style.display = "none";
    };

    // leadImg.style.backgroundImage = imgOptions[0].style.backgroundImage;

    imgOptions.forEach((el) => {
      el.parentElement.style.border = "none";
    });

    imgOptions[0].parentElement.style.border = "0.3rem solid rgb(27, 70, 128)";

    imgDesc.innerHTML = `<p>Photo by <a href="${allImages[0].user.links.html}?utm_source=photography-demo-website&utm_medium=referral">${allImages[0].user.name}</a> on <a href="https://unsplash.com/?utm_source=photography-demo-website&utm_medium=referral">Unsplash</a></p>`;

    imgHotlink.href = allImages[0].links.html;
  });
};

updateDOM();

imgOptions.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    leadImg.innerHTML = `<div class="load-div"><i class="fas fa-spinner spinner"></i></div>`;

    let newImg = `<img src="${allImages[index].urls.raw}"/>`;
    leadImg.innerHTML += newImg;

    leadImg.children[1].onload = () => {
      leadImg.children[0].style.display = "none";
    };

    imgOptions.forEach((element) => {
      element.parentElement.style.border = "none";
    });

    e.target.parentElement.style.border = "0.3rem solid rgb(27, 70, 128)";

    // leadImg.style.backgroundImage = e.target.style.backgroundImage;

    imgDesc.innerHTML = `<p>Photo by <a href="${allImages[index].user.links.html}?utm_source=photography-demo-website&utm_medium=referral">${allImages[index].user.name}</a> on <a href="https://unsplash.com/?utm_source=photography-demo-website&utm_medium=referral">Unsplash</a></p>`;

    imgHotlink.href = allImages[index].links.html;
  });
});

loadBtn.addEventListener("click", updateDOM);

// animate smooth scroll

$("#about-us-btn").on("click", () => {
  document.querySelector(".menu-checkbox").checked = false;
  const position = $("#about").position().top - 65;

  $("html, body").animate({
    scrollTop: position,
  }),
    1200;
});

$(".about-us-btn").on("click", () => {
  document.querySelector(".menu-checkbox").checked = false;
  const position = $("#about").position().top - 65;

  $("html, body").animate({
    scrollTop: position,
  }),
    1200;
});

$("#gallery-btn").on("click", () => {
  document.querySelector(".menu-checkbox").checked = false;
  const position = $("#gallery").position().top - 65;

  $("html, body").animate({
    scrollTop: position,
  }),
    1200;
});

$(".gallery-btn").on("click", () => {
  document.querySelector(".menu-checkbox").checked = false;
  const position = $("#gallery").position().top - 65;

  $("html, body").animate({
    scrollTop: position,
  }),
    1200;
});

$(".hero-btn").on("click", () => {
  const position = $("#gallery").position().top - 65;

  $("html, body").animate({
    scrollTop: position,
  }),
    1200;
});

$("#contact-btn").on("click", () => {
  document.querySelector(".menu-checkbox").checked = false;
  const position = $("#contact").position().top;

  $("html, body").animate({
    scrollTop: position,
  }),
    1200;
});

$(".contact-btn").on("click", () => {
  document.querySelector(".menu-checkbox").checked = false;
  const position = $("#contact").position().top;

  $("html, body").animate({
    scrollTop: position,
  }),
    1200;
});
