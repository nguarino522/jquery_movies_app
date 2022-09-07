$(document).ready(function(){

    $("form").on("submit", function(e){
        e.preventDefault();
        let movieTitle = $("#movietitle").val();
        let movieRating = $("#movierating").val();
        if(movieTitle.length < 2 && movieRating < 10 || movieTitle.length > 10 && movieRating < 0){
            alert("Please select a title with at least 2 characters and rating between 1 and 10!");
            return;
        }
        
        $("tbody").append($(`<tr><td>${movieTitle}</td><td>${movieRating}</td><td><a class="waves-effect waves-light btn-small removebtn" id="removebtn">Remove</a></td></tr>`));

        $(".removebtn").on("click", function(e){
            console.log(e);
            $(this).closest("tr").remove();
        });
    })



});