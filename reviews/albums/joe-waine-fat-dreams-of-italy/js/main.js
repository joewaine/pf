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
  if($(this).hasClass('playing')){
  var audio = new Audio('fabio.mp3');
audio.pause(); 
$(this).css('border','5px solid red');
$(this).removeClass('playing')
}else{
  var audio = new Audio('fabio.mp3');
  audio.play();
  $(this).css('border','5px solid green');
  $(this).addClass('playing')

}
});