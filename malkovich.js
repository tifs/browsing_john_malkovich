$(document).ready(function(){

  // $("body").prepend("<img id='malkovich_1' preload='auto' src='http://www.malkovich.com/jpg'/>");

  // TARGET ANY TEXT
  // SPLIT PARAGRAPHS ETC. INTO WORDS
  // MEASURE LENGTH OF WORDS
  // SELECT IT BY LENGTH OF THE WORD
  // REPLACE CHARACTERS IN ORDER => "Mal ko vich malkovich malko vich"
  // 1 CHAR => 0
  // 2 CHAR => 0
  // LEAVE NUMBERS, PUNCTUATION, AND CAPITALIZATION ALONE

  // MAYBE SELECT ENDINGS LIKE -ING -ED -ION TO CREATE FUNNIER WORDS
  // REPLACE WITH SOME FORM OF "MALKOVICH"

  // TARGET ANY IMAGE
  // REPLACE WITH SOME IMAGE OF MALKOVICH

    // REPLACE TEXT
    // find the text in every element and replace it with "Malkovich"
    // in javascript
    // $('*').html
    // $('*').text
    // var pText = $("p").text();
    // var pArray = pText.split(" ");
    // pArray.replace(/anything/g, "malkovich");
    // pMal = pArray.join(" ");

    // in jquery
    // $("*").replaceWith("Malkovich");
    // or
    $('p,h1,h2,h3,h4,h5,h6,span').text("Malkovich");



    // var replaced = $("body").html().replace(/text/g,'replace');
    // $("body").html(replaced);
    // $("*").html($("p").text().replace(/ /g," "));

    // REPLACE IMAGE
    // make an array of malkovich img src urls and shuffle them
    // $("img").each.attr("src", );
});

