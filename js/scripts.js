$("document").ready(function(){
  $("button#hello").click(function(){
    $("ul").prepend("<li>Hello!</li>");
    $("ul#webpage").children("li").first().click(function() {
      $(this).css("background-color","green");
    });
  });

  $("button#Good-bye").click(function(){
    $("ul").prepend("<li>Good Bye there!</li>");
    $("ul#user").children().first().css("background-color","yellow");
    $("ul#webpage").children("li").first().click(function() {
      $(this).css("background-color","green");
      $("ul#webpage").append("<img src='images/bye.png' width=50px>");
    });
  });

  $("button#Stop").click(function(){
    $("ul").prepend("<li>Stop it!</li>");
    $("ul#webpage").children("li").last().remove();
    $("ul#webpage").children("li").first().click(function() {
      $(this).css("background-color","green");
    });


  });

  // $("ul#user"\).children("li").first().click(function(){
  //   $("li").click(function(){
  //     alert("Hi");
  //   });
  //  $("ul#user").children().css("background-color","green");
//  });

//  $("ul#webpage").children("li").click(function() {
//    $(this).css("background-color","green");
//  });

});
