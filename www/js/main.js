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

function boardingAlert() {
	alert('Boarding will begin in: 05 minutes\n\n\nPlease make your way to the gate');
}

$(document).ready(function(){
	$('#enough_time').on('click', changeClass);
	$('#h4Alert').on('click', boardingAlert);
});