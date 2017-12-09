$(document).ready(function(){
  (function() {
    $.scrollify({
  		section : "section",
  		sectionName : "section-name",
  		easing: "easeOutExpo",
  		scrollSpeed: 1000,
  		offset : 0,
  		scrollbars: false,
  		before:function() {},
  		after:function() {}
  	});

    $('li').click(function() {
    $.scrollify.move('#' + $(this).attr('id'))
  })

  })()
})
