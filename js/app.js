'use strict';

let animalKeywordArr = [];

function HornedAnimal(animal) {
  this.title = animal.title;
  this.image_url = animal.image_url;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;
}

HornedAnimal.prototype.render = function () {
  let $animalClone = $('.photo-template').clone();
  $('main').append($animalClone);
  $animalClone.find('h2').text(this.title);
  $animalClone.find('img').attr('src', this.image_url);
  $animalClone.find('alt').attr('alt', this.title);
  $animalClone.find('p').text(this.description);
  $animalClone.removeClass('photo-template');
  $animalClone.attr('class', this.keyword);
};

HornedAnimal.readJson = () => {
  $.ajax('./data/page-1.json')
    .then(data => {
      let keywordsArr = new Set(animalKeywordArr);
      data.forEach(item => {
        let animal = new HornedAnimal(item);
        //console.log(animal);
        keywordsArr.add(animal.keyword);
        animal.render();
      });
      $('.photo-template').remove();

      generateDropDown(keywordsArr);
    });
};


function generateDropDown(array) {
  array.forEach(item => {
    $('select').append(`<option value ="${item}">${item}</option>`);
  });
}


let $dropdown = $('.dropdown');
$dropdown.on('change', filterKeywords);

function filterKeywords() {
  let choice = $(this).val();
  if (choice) {
    $('section').hide();
    $(`.${choice}`).fadeIn();
  }
}

$(() => HornedAnimal.readJson());
