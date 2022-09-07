$(document).ready(function () {

  // create remove button listener for prepopulated ratings
  $(".removebtn").on("click", function (e) {
    $(this).closest("tr").remove();
  });

  // listener for submit of form to add a rating
  $("form").on("submit", function (e) {
    e.preventDefault();
    let movieTitle = $("#movietitle").val();
    let movieRating = $("#movierating").val();
    if (movieTitle.length < 2 && movieRating < 10 || movieTitle.length > 10 && movieRating < 0) {
      alert("Please select a title with at least 2 characters and rating between 1 and 10!");
      return;
    }
    $("tbody").append($(`<tr><td>${movieTitle}</td><td>${movieRating}</td><td><a class="waves-effect waves-light btn-small removebtn" id="removebtn">Remove</a></td></tr>`));

    // create event listener for remove button in table
    $(".removebtn").on("click", function (e) {
      $(this).closest("tr").remove();
    });
  })


  // listen for click on table heading, code snippet grabbed from here for an easy workable solution: https://stackoverflow.com/a/19947532
  $('th').click(function () {
    console.log($(this));
    let table = $(this).parents('table').eq(0);
    let rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
    this.asc = !this.asc;
    if (!this.asc) { rows = rows.reverse() };
    for (let i = 0; i < rows.length; i++) { table.append(rows[i]) };
  })

  function comparer(index) {
    return function (a, b) {
      let valA = getCellValue(a, index), valB = getCellValue(b, index);
      return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB);
    }
  }

  function getCellValue(row, index) { return $(row).children('td').eq(index).text() };

});