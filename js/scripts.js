// Begin Business Logic



// Begin User Interface Logic
$(document).ready(function() {
  $("form#yearForm").submit(function(event) {
    event.preventDefault();
    var yearInputted = parseInt($("#yearInput").val());
    // if (yearInputted % 100 === 0 && yearInputted % 400 === 0) {
    //   alert(true);
    // } else if
    //   (yearInputted % 100 === 0 || yearInputted % 4 != 0) {
    //   alert(false);
    // } else if
    //   (yearInputted % 4 === 0 || yearInputted % 400 === 0) {
    //   alert(true);

      if ((yearInputted % 100 === 0 && yearInputted % 400 != 0) || yearInputted % 4 != 0) {
        alert(false);
      } else {
        alert(true);
      }
  });
});
