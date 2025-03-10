const toggleBtn = document.querySelector(".btn");
const sunIcon = document.querySelector(".fas");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");

  if (sunIcon.classList.contains("fa-sun")) {
    sunIcon.classList.remove("fa-sun");
    sunIcon.classList.add("fa-moon");
  } else {
    sunIcon.classList.remove("fa-moon");
    sunIcon.classList.add("fa-sun");
  }
});

//date
function displayCurrentDate() {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateFormatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = dateFormatter.format(new Date());
  const currentDateElement = document.getElementById("date");
  currentDateElement.textContent = ` ${formattedDate}`;
}

displayCurrentDate();

//language
let currentLanguage = "en";

function toggleLanguage() {
  if (currentLanguage === "en") {
    currentLanguage = "fa";
    setLanguage("fa");
  } else {
    currentLanguage = "en";
    setLanguage("en");
  }
}

function setLanguage(language) {
  const translations = {
    en: {
      "hero-name": "Atefeh Ameri",
      "hero-job": "Front-End Developer",
      'html': "Html/css | 85%",

      'js': "JavaScript | 55%",

      'react': "React | 80%",

      'ui': "UI | 80%",

      'ux': "UX | 50%",

      'boot': "BootStrap | 60%",

      'tail': "Tailwind | 60%",
      'mat': "Material UI | 60%",
      'sk':"Skills",
      'sm':"Social Media",

    },
    fa: {
      "hero-name": "عاطفه عامری",
      "hero-job": "برنامه نویس فرانت اند",
      'html': "85% | اچ تی ام ال/سی اس اس",

      'js': "55% | جاوااسکریپت",

      'react': "80% | ری اکت",

      'ui': "80 % | رابط کاربری",

      'ux': "50% | تجربه کاربری",

      'boot': "60% | بوت استرپ",

      'tail': "60% | تیلویند",
      'mat': "60% | متریال یو آی",
      'sk':"مهارت ها",
      'sm':"شبکه های اجتماعی",

    },
  };

  document.getElementById("hero-name").textContent = translations[language]["hero-name"];
  document.getElementById("hero-job").textContent =translations[language]["hero-job"];
  document.getElementById("html").textContent = translations[language]["html"];

  document.getElementById("js").textContent = translations[language]["js"];

  document.getElementById("react").textContent = translations[language]["react"];

  document.getElementById("ui").textContent = translations[language]["ui"];

  document.getElementById("ux").textContent = translations[language]["ux"];

  document.getElementById("boot").textContent = translations[language]["boot"];

  document.getElementById("tail").textContent = translations[language]["tail"];
  document.getElementById("mat").textContent = translations[language]["mat"];
  document.getElementById("sk").textContent = translations[language]["sk"];
  document.getElementById("sm").textContent = translations[language]["sm"];

}

setLanguage(currentLanguage);
console.log;
var myElement = document.getElementById("myElement");
myElement.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Prevent the default right-click menu behavior
});

// Disable F12 key and Ctrl+Shift+I combo
document.addEventListener('keydown', event => {
  if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
    event.preventDefault();
  }
});
function testKeyCode(e) {
  var keycode;
  if (window.event) keycode = window.event.keyCode;
  else if (e) keycode = e.which;
  var e = e || window.event;
             if (e.ctrlKey &&
                    (e.keyCode === 67 ||
                     e.keyCode === 86 ||
                     e.keyCode === 85 ||
                     e.keyCode === 117)) {
      alert('Hi!Find another way to access the sourse code..(99% You Know How) ');
     return false;
     } else {
      return true;
     }
  }
  document.onkeydown = testKeyCode;

  /*      alert('This website is protected against attempts to clone. Your IP has been duly recorded on our server and if you persist it will be forwarded to the competent authorities');
*/
