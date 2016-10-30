$(document).ready(function() {
    $("#QuoteBtn").on("click", function(){
        $.ajax({
            url: "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
            dataType: "json",
            cache: false,
            type: "GET",
            success: function (json) {
                $("#qoutePlace").html(json.quoteText);
                $("#authorPlace").html(json.quoteAuthor);
            }
        })
    });
    $("#tweet").on("click", function(){
        $("#qoutePlace").html("...");
        $("#authorPlace").html("...");
    })
});