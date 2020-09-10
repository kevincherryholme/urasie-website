var arrLang = {
  en: {
    HOME: "Home",
    MENU: "Menu",
    CONTACT: "Contact Us",
  },
  fr: {
    HOME: "Accueil",
    MENU: "Menu",
    CONTACT: "Contactez-nous",
  },
};

var getLanguage;

(function ($) {
  "use strict";

  document.getElementById("setlangfr").onclick = () => {
    setLanguage("fr");
  };
  document.getElementById("setlangen").onclick = () => {
    setLanguage("en");
  };

  var setLanguage = function (lang) {
    localStorage.setItem("lang", lang);
    translatePage();
  };

  getLanguage = function () {
    // Check if we stored the lang on local storage before, if not, check the browser lang, if that doesn't exist, default to french.
    var lang = localStorage.getItem("lang");
    if (lang == null) {
      lang = localStorage.getItem("lang") || navigator.language.slice(0, 2);
    }
    if (!Object.keys(arrLang).includes(lang)) lang = "fr";
    return lang;
  };

  var translatePage = function () {
    var lang = getLanguage();

    $(".lang").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
    document.dispatchEvent(new Event("languageUpdated"));
  };
  translatePage();
})(jQuery);
