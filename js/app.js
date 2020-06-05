'use strict';

function HornedAnimal(animal) {
    this.title = animal.title;
    this.image_url = animal.image_url;
    this.description = animal.description;
    this.keyword = animal.keyword;
    this.horns = animal.horns;
  }

//   Dog.prototype.render = function () {
//     let $dogClone = $('.dog-template').clone();
//     $('main').append($dogClone);
//     $dogClone.find('h2').text(this.name);
//     $dogClone.find('img').attr('src', this.image_url);
//     $dogClone.find('p').text(this.hobbies);
//     $dogClone.removeClass('dog-template');
//     $dogClone.attr('class', this.name);
//   };
//code referenced from Class-02 demo folder
  HornedAnimal.prototype.render = function(){
      let $animalClone = $('.photo-template').clone();
      $('main').append($animalClone);
      $animalClone.find('h2').text(this.title);
      $animalClone.find('img').attr('src', this.image_url);
      $animalClone.find('alt').attr('alt', this.title);
      $animalClone.find('p').text(this.description);
      $animalClone.removeClass('photo-template');
      $animalClone.attr('class', this.keyword);
  }

  HornedAnimal.readJson = () => {
//     const ajaxFormat = {
//       method: 'get',
//       dataType: 'json'
//     };
  
    $.ajax('./data/page-1.json')
      .then(data => {
        data.forEach(item => {
          let animal= new HornedAnimal(item);
          console.log(animal);
          animal.render();
        });
      });
  };
  
  $(() => HornedAnimal.readJson());
  
  