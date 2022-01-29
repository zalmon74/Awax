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
  // Switch active menu for projects
  document.addEventListener('click', e => SwitchActiveElementForProjectsMenu(e))
  // Projects more
  $(".projects__button").click(function(event){ 
    let more_text = document.getElementsByClassName("projects__more");
    let button = document.getElementById("projects__button");
    for (let ind = 0; ind < more_text.length; ind++) { 
      if (more_text[ind].style.display == "none") {
        button.value = "hidden";
        more_text[ind].style.display = "flex";
        more_text[ind].style.flexWrap = "wrap";
        more_text[ind].style.justifyContent = "space-around";
      } else {
        button.value = "more projects";
        more_text[ind].style.display = "none";
      }
    };
  });
  // Team slider
  StartSliderTeam();
  //clients slider
  $(".clients__inner").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
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

// Switch active menu for projects
function SwitchActiveElementForProjectsMenu(element){
  if (element.target.classList == "projects__menu_item") {    
    $(".projects__menu_item").removeClass("active");
    element.target.classList.add("active")
    let arr_blocks_projects = [".projects__photo", ".projects__brand", ".projects__ad", ".projects__develop", ".projects__misc"];
    arr_blocks_projects.forEach(e => $(e).removeClass("active"));
    switch (element.target.id){
      case "project__menu_item_0":
        arr_blocks_projects.forEach(e => $(e).addClass("active"));
        break;
      case "project__menu_item_1":
        $(arr_blocks_projects[0]).addClass("active");
        break;
      case "project__menu_item_2":
        $(arr_blocks_projects[1]).addClass("active");
        break;
      case "project__menu_item_3":
        $(arr_blocks_projects[2]).addClass("active");
        break;
      case "project__menu_item_4":
        $(arr_blocks_projects[3]).addClass("active");
        break;
      case "project__menu_item_5":
        $(arr_blocks_projects[4]).addClass("active");
        break;
    }; 
  }
}

// Start slider team
function StartSliderTeam() {
  let width = $(window).width();
  let count_slides_to_show = 0;
  if (width > "900")
    count_slides_to_show = 3;
  else if (width > "600")
    count_slides_to_show = 2;
    else
    count_slides_to_show = 1;

  $(".team__inner").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: count_slides_to_show,
    slidesToScroll: count_slides_to_show
  });
}
