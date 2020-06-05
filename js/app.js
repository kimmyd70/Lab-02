'use strict';

function HornedAnimal(animal) {
    this.title = animal.title;
    this.image_url = animal.image_url;
    this.description = animal.description;
    this.keyword = animal.keyword;
    this.horns = animal.horns;
  }

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
  
  