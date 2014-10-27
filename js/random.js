$(function(){

  var button = $("button");

  button.on("click", function(){
    console.log("button was just clicked");
    var newItem = $("input").val();
    if (newItem !== "") {
      $("ul").append($("<li>").text(newItem));
    }
  });

});
