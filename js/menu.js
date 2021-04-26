(function ($) {
  "use strict";

  var data = {
    sections: [
      {
        first: true,
        index: 1,
        header_fr: "Entrées",
        header_en: "Appetizers",
        items: [
          {
            name_fr: "Raviolis chinois poêlés",
            name_en: "Pan fried dumplings",
            quantity: null,
            price: null,
            options: [
              {
                name_fr: "Poulet et légumes",
                name_en: "Chicken and vegetables",
                quantity: 3,
                price: 6,
              },
              {
                name_fr: "Boeuf et champignons",
                name_en: "Beef and mushrooms",
                quantity: 3,
                price: 6,
              },
              {
                name_fr: "Végétariens",
                name_en: "Vegetarian",
                quantity: 3,
                price: 6,
              },
              {
                name_fr: "",
                name_en: "",
                quantity: 6,
                price: 10,
              },
            ],
          },
          {
            name_fr: "Rouleau d'été",
            name_en: "Summer rolls",
            quantity: 1,
            price: null,
            options: [
              {
                name_fr: "Au poulet",
                name_en: "Chicken",
                quantity: null,
                price: 6,
              },
              {
                name_fr: "Au boeuf",
                name_en: "Beef",
                quantity: null,
                price: 6,
              },
              {
                name_fr: "Au porc bbq",
                name_en: "BBQ porc",
                quantity: null,
                price: 6,
              },
              {
                name_fr: "Végétarien",
                name_en: "Vegetarian",
                quantity: null,
                price: 6,
              },
              {
                name_fr: "Aux crevettes",
                name_en: "Shrimp",
                quantity: null,
                price: 6,
              },
            ],
          },
          {
            name_fr: "Ailes de poulet au citron et gingembre",
            name_en: "Lemon and ginger chicken wings",
            quantity: null,
            price: null,
            options: [
              {
                name_fr: "",
                name_en: "",
                quantity: 3,
                price: 5,
              },
              {
                name_fr: "",
                name_en: "",
                quantity: 6,
                price: 9,
              },
            ],
          },
          {
            name_fr: "Avocat aux crevettes",
            name_en: "Avocado with shrimp",
            quantity: null,
            price: 10,
          },
          {
            name_fr: "Salade de papaye verte et mangue",
            name_en: "Green papaya and mango salad",
            description_fr: "(vinaigrette aux agrumes)",
            description_en: "(citrus fruit vinaigrette)",
            quantity: null,
            price: 12,
          },
          {
            name_fr: "Ceviche mangue et orange",
            name_en: "Mango and orange ceviche",
            quantity: null,
            price: 12,
          },
          {
            name_fr:
              "Soupe mijotée de lotus, arachides et côtes levées de porc",
            name_en: "Slow-cooked lotus, peanut and spare rib soup",
            quantity: null,
            price: 9,
          },
          {
            name_fr: "Tom Yum Goong Thai",
            name_en: "Tom Yum Goong",
            description_fr: "(soupe thaïlandaies)",
            description_en: "(thai soup)",
            quantity: null,
            price: 9,
          },
          {
            name_fr: "Gaspacho aux tomates et gingembre frais",
            name_en: "Tomato and fresh ginger gazpacho",
            description_fr: "(saisonnier)",
            description_en: "(seasonnal)",
            quantity: null,
            price: 10,
          },
          {
            name_fr: "Soupe glacée concombre et yaourt à la Jordan",
            name_en: "Cucumber and yogurt chilled soup à la Jordan",
            description_fr: "(saisonnier)",
            description_en: "(seasonnal)",
            quantity: null,
            price: 10,
          },
        ],
      },
      {
        index: 2,
        header_fr: "Plat Principaux",
        header_en: "Main Dishes",
        items: [
          {
            name_fr: "Brochettes de poulet",
            name_en: "Chicken brochettes",
            description_fr:
              "à la sauce sriracha épicée et noix de coco servi avec riz et salade",
            description_en:
              "in a sriracha and cononut sauce served with rice and salade",
            quantity: 2,
            price: 18,
          },
          {
            name_fr: "Cari de poulet indonésien",
            name_en: "Indonesian coconut chicken curry",
            description_fr:
              "à la sauce de noix de coco, servi avec oeuf au thé et riz",
            description_en: "served with tea egg and rice",
            quantity: null,
            price: 18,
          },
          {
            name_fr: "Filet de saumon",
            name_en: "Salmon filet served with rougail and rice",
            description_fr: "servi avec rougail et riz",
            description_en: "served with tea egg and rice",
            quantity: null,
            price: 20,
          },
          {
            name_fr: "Cube d'agneau à la sauce tomate",
            name_en: "Lamb cubes in tomato sauce",
            description_fr: "servi avec oeuf au thé et riz",
            description_en: "served with tea egg and rice",
            quantity: null,
            price: 20,
          },
          {
            name_fr: "Lapin au zeste d'orange",
            name_en: "Rabbit with orange zest",
            description_fr: "servi avec salade de saison et riz",
            description_en: "served with seasonal salad and rice",
            quantity: null,
            price: 25,
          },
          {
            name_fr: "Canard à la lime salée et l'oignon de Chine",
            name_en: "Duck with salted lime and Chinese onion",
            description_fr: "servi avec salade papaye et mangue et riz",
            description_en: "served with papaye and mango salad and rice",
            quantity: null,
            price: 25,
          },
          {
            name_fr: "Steak de New York (8 oz)",
            name_en: "New York steak (8 oz)",
            description_fr: "avec sauce de cari, salade de saison et riz",
            description_en: "served with currey sauce, seasonal salad and rice",
            quantity: null,
            price: 25,
          },
          {
            name_fr: "Carré d'agneau avec sauce épicée",
            name_en: "Rack of lamb with spicy sauce",
            description_fr:
              "servi avec micro pousse et ananas (sur demande lors de la réservation)",
            description_en:
              "served with micro pousse and pineapple (upon request when booking)",
            quantity: null,
            price: 36,
          },
          {
            name_fr: "Filet mignon avec crevettes et sauce au cari",
            name_en: "Filet mignon and shrimp curry sauce",
            description_fr: "servi avec micro pousse et ananas",
            description_en: "served with micro pousse and pineapple",
            quantity: null,
            price: 38,
          },
          {
            name_fr:
              "Médaillon de cerf rouge, nappé d'une sauce aux petits fruits",
            name_en: "Red deer medaillon coated with a berry sauce",
            description_fr: "servi avec micro pousse et ananas",
            description_en: "served with sprouts and pineapple",
            quantity: null,
            price: 38,
          },
        ],
      },
      {
        index: 3,
        header_fr: "Phö",
        header_en: "Phö",
        items_table: [
          {
            name_fr: "Phö poulet",
            name_en: "Phö chicken",
            small: "12",
            large: "15",
          },
          {
            name_fr: "Phö boeuf",
            name_en: "Phö beef",
            small: "12",
            large: "15",
          },
          {
            name_fr: "Phö boeuf",
            name_en: "Phö beef",
            small: "12",
            large: "15",
          },
          {
            name_fr: "Phö porc bbq",
            name_en: "Phö bbq porc",
            small: "12",
            large: "15",
          },
          {
            name_fr: "Phö crevettes",
            name_en: "Phö shrimp",
            small: "12",
            large: "15",
          },
          {
            name_fr: "Phö végétarien",
            name_en: "Phö vegetarian",
            small: "12",
            large: "15",
          },
          {
            name_fr: "Phö ailes de poulet",
            name_en: "Phö chicken wings",
            small: null,
            large: "15",
          },
          {
            name_fr: "Phö boulettes de porc",
            name_en: "Phö pork dumplings",
            small: null,
            large: "15",
          },
          {
            name_fr: "Phö total (poulet, boeuf, porc bbq & crevettes)",
            name_en: "Phö total (chicken, beef, bbq porc & shrimp)",
            small: null,
            large: "17",
          },
          {
            name_fr: "Phö agneau",
            name_en: "Phö lamb",
            small: null,
            large: "17",
          },
          {
            name_fr: "Phö canard",
            name_en: "Phö duck",
            small: null,
            large: "20",
          },
          {
            name_fr: "Phö lapin",
            name_en: "Phö rabbit",
            small: null,
            large: "20",
          },
        ],
      },
      {
        index: 4,
        header_fr: "Desserts",
        header_en: "Desserts",
        items: [
          {
            name_fr: "Crème brûlée à l'érable et citronnelle",
            name_en: "Maple and lemon-grass crème brûlée",
            quantity: null,
            price: 9,
          },
          {
            name_fr: "Crêpe mille-feuilles aux fruit",
            name_en: "Milles-feuilles crêpe with fruit",
            quantity: null,
            price: 9,
          },
          {
            name_fr: "Crème glacée aux fruit frais et au sirop d'érable",
            name_en: "Fresh fruits and maple syrup ice cream",
            quantity: null,
            price: 6,
          },
        ],
      },
    ],
  };

  var renderMenu = function (lang) {
    var lang = getLanguage() || "fr";
    var smallText = lang == "fr" ? "petite" : "small";
    var largeText = lang == "fr" ? "grande" : "large";
    var menuNavigationButtonTemplate = [
      "{{#sections}}",
      "{{#first}}",
      `<a class="nav-link urasie-animate active" id="v-pills-{{index}}-tab" data-toggle="pill" href="#v-pills-{{index}}" role="tab" aria-controls="v-pills-{{index}}" aria-selected="true">{{header_${lang}}}</a>`,
      "{{/first}}",
      "{{^first}}",
      `<a class="nav-link urasie-animate" id="v-pills-{{index}}-tab" data-toggle="pill" href="#v-pills-{{index}}" role="tab" aria-controls="v-pills-{{index}}" aria-selected="false">{{header_${lang}}}</a>`,
      "{{/first}}",
      "{{/sections}}",
    ].join("\n");

    var template = [
      "{{#sections}}",
      '<div class="tab-pane fade{{#first}} show active{{/first}}" id="v-pills-{{index}}" role="tabpanel" aria-labelledby="day-{{index}}-tab">',
      
      '{{#items_table}}',
      '<div class="menus row no-gutters d-flex align-items-stretch">',
      '<div class="col-md-6 table-text">',
      `<h4><strong>{{name_${lang}}}</strong></h4>`,
      '</div>',
      '<div class="col-md-3 table-text text-right">',
      `{{#small}}${smallText} - <span class="price">\${{small}}</span>{{/small}}`,
      '</div>',
      '<div class="col-md-3 table-text text-right">',
      `{{#large}}${largeText} - <span class="price">\${{large}}</span>{{/large}}`,
      '</div>',
      '</div>',
      '{{/items_table}}',
      
      '<div class="row no-gutters d-flex align-items-stretch">',
      "{{#items}}",
      '<div class="col-md-12 col-lg-6 d-flex align-self-stretch">',
      '<div class="menus d-sm-flex urasie-animate align-items-stretch">',
      '<div class="menu-img img" style="background-image: url(images/menu/breakfast-1.jpg);"></div>',
      '<div class="text d-flex align-items-start">',
      '<div style="width: 100%;">',
      '<div class="d-flex">',
      '<div class="one-half">',
      `<h3>{{name_${lang}}}</h3>`,
      "</div>",
      '<div class="one-forth">',
      '<span class="price">{{#quantity}}({{quantity}}){{/quantity}} {{#price}}${{price}}{{/price}}</span>',
      "</div>",
      "</div>",
      `<span>{{description_${lang}}}</span>`,
      "{{#options}}",
      '<div class="d-flex item-option">',
      '<div class="one-half">',
      `<h5>{{name_${lang}}}</h5>`,
      "</div>",
      '<div class="one-forth">',
      '<span class="price">{{#quantity}}({{quantity}}){{/quantity}} {{#price}}${{price}}{{/price}}</span>',
      "</div>",
      "</div>",
      "{{/options}}",
      "</div>",
      "</div>",
      "</div>",
      "</div>",
      "{{/items}}",
      "</div>",
      "</div>",
      "{{/sections}}",
    ].join("\n");

    var menuNavigationBtnsHTML = Mustache.render(
      menuNavigationButtonTemplate,
      data
    );
    var menuContentHTML = Mustache.render(template, data);
    $("#v-pills-tab").html(menuNavigationBtnsHTML);
    $("#v-pills-tabContent").html(menuContentHTML);
  };
  renderMenu();

  document.addEventListener("languageUpdated", renderMenu, false);
})(jQuery);
