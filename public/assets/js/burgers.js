// Wait to attach handlers until DOM is ready
// we dont know who DOM is but he get's angry if you do stuff when he's not ready
$(function() {

  // Request to create new burger
  $("button").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log('CLICKED');

    var newBurger = {
      burger_name: $("#burger-name").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

    // $(".change-devoured").on("click", function(event) {
    //   var id = $(this).data("id");
    //   var newSleep = $(this).data("newsleep");
  
    //   var newSleepState = {
    //     sleepy: newSleep
    //   };
  
    //   // Send the PUT request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "PUT",
    //     data: newSleepState
    //   }).then(
    //     function() {
    //       console.log("changed sleep to", newSleep);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
  
  });
  