var arrLang = {
  en: {
    TEMP_MSG: "Home delivery on orders of $50 or more (before taxes).",
    FOOTER_DESCRIPTION:
      "Welcome to the ÜRASIE restaurant, an international and innovative restaurant-bistro, offering European fusion cuisine with an Asian flavor.",
    HOME: "Home",
    MENU: "Menu",
    CONTACT: "Contact Us",
    CONTACT_INFORMATION: "Contact Information",
    OPEN_HOURS: "Open hours",
    OPEN_HOURS_DATA: "Tuesday - Saturday 11am - 2:30pm | 5pm - 9pm",
    ADDRESS: "Address",
    ADDRESS_LOC: "11 rue Front, Gatineau, Quebéc J9H 4W8",
    PHONE: "Phone",
    EMAIL: "Email",
    ORDER_NOW: "Order now",
    MONDAY: "Monday",
    MONDAY_OPEN_HOURS: "Closed",
    TUESDAY: "Tuesday",
    TUESDAY_OPEN_HOURS: "11am - 2:30pm | 5pm - 9pm*",
    WEDNESDAY: "Wednesday",
    WEDNESDAY_OPEN_HOURS: "11am - 2:30pm | 5pm - 9pm*",
    THURSDAY: "Thursday",
    THURSDAY_OPEN_HOURS: "11am - 2:30pm | 5pm - 9pm*",
    FRIDAY: "Friday",
    FRIDAY_OPEN_HOURS: "11am - 2:30pm | 5pm - 9pm*",
    SATURDAY: "Saturday",
    SATURDAY_OPEN_HOURS: "11am - 2:30pm | 5pm - 9pm*",
    SUNDAY: "Sunday",
    SUNDAY_OPEN_HOURS: "Closed",
    OPEN_HOURS_DISCLAIMER: "* The kitchen closes at 9 pm.",
    INDEX_ITEM_1_TITLE: "Duck with salted lime and Chinese onion",
    INDEX_ITEM_1_DESC: "served with papaye and mango salad and rice",
    INDEX_ITEM_2_TITLE: "New York steak (8 oz)",
    INDEX_ITEM_2_DESC: "served with currey sauce, seasonal salad and rice",
    INDEX_ITEM_3_TITLE: "Filet mignon and shrimp curry sauce",
    INDEX_ITEM_3_DESC: "served with micro pousse and pineapple",
    INDEX_ITEM_4_TITLE: "Red deer medaillon coated with a berry sauce",
    INDEX_ITEM_4_DESC: "served with sprouts and pineapple",
  },
  fr: {
    TEMP_MSG:
      "Livraison à domicile pour commande de 50 $ ou plus (avant taxes) .",
    FOOTER_DESCRIPTION:
      "Bienvenue au restaurant ÜRASIE, un restaurant-bistro de caractère international et innovant, offrant une cuisine fusion européenne au parfum asiatique.",
    HOME: "Accueil",
    MENU: "Menu",
    CONTACT: "Contactez-nous",
    CONTACT_INFORMATION: "Coordonnées",
    OPEN_HOURS: "Heures d'ouverture",
    OPEN_HOURS_DATA: "Mardi - Samedi 11 h à 14 h 30 | 17 h à 21 h",
    ADDRESS: "Addresse",
    ADDRESS_LOC: "11 rue Front, Gatineau, Quebéc J9H 4W8",
    PHONE: "Téléphone",
    EMAIL: "Courriel",
    ORDER_NOW: "Pour commander",
    MONDAY: "Lundi",
    MONDAY_OPEN_HOURS: "Fermé",
    TUESDAY: "Mardi",
    TUESDAY_OPEN_HOURS: "11 h à 14 h 30 | 17 h à 21 h*",
    WEDNESDAY: "Mercredi",
    WEDNESDAY_OPEN_HOURS: "11 h à 14 h 30 | 17 h à 21 h*",
    THURSDAY: "Jeudi",
    THURSDAY_OPEN_HOURS: "11 h à 14 h 30 | 17 h à 21 h*",
    FRIDAY: "Vendredi",
    FRIDAY_OPEN_HOURS: "11 h à 14 h 30 | 17 h à 21 h*",
    SATURDAY: "Samedi",
    SATURDAY_OPEN_HOURS: "11 h à 14 h 30 | 17 h à 21 h*",
    SUNDAY: "Dimanche",
    SUNDAY_OPEN_HOURS: "Fermé",
    OPEN_HOURS_DISCLAIMER: "* La cuisine ferme à compter de 21 h.",
    INDEX_ITEM_1_TITLE: "Canard à la lime salée et l'oignon de Chine",
    INDEX_ITEM_1_DESC: "servi avec salade papaye et mangue et riz",
    INDEX_ITEM_2_TITLE: "Steak de New York (8 oz)",
    INDEX_ITEM_2_DESC: "avec sauce de cari, salade de saison et riz",
    INDEX_ITEM_3_TITLE: "Filet mignon avec crevettes et sauce au cari",
    INDEX_ITEM_3_DESC: "servi avec micro pousse et ananas",
    INDEX_ITEM_4_TITLE: "Médaillon de cerf rouge, nappé d'une sauce aux petits fruits",
    INDEX_ITEM_4_DESC: "servi avec micro pousse et ananas",
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
