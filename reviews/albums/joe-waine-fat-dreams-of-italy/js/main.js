$('.player-trigger-button.subpanel-triggers__button, .menu-icon, .search-icon').click(function(){


    window.location.href = "https://www.pitchfork.com";


});




$('.facebookshare').click(function(){
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://kind-golick-e2382d.netlify.com/');
    return false;
  });


  $('.twittershare').click(function(){
    window.open('https://twitter.com/share?url=https://kind-golick-e2382d.netlify.com/');
    return false;
  });







$('.button.condensed-playback-button').click(function(){
  var audio = new Audio('where.mp3');
audio.play();
});
