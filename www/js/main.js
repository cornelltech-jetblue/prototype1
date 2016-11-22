function changeClass() {
	switch($('#enough_time').attr('class')) {
		case 'green':
			$('#enough_time').removeClass();
			$(this).addClass('amber');
			break;
		case 'amber':
			$('#enough_time').removeClass();
			$(this).addClass('red');
			break;
		default:
			$('#enough_time').removeClass();
			$(this).addClass('green');
			break;
	}
}

function till_boarding() {
	tb = parseInt($("#till_boarding h3 span").html());
	tg = parseInt($("#till_gate h3 span").html());

	if (tg + 20 == tb) { // go amber
		$('#enough_time').removeClass().addClass('amber');
	}

	if (tg == tb) { // go red
		$('#enough_time').removeClass().addClass('red');
	}

	if (tb > 0) {
		$("#till_boarding h3 span").html(tb - 1);
	}
}

function till_gate() {
	cur = parseInt($("#till_gate h3 span").html());
	if (cur > 0) {
		$("#till_gate h3 span").html(cur - 1);
	}
}

function till_land() {
	cur = parseInt($("#till_land h3 span").html());
	if (cur > 0) {
		$("#till_land h3 span").html(cur - 1);
	}
}

$(document).ready(function(){
	$('#enough_time').on('click', changeClass);
	var counter1 = setInterval(till_boarding, 200);
	var counter2 = setInterval(till_gate, 3000);
	var counter3 = setInterval(till_land, 500);

	$("#enough_time_post_board img").animate(
		{
			left: '+=100px',
			top: '+=30px'
		}, 11000
	);
});

