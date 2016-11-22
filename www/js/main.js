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

function countdown(sec) {
	$("#till_boarding h3").html(sec-- + " min");
}

$(document).ready(function(){
	$('#enough_time').on('click', changeClass);
	
	sec = 53;
	var counter = setInterval(countdown(sec--), 1000);
});