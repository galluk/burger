// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // handle a click of the devour button for a burger
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log(`changed devoured to: ${newDevoured}`);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // handle the submit of a new burger
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log(`created new burger: ${newBurger.name}`);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
