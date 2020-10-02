// Wait to attach handlers until DOM is ready
// we dont know who DOM is but he get's angry if you do stuff when he's not ready
$(function() {

  // Request to create new burger
  $("#submit-button").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var newBurgerName = $("#burger-name").val().trim();

    if (newBurgerName === "" || newBurgerName.length > 45) {
      console.log('Invalid Entry:\nName Entered: ' + newBurgerName + '\nName Length: ' + newBurgerName.length);
      return;
    } else {

      var newBurger = {
        burger_name: newBurgerName,
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
    }
  });


  // Request to change the devoured state of a burger
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("eatburger");
  
    var newDevouredState = {
      burger_name: newDevoured
    };
  
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed sleep to", newDevoured);
        // Reload the page to get the updated list
      location.reload();
      }
    );
  });
  
  
});
  