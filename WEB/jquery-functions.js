//Document ready block
$(document).ready(function(){
	console.log("ready");
});

//Shorthad for document raedy block
$(function() {
	console.log("ready");
});





$(document).ready(function(){
	alert("ready");
});

$(function() {
	alert("ready");
});


$(document).ready(function() {
    $("#ID").click().fadeIn("slow", function() {
        //Animation Complete
    });
});

$(function() {
    $("#ID").click().fadeIn("slow", function() {
        //Animation Complete
    });
});

$(document).ready(function() {
    $("ID").click(function (){
        $("#AnotherElement").fadeOut("fast", function() {
            //Animation Complete
        });
    });
});

$(function() {
    $("ID").click(function() {
        $("AnotherElement").fadeOut("fast", function() {
            //Animation Complete
        });
    });
});


$(document).ready(function() {
    $(".CLASS").bind("click", function() {
        alert("User clicked on CLASS");
    });
});

$(function() {
    $(".CLASS").bind('click', function() {
        alert("User clicke on CLASS");
    });
});

$(document).ready(function() {
    $(".CLASS").bind("nmouseenter", function() {
        //Target and manipulate element
    });
});

$(function() {
    $(".CLASS").bind('mouseleave', function() {
        //Target and manipulate element
    });
});


$(document).ready(function() {
    $(".CLASS").hover(function() {
        //Target and manipulate element
    });
});

$(function() {
    $(".CLASS").hover(function() {
        //Target and manipulate element
    });
});


$(document).ready(function() {
    $("button").click(function() {
        $("#ID, .CLASS, TAG").toggle("slow");
    });
});

$(function() {
    $("button").click(function() {
        $("#ID, .CLASS, TAG").toggle("slow");
    });
});


$(document).ready(function() {
    $("p").click(function() {
        $( this ).toggleClass(".CLASSNAME");
    });
});

$(function() {
    $("p").click(function() {
        $(this).toggleClass('.CLASSNAME');
    });
});


$(document).ready(function() {
    $("#ID").unbind("click", FUNCTIONNAME or something to detach);
});

$(function() {
    $("#ID").unbind("click", FUNCTIONNAME or something to detach);
});


$(document).ready(function () {
	$("span").appendTo("#foo");
});

$(function() {
	$("span").appendTo("#foo");
});


$(document).ready(function () {
	$("p").find("span").css("color", "red");
});


$(function() {
	$("p").find("span").css("color", "red");
});



$(document).ready(function() {
	$("#book").fadeOut("slow", function() {

	});
});

$(function() {
	$("#book").fadeOut("slow", function() {

	});
});


$(document).ready(function(){
	$( "div span:first-child" )
	.css( "text-decoration", "underline" ).hover(function() {
    $( this ).addClass( "sogreen" );
  }, function() {
    $( this ).removeClass( "sogreen" );
  });
});

$(function() {
	$("div span:first-child")
	.css("text-decoration", "underline").hover(function() {
		$(this).addClass("sogreen");
	}, function() {
		$(this).removeClass("sogreen");
	});
});

$(document).ready(function() {
	alert("Keep on learning");
});

$(function() {
	alert("Kepp on learning");
});


$(document).ready(function() {
	$("p").append("<strong>Hello</strong>");
});

$(function() {
	$("p").append("<strong>Hello</strong>");
});

$(document).ready(function() {
	$("span").appendTo("#foo");
});

$(function() {
	$("span").appendTo("#foo");
});


$(document).ready(function() {
	$("img").attr("alt");
});

$(function() {
	$("img").attr("alt");
});


$(document).ready(function() {
	$(".classes").animate({
		width: "30%",
		opacity: 0.5,
		height: "50%",
		width: "100%",
		border: "3px solid"
	}, 500)
});


$(function() {
	$(".classes").animate({
		width: "30%",
		opacity: 0.3,
		height: "50%",
		width: "100%",
		border: "3px solid"
	}, fast)
})
