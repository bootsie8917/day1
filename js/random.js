$(function(){

  $("input").on("keyup", function(e){
    if (e.keyCode === 13) {
      var $this = $(this);
      var newItem = $this.val();
      if (newItem !== "") {
        $("ul").append($("<li>").text(newItem));
        $this.val("");
      }
    }
  });

  $("button#randomize").on("click", function(){
    var itemList = $("li");
    var randomIndex = Math.floor(Math.random() * itemList.length);
    var randomItem = itemList[randomIndex];
    $("div#selected-random").text($(randomItem).text());
  });

});
