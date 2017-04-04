$(document).ready(function(){

  // prepends the jersey turnpike audio, so it plays quickly
  $("body").prepend("<audio id='bjm_audio' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/bjm_audio_full.mp3'</audio>");

  // targets the turnpike audio by id and plays it before the rest of the function runs
  var bjmAudio = document.getElementById('bjm_audio');
  bjmAudio.play();

  // a whole bunch of beautiful malkoviches
  var malkImages = [
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_1.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_2.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_3.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_5.png",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_6.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_4.png",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_7.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_8.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_9.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_10.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_11.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_12.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_13.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_14.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_15.JPG",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_16.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_17.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_18.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_19.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_20.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_21.png",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_22.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_23.jpeg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_24.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_25.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_26.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_27.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_28.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_29.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_30.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_31.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_32.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_33.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_34.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_35.png",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_36.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_37.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_38.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_39.JPG",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_40.png",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_41.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_42.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_43.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_44.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_45.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_46.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_47.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_48.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_49.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_50.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_51.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_52.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_53.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_54.jpeg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_55.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_56.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/malko_57.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_58.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_59.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_60.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_61.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_62.jpeg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_63.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_64.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_65.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_66.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_67.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_68.JPG",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_69.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_70.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_71.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_72.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_73.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_74.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_75.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_76.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_77.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_78.png",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_79.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_80.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_81.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_82.jpg",
    "https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/Malko_83.jpg",
  ];

  // targets images on the screen
  var allImg = $('img');
  allImg.each(function(key,val) {
    // runs a function that replaces the source of every image with a malkovich image that's full width
    $(this).attr("src", malkImages[Math.floor(Math.random()*malkImages.length)],"border-image-repeat", "repeat", "width", "100%");
    // console.log("key ", key);
    // console.log("val ", val);
  });

  // function that turns all text into "malkovich"
  var malkovich = function() {
    var john = "malkovich";
    // extracts text from the page and splits it into individual characters
    var characters = $(this).text().split("");
    var counter = 0;
    for (var i = 0; i < characters.length; i++) {
      // character codes for spaces and non-letters (from http://www.ascii.cl/htmlcodes.htm)
      var key = characters[i].charCodeAt(0);
      var uppercase = key >= 65 && key <= 90;
      var lowercase = key >= 97 && key <= 122;
      var punctuation = key == 46 || key == 33 || key == 63 || key == 39 || key == 34 || key >= 145 && key <= 151;
      var numbers = key >= 48 && key <= 57;
      var space = key == 32;
      if (uppercase || lowercase) {
        var portal = john[counter % john.length];
        // if a character is uppercase, make sure it stay uppercase
        if (uppercase) {
          portal = portal.toUpperCase();
        }
        counter++;
        console.log(portal);
        characters[i] = portal;
      // resets to beginning of "malkovich" if there's punctuation
      } else if (punctuation) {
        counter = 0;
      // follows any number with "malkovich"
      } else if (numbers) {
        counter = 0;
      // resets any new word to start from the beginning of "malkovich"
      } else if (space) {
          counter = 0;
      }
    }
    // returns all malkoviched characters and joins them without a space
    $(this).text(characters.join(""));
  };

  // runs malkovich function on all h elements
  var allH = $('h1,h2,h3,h4,h5,h6');
  allH.each(malkovich);

  // runs malkovich function on p elemnts
  var allP = $('p');
  allP.each(malkovich);

  // runs malkovich function on link elements
  var allA = $('a');
  allP.each(malkovich);

  // runs malkovich function on span elements
  var allSpan = $('span');
  allP.each(malkovich);

  // runs malkovich function on list items
  var allLi = $('li');
  allP.each(malkovich);
});