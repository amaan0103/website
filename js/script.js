$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

$('#gform').on('submit', function(e) {
  var name=document.getElementById("entry.263992659").value;
  var insert="Thank You " + name + "!!!";
  $('#gform *').fadeOut(1000);
  $('#feedback').fadeOut(1000);
  setTimeout(function() {
		document.getElementById("thankyouH2").innerHTML = insert;
		$('#thankyou').fadeIn(1000);
	  },1000);
  setTimeout(function() {
		document.getElementById("wink").className = "far fa-smile-wink fa-3x";
		setTimeout(function() {
		    document.getElementById("wink").className = "far fa-smile fa-3x";
	    },1000);
  },2000);
});
