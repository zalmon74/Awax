$(document).ready(function(){
  $("#header__menu_toggle").click(function(event){
    $("#header__nav").toggleClass("active");
  });
  // Intro slider
  $(".intro__slider").slick({
    arrows: false,
    dots: true,
    autoplay: true
  });
  // PlayStopVideo
  $("#about__video").on("tap", function(event) {PlayStopVideo()});
  // About Read More
  $(".about__button").click(function(event){
    let more_text = document.getElementById("about__more_text");
    let button = document.getElementById("about__button");  
    if (more_text.style.display == "none") {
      button.value = "hidden";
      more_text.style.display = "inline";
    } else {
      button.value = "learn more";
      more_text.style.display = "none";
    }
  });
});

// Play Stop Video
function PlayStopVideo() {
  if ($(window).width() <= "1000")
    PlayStopVideoForMobile();
  else
    PlayStopVideoForPC();
}

function PlayStopVideoForMobile() {
  let video_item = document.getElementById("about__video")
  let str_pause_video = "video_play";
  if (video_item.classList.contains(str_pause_video))
  {
    video_item.pause();
    video_item.classList.remove(str_pause_video);
  }
  else {
    video_item.play();
    video_item.classList.add(str_pause_video);
  }
}

function PlayStopVideoForPC() {
  let video_item = document.getElementById("about__video")
  let str_pause_video = "video_play";
  if (video_item.classList.contains(str_pause_video))
  {
    console.log("video_item.classList")
    video_item.pause();
    video_item.classList.remove(str_pause_video);
  }
  else {
    video_item.classList.add(str_pause_video);
  }
}