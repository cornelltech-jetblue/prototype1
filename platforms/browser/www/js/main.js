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