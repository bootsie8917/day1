$(function(){

  $("input").on("keyup", function(e){
    if (e.keyCode === 13) {
      var $this = $(this);
      var newItem = $this.val();
      if (newItem !== "") {
        $("ul").append($("<li>").text(newItem));
        $this.val("");
        $("button#randomize").show();
      }
    }
  });
    var cars = [
        'Mercedes-Benz SL65 AMG Black Series','Audi A8 L W12',
        'Mercedes-Benz S65 AMG', 'Chevrolet Corvette ZR1',
        'Mercedes-Benz CL65 AMG	' ,'Porsche Cayenne Turbo S',
        'Audi R8', 'BMW M6 Convertible','89 Honda Accord',
        'Porsche 911 Convertible', 'Mercedes-Benz CLS63 AMG',
        'AMC Pacer', 'Ford Pinto', 'Oldsmobile Tornado',
        'GOE Storm', 'Pontiac Aztec','Bugatti'
    ];

  $("button#randomize").on("click", function(){
    var randomIndex = Math.floor(Math.random() * cars.length);
    var randomItem = cars[randomIndex];
    $("div#selected-random").text(randomItem)


  });

    $("div#selected-random").on('submit', function(){

        }
    )

});
