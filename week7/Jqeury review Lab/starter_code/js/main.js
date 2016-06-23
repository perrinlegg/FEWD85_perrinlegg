$( document ).ready(function() {

$(function(){
	$("#submit-btn").on('click', function(event){
		event.preventDefault();
		var city = $('#city-type').val();
		if (city === 'new york' || city === 'nyc') {
		$('body').attr('class', 'nyc');
		}
		else if (city === 'san fransisco' || city === 'sf'){
		$('body').attr('class', 'sf');
		}
		else if (city === 'los angeles' || city === 'la') {
		$('body').attr('class', 'la');
		}
		else if (city === 'austin') {
		$('body').attr('class', 'austin');
		}
		else if (city === 'sydney'){
		$('body').attr('class', 'sydney');
		}





})

});

});