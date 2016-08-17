// Begin Business Logic



// Begin User Interface Logic
$(document).ready(function() {
  $("form#yearForm").submit(function(event) {
    event.preventDefault();
    var yearInputted = parseInt($("#yearInput").val());
    // return yearInputted;
    console.log(yearInputted);


  });


});
