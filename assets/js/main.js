$(document).ready(function(){

    (function() {
      $.scrollify({
    		section : "section",
    		sectionName : "section-name",
    		easing: "easeOutExpo",
    		scrollSpeed: 500,
    		offset : 0,
    		scrollbars: false,
        standardScrollElements: "img",
    		before:function() {},
    		after:function() {}
    	});

      $('li').click(function() {
      $.scrollify.move('#_' + $(this).attr('id'))
    })
  })()


    $("#icon").click(function(){
      $(this).toggleClass("clicked");
      $('.side_panel').toggleClass("open");
    });

    $(".site").click(function(e){
      switch(e.target.id){
        case "1":
          $("#dsk").attr("src","assets/img/YOUTHforWHO.jpg");
          $("#lap").attr("src","assets/img/YOUTHforWHO.jpg");
          $("#tab").attr("src","assets/img/YOUTHforWHO.jpg");
          $("#mob").attr("src","assets/img/YOUTHforWHO_mobile.jpg");
          break;
        case "2":
          $("#dsk").attr("src","assets/img/YFW_green.jpg");
          $("#lap").attr("src","assets/img/YFW_green.jpg");
          $("#tab").attr("src","assets/img/YFW_green.jpg");
          $("#mob").attr("src","assets/img/YFW_green.jpg");
          break;
        case "3":
          $("#dsk").attr("src","assets/img/site.jpg");
          $("#lap").attr("src","assets/img/site.jpg");
          $("#tab").attr("src","assets/img/site.jpg");
          $("#mob").attr("src","assets/img/site.jpg");
      }
    })

})
