var latitude=0.0;
var longitude=0.0;
var weather='';
var temperature;
function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition, showErrors);

	}
	else{
		alert("Your browser doesn't support GeoLocation");
	}
}

function showPosition(position){
	latitude=position.coords.latitude;
	longitude=position.coords.longitude;
	console.log(latitude);
	console.log(longitude);

		$.ajax({
		url:'https://fcc-weather-api.glitch.me/api/current',
		data: { lat: latitude, lon:longitude},
		dataType: 'jsonp',
		success: processResult


	});
}
function processResult(apiResult){
		weather = apiResult.weather[0].main;
		temperature = apiResult.main.temp;
		// console.log(apiResult.main.pressure);
		$('#cel').text('C');
		$('#place').append(apiResult.name + ', ' + apiResult.sys.country);
		$('#weatherType').append(apiResult.weather[0].main);
		$('#temp').prepend(apiResult.main.temp + '&deg; ');
		var weathertype = weather.toLowerCase();
	switch(weathertype){
	case 'haze':
	$('#weatherType').append('<img id="weather-icon" src="images/'+weathertype+'.png">');
	break;

	case 'clear':
	$('#weatherType').append('<img id="weather-icon" src="images/'+weathertype+'.png">');
	break;

	case 'snow':
	$('#weatherType').append('<img id="weather-icon" src="images/'+weathertype+'.png">');
	break;

	case 'thunderstorm':
	$('#weatherType').append('<img id="weather-icon" src="images/'+weathertype+'.png">');
	break;

	case 'rain':
	$('#weatherType').append('<img id="weather-icon" src="images/'+weathertype+'.png">');
	break;

	case 'clouds':
	$('#weatherType').append('<img id="weather-icon" src="images/'+weathertype+'.png">');
	break;

	default:
	$('#weatherType').append('<img id="weather-icon" src="images/'+weathertype+'.png">');
}

}
function showErrors(){
	console.log("Error");
}

$(document).ready(function(){
	$('#cel').click(function(e){
			e.preventDefault();
			console.log($(this).text());
			
			if($(this).text()=='C'){
				temperature = ((temperature*9)/5)+32;
				temperature = parseFloat(temperature.toFixed(2));
				console.log(temperature);
				$(this).text('F');
				 $('#temp').html(temperature + '&deg; ');
			}
			else if($(this).text()=='F'){
				temperature = ((temperature-32)*5)/9;
				temperature = parseFloat(temperature.toFixed(2));
				console.log(temperature);
				$(this).text('C');
				$('#temp').html(temperature + '&deg; ');

			}
			// $('#temp').html('30&deg;');

	});

});









// $(document).ready(function(){









// });

