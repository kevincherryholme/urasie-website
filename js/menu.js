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
            name_fr: "Raviolis chinois poeles",
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
              "a la sauce sriracha epicee et noix de coco servi avec riz et salade",
            description_en:
              "in a sriracha and cononut sauce served with rice and salade",
            quantity: 2,
            price: 18,
          },
        ],
      },
    ],
  };

  var renderMenu = function (lang) {
    var lang = getLanguage() || "fr";
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
      '{{#sections}}',
          '<div class="tab-pane fade{{#first}} show active{{/first}}" id="v-pills-{{index}}" role="tabpanel" aria-labelledby="day-{{index}}-tab">',
              '<div class="row no-gutters d-flex align-items-stretch">',
                  '{{#items}}',
                      '<div class="col-md-12 col-lg-6 d-flex align-self-stretch">',
                          '<div class="menus d-sm-flex urasie-animate align-items-stretch">',
                              '<div class="menu-img img" style="background-image: url(images/menu/breakfast-1.jpg);"></div>',
                              '<div class="text d-flex align-items-start">',
                                  '<div style="width: 100%;">',
                                      '<div class="d-flex">',
                                          '<div class="one-half">',
                                              `<h3>{{name_${lang}}}</h3>`,
                                          '</div>',
                                          '<div class="one-forth">',
                                              '<span class="price">{{#quantity}}({{quantity}}){{/quantity}} {{#price}}${{price}}{{/price}}</span>',
                                          '</div>',
                                      '</div>',
                                      `<span>{{description_${lang}}}</span>`,
                                      '{{#options}}',
                                          '<div class="d-flex item-option">',
                                              '<div class="one-half">',
                                              `<h5>{{name_${lang}}}</h5>`,
                                              '</div>',
                                              '<div class="one-forth">',
                                                  '<span class="price">{{#quantity}}({{quantity}}){{/quantity}} {{#price}}${{price}}{{/price}}</span>',
                                              '</div>',
                                          '</div>',
                                      '{{/options}}',															
                                  '</div>',
                              '</div>',
                          '</div>',
                      '</div>',
                  '{{/items}}',
              '</div>',
          '</div>',
      '{{/sections}}'].join('\n');

    var menuNavigationBtnsHTML = Mustache.render(
      menuNavigationButtonTemplate,
      data
    );
    var menuContentHTML = Mustache.render(template, data);
    $("#v-pills-tab").html(menuNavigationBtnsHTML);
    $("#v-pills-tabContent").html(menuContentHTML);
  };
  renderMenu();

  document.addEventListener('languageUpdated', renderMenu, false);

})(jQuery);
