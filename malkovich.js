$(document).ready(function(){

  // prepends the jersey turnpike audio, so it plays quickly
  $("body").prepend("<audio id='bjm_audio' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/browsing_john_malkovich/bjm_audio.mp3?X-Amz-Date=20150227T221906Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=91e3727d7fbc47a84a13e1f133ed912eeaba12c266cab0dc36eaa9f5bb8d43c1&X-Amz-Credential=ASIAI555XJH7OUF6MI6Q/20150227/us-west-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEDcagAJPAxLMaa00WUO9Gu6mAShTcpEo4QdygBLW8QZEOX4BYTAUATsB4CFPTmy5OXGVvW%2B6DhdU%2BNHXYXobz1DOovSAO7IG2Ox4Ot2nPiP1trncxH7eSO6AbnUji8x7fNoSXct%2B/WXHDoNMYVlAN8RsN1W5BfHCdoZAFfGLh9L5Rove4fFLnV/Ndsx4ac9APi%2BbckszIj1qhTm00YELJjWiFRLJlzEisr3DFziD0/X7Jp0Q1AUVbGKQPEvnC/GKXNiLBl%2Bxc1diV%2BGd89SESeFygrSgl%2BvbnVmqJF3ca4RJGBRGLk5mRqwb8O6Yq3UhooA2c%2BbQbJYG3a7I5h9gMUd2zuL4IPnUw6cF'</audio>");

  // targets the turnpike audio by id and plays it before the rest of the function runs
  var bjmAudio = document.getElementById('bjm_audio');
  bjmAudio.play();

  // a whole bunch of beautiful malkoviches
  var malkImages = [
    "https://www.nbc.com/sites/nbcunbc/files/files/images/2014/4/21/2014_0418_Crossbones_Bio_01_John-Malkovich_FL.jpg",
    "http://celebritybase.info/wp-content/uploads/2013/11/282.jpg",
    "http://image.tmdb.org/t/p/original/xWa0UctyOODig6Fq66gWX6EPjl0.jpg",
    "http://deinterespublico.com/wp-content/uploads/2014/11/John_Malkovich1994_02.jpg",
    "http://i.imgur.com/01nSM.png",
    "http://img23.binimage.org/e4/4f/f8/liaisndangr88mhd_02.jpg",
    "http://picturestack.com/953/155/2E0vlcsnap201hra.jpg",
    "http://3.bp.blogspot.com/-lZ0AQ8GebxM/UB8kvmyBB9I/AAAAAAAAFmM/7HmqYpkzKbQ/s1600/In%2Bthe%2BLine%2Bof%2BFire%2BMalkovich.png",
    "http://www.beyondhollywood.com/uploads/2011/10/John-Malkovich-in-Warm-Bodies-2013-Movie-Image.jpg",
    "http://popcornpanel.com/wp-content/uploads/2013/05/burn_after_reading_61.jpeg",
    "http://www.movpins.com/big/MV5BMTcyNDY0MjY3OV5BMl5BanBnXkFtZTcwMzc2NDgxNw/still-of-john-malkovich-in-burn-after-reading-(2008).jpg",
    "http://image.toutlecine.com/photos/j/o/u/joueurs-1998-01-g.jpg",
    "http://i.vimeocdn.com/video/31621429_1280x924.jpg",
    "http://ia.media-imdb.com/images/M/MV5BNzMyMTc5MjEyNF5BMl5BanBnXkFtZTcwMzI5MDQ2NA@@._V1_SX640_SY720_.jpg",
    "http://www.virtual-history.com/movie/photo/06/large/06088.jpg",
    "http://cineville.nl/sites/all/files/filmstills/32848-2.jpg",
    "http://edgblogs.s3.amazonaws.com/brunoastuto/files/2011/10/john_malkovich_nathalie1.jpg",
    "http://upload.wikimedia.org/wikipedia/commons/7/70/John_Malkovich_KVIFF_Master_Class.jpg",
    "http://www.lionsgatepublicity.com/uploads/assets/7246a212-1750-11e3-b554-005056b70bb8.JPG",
    "http://planetaua.net/uploads/posts/2012-07/1343315984_dd86a8b5d9608457ea8f3a9c31f1fba3.png",
    "http://flavorwire.files.wordpress.com/2013/07/malkovich1.jpg",
    "http://eggboss.com/wp-content/uploads/2013/12/Con-Air.jpg",
    "http://stefclendenen.files.wordpress.com/2014/05/con-air-1b.jpg?w=1200",
    "http://media.theiapolis.com/d8/hY5/iQRS/k9/lTG2/u1/w1HC/john-malkovich-as-cyrus-the-virus-grissom.jpg",
    "http://2.bp.blogspot.com/-4O8bx9j-6B8/Umqb_hRR37I/AAAAAAAAQmQ/E5-VFJ6NcJA/s1600/2013-10-19+017.png",
    "http://www.hotflick.net/flicks/2010_Jonah_Hex/big/fhd010HXJ_John_Malkovich_004.jpg",
    "http://media.paperblog.fr/i/372/3724205/critique-avant-premiere-jonah-hex-jango-L-3.jpeg",
    "http://www.stitchkingdom.com/wp-content/gallery/secretariat_stills/diane-lane-and-john-malkovich-in-secretariat_jpg.jpg",
    "http://www.superiorpics.com/movie_pictures/mp/2007_Colour_Me_Kubrick:_A_True...ish_Story/2007_colour_me_kubrick_003.jpg",
    "https://www.wodumedia.com/wp-content/uploads/2012/10/John-Malkovich-as-notorious-Stanley-Kubrick-imposter-Alan-Conway-in-COLOR-ME-KUBRICK-a-Magnolia-Pictures-release.-Photo-courtesy-of-Magnolia-Pictures-3.jpg",
    "http://tonicleap.files.wordpress.com/2011/08/colour_me_kubrick1.jpg",
    "http://theredlist.com/media/database/muses/icon/cinematic_men/1980/john_malkovitch/018_john_malkovitch_theredlist.jpg",
    "http://kinountersternen.at/wp-content/uploads/klimt70.jpg",
    "http://www.barbarella.de/wp-content/uploads/2014/02/4783-31_KLIMT-John-Malkovich-%C2%A9-epo-film-Bernhard-Berger.jpg",
    "http://www.barbarella.de/wp-content/uploads/2014/02/4731-26_KLIMT-John-Malkovich-%C2%A9-epo-film-Bernhard-Berger.jpg",
    "http://image.toutlecine.com/photos/k/l/i/klimt-2006-06-g.jpg",
    "http://www.skip.at/media/_versions/filme/6993/pger/5_zoom.jpg",
    "http://www.leinwandreporter.com/wp-content/uploads/2012/05/killingfields_rockoff-und-swain.jpg",
    "http://www.world-theatre-day.org/en/picts/Malkovich.jpg",
    "http://www.thefancarpet.com/uploaded_assets/images/gallery/4162/The_Killing_Fields_37269_Medium.jpg",
    "http://images3.cinema.de/imedia/3371/1643371,CS0QmgXjvIFAY3KshFleqm5F+twr3GT37uiIN91BhPLLUiAqkAXxkJMsmuoJYNQHtGeAMcKK97fbpLbH+rGI6g==.jpg",
    "https://70srichard.files.wordpress.com/2014/10/bathtub.png",
    "http://www.hollywoodreporter.com/sites/default/files/imagecache/node-gallery-display/2014/01/John_Malkovich.jpg",
    "http://rriderlausd.org/CNMT/wp-content/uploads/2011/04/20110409-093115.jpg",
    "http://ferdyonfilms.com/Death%204.jpg",
    "http://campus.usal.es/~revistamedicinacine/Volumen_2_1/n2/tanatologia/Dibujo3.JPG",
    "https://yuq.me/users/22/485/WGmpxYrl7h.png",
    "http://lh4.ggpht.com/-MpclQxR6Kwc/UWbk7JOVCgI/AAAAAAAAAIg/LOxrby9HVDI/s640/c3d26e825ad7af6a3ca92ac72a849500.jpg",
    "http://4.bp.blogspot.com/-vD4p5bIOUl0/UZLztgw52yI/AAAAAAAAAQc/UXpfzun07p4/s1600/empire-of-the-sun_1987-2-1200x798.jpg",
    "http://www.operarex.com/Fotos/12321%20-%20Empire%20of%20the%20Sun.jpg",
    "http://explore.bfi.org.uk/sites/explore.bfi.org.uk/files/styles/gallery_full/public/bfi_stills/bfi-00m-kzg.jpg?itok=LJ8u3YVv",
    "http://www.empireonline.com/images/features/greatest-movie-wigs/mitch-leary.jpg",
    "http://images6.fanpop.com/image/photos/32400000/-In-the-Line-of-Fire-john-malkovich-32405088-800-528.jpg",
    "http://media.tumblr.com/47321c98f011e6119853c1b2db2f387d/tumblr_inline_muqi59TQbb1rrol2a.jpg",
    "http://www.dvdactive.com/images/reviews/screenshot/2005/10/johnyenglishr2revpic4.jpg",
    "http://images3.cinema.de/imedia/6164/2086164,KGA8kuoMlRTexsKB8MiJpZYSkXPJlDG_aSjZB2NyY5et5nv32EGTV6zGRHbiSj4J6iXr2vhUzGnCwmhp5HRNsQ==.jpg",
    "http://www.mgmchannel.com/imgcache/shadows-and-fog_3281_1500_1500_2.jpg",
    "http://dvdmedia.ign.com/dvd/image/MulhollandFalls_PUB01_1098297635.jpg",
    "http://www.movpins.com/big/MV5BMTc3MDA4NzU1NF5BMl5BanBnXkFtZTcwOTA0MDQ1NA/still-of-john-malkovich-in-mulholland-falls-(1996).jpg",
    "http://2.bp.blogspot.com/-2sf5U37QTgA/UNPJ58ryBSI/AAAAAAAANaI/GaYKuBK3j8Q/s1600/MARY+REILLY+300A.jpg",
    "http://www.kinoweb.de/filme/Unhold/pix/john.jpg",
    "http://www.br.de/themen/kultur/inhalt/film/marianne-saegebrecht-schauspielerin-xx-geburtstag104~_v-image512_-6a0b0d9618fb94fd9ee05a84a1099a13ec9d3321.jpg?version=19be1",
    "http://img.welt.de/img/kultur/crop101810011/27394041-ci16x9-w780/malkovich-1996-unhold-DW-Politik-Gdansk.jpg",
    "http://www.alwaysaround.net/wp-content/uploads/2012/05/shadow_of_vampireMurnau.jpeg",
    "https://image.tmdb.org/t/p/original/ApPlvKqXfbXPA9gCPXLtIc6dfw7.jpg",
    "http://4.bp.blogspot.com/-Fr7hnHTiWb4/UbFLWk6HSsI/AAAAAAAAW4I/vFMm83u0izQ/s1600/the_messenger_the_story_of_joan_of_arc_john-malkovich.jpg",
    "http://www.grolschfilmworks.com/media/uploads/images/Grolsch_BJM_1.jpg",
    "http://www.thestar.com/content/dam/thestar/news/gta/2013/06/08/actor_john_malkovich_comes_to_rescue_of_bleeding_man_in_toronto/malkovichshot.jpg"
  ];

  // targets all images on the screen
  var allImg = $('img');
  allImg.each(function(key,val) {
    // runs a function that replaces the source of every image with a malkovich image that's full width
    $(this).attr("src", malkImages[Math.floor(Math.random()*malkImages.length)],"border-image-repeat", "repeat", "width", "100%");
    console.log("key ", key);
    console.log("val ", val);
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
      // sets the "malkovich" counter depending on the space's current count
      } else if (space) {
        // if (counter > 0 && counter < 3) {
        // counter = 3;
        // } else if (counter == 3) {
        //   counter = 5;
      //   } else if (counter >= 6 && counter <=8) {
      //     counter = 0;
        // }
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