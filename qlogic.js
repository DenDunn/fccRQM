$(document).ready(function() {
    $("#QuoteBtn").on("click", function(){
        $.ajax({
            url: "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
            //url: "https://jsonp.afeld.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
            dataType: "json",
            cache: false,
            type: "GET",
            success: function (json) {
                var author = "unknown";
                $("#qoutePlace").html(json.quoteText);
                if (json.quoteAuthor !== "") author = json.quoteAuthor;
                $("#authorPlace").html(author);
                $("#twitterious").attr("href", "https://twitter.com/intent/tweet?text=" + json.quoteText + author + "&hashtags=quotes");
            }
        })
    });
});