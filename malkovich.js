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
      // REPLACE IMAGE
    // make an array of malkovich img src urls and shuffle them
      // }
  var allImg = $('img');
  allImg.each(function() {
    $('img').attr("src", "http://www.thestar.com/content/dam/thestar/news/gta/2013/06/08/actor_john_malkovich_comes_to_rescue_of_bleeding_man_in_toronto/malkovichshot.jpg");
  });


    // REPLACE TEXT
    // find the text in every element and replace it with "Malkovich"
    // in javascript
    // $('*').html
    // $('*').text
    // var pText = $("p").text();
    // var pArray = pText.split(" ");
    // pArray.replace(/anything/g, "malkovich");
    // pMal = pArray.join(" ");

    // $('p,h1,h2,h3,h4,h5,h6,span')


    // // splits along any spaces and non-letters (numbers, punctuation, symbols, etc.)
    // var pText = $('p').text().split(/([_\W])/);


   var allH = $('h1,h2,h3,h4,h5,h6');
    allH.each(function() {
      // console.log(this);
      var wordsArr = $(this).text().split(" ");
      // console.log(wordsArr);
      var malkArray = wordsArr.map(function(singleWord) {
        if (singleWord.length > 5) {
          return "Malkovich";
        } else if (singleWord.length <= 5 && singleWord >= 4) {
          return "Malko";
        } else {
          return "Mal";
        }
      });
      // console.log(malkArray);
      $(this).text(malkArray.join(" "));
    });


    var allP = $('p');
    allP.each(function() {
      // console.log(this);
      var wordsArr = $(this).text().split(" ");
      // console.log(wordsArr);
      var malkArray = wordsArr.map(function(singleWord) {
        if (singleWord.length > 5) {
          return "Malkovich";
        } else if (singleWord.length <= 5 && singleWord >= 4) {
          return "Malko";
        } else {
          return "Mal";
        }
      });
      // console.log(malkArray);
      $(this).text(malkArray.join(" "));
    });


    // console.log(allP.text().split(" "));
    // console.log(pArray);
    // pArray.forEach(function (pWord) {
    //   // console.log(pWord);
    //   var length = pWord.length;
    //   if(length> 5) {
    //     pWord = "hahahah";
    //   }

      // var length = pLength.length;
      // console.log(length);
      // if (length > 5) {
      //   pLength = "Malkovich";
      // }
      // }
      // $('p').text().join(" ") = pArray;
      // } elsif (pLength <= 5 && pLength >= 4); {
      //   $(this).replaceWith("Malko");
      // } elsif (pLength <= 3); {
      //   $(this).replaceWith("Mal");
      // }

    // });
    // console.log(pArray);



});

